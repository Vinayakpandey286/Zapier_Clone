import { Router } from "express";
import { authMiddleware } from "../middleware";
import { zapCreateSchema } from "../types";
import { client } from "../db";

const router = Router();

router.post("/", authMiddleware, async (req, res) => {
  const body = req.body;
  //@ts-ignore
  const id = req.id;
  const parsedData = zapCreateSchema.safeParse(body);

  if (!parsedData.success) {
    res.status(411).json({
      message: "Incorrect Inputs",
    });
    return;
  }

  try {
    const zap = await client.zap.create({
      data: {
        userId: id, // Connect Zap to a User
        trigger: {
          create: {
            triggerId: parsedData.data.availableTriggerId, // The ID of AvailableTrigger
          },
        },
        action: {
          create: parsedData.data.action.map((x, index) => ({
            actionId: x.availableActionId,
            sortingOrder: index,
          })),
        },
      },
    });

    res.status(200).json({
      url: `http://localhost:3001/hooks/catch/:${id}/:${zap.id}`,
    });

    return;
  } catch (error) {
    throw new Error("Incorrect Action/Triggers");
  }
});

router.get("/", authMiddleware, async (req, res) => {
  //@ts-ignore
  const id = req.id;

  const zaps = await client.zap.findMany({
    where: {
      userId: id,
    },
    include: {
      trigger: {
        include: {
          type: true,
        },
        select: {
          zapId: false,
        },
      },
      action: {
        include: {
          type: true,
        },
        select: {
          zapId: false,
        },
      },
    },
  });

  res.status(200).json({
    zaps,
  });
  return;
});
router.get("/:zapId", authMiddleware, async (req, res) => {
  //@ts-ignore
  const id = req.id;
  const zapId = req.params.zapId || "";

  const zaps = await client.zap.findMany({
    where: {
      userId: id,
      id: zapId,
    },
    include: {
      trigger: {
        include: {
          type: true,
        },
      },
      action: {
        include: {
          type: true,
        },
      },
    },
  });

  res.status(200).json({
    zaps,
  });
  return;
});

export default router;
