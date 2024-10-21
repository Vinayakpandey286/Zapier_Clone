import { PrismaClient } from "@prisma/client";
import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "outbox-processor",
  brokers: ["localhost:9092"],
});

const client = new PrismaClient();

const TOPIC_NAME = "zap-events";

async function main() {
  const producer = kafka.producer();
  await producer.connect();
  while (true) {
    const pendingRows = await client.zapRunOutbox.findMany({
      where: {},
      take: 10,
    });

    producer.send({
      topic: TOPIC_NAME,
      messages: pendingRows.map((r) => ({
        value: r.zapRunId,
      })),
    });
  }
}

main();
