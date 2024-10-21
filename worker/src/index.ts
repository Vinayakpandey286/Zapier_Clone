// import { PrismaClient } from "@prisma/client";
import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "outbox-processor",
  brokers: ["localhost:9092"],
});

// const client = new PrismaClient();

const TOPIC_NAME = "zap-events";

async function main() {
  const consumer = kafka.consumer({ groupId: "main-worker" });
  await consumer.connect();

  await consumer.subscribe({ topic: TOPIC_NAME, fromBeginning: true });

  await consumer.run({
    autoCommit: false, // this will tell kafka that dont assume that work is done and will automatically acknowldge e.g that email is send
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });

      await new Promise((r) => setTimeout(r, 1000));

      // below is the acknowledgement that work is done
      //so in offset if server crashes in message 5 so we have to do +1 because it will start from 4
      await consumer.commitOffsets([
        {
          topic: TOPIC_NAME,
          partition: partition,
          offset: (parseInt(message.offset) + 1).toString(), // parseInt becasue 5+1 in string is 51 so it will from current message -51 message
        },
      ]);
    },
  });
}

main();
