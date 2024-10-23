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
    await client.zap.create({
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
  } catch (error) {
    throw new Error("Incorrect Action/Triggers");
  }
});

router.get("/:zapId", authMiddleware, () => {
  console.log("zpid");
});

export default router;
