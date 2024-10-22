import { Router, Request, Response } from "express";
import { authMiddleware } from "../middleware";
import { signInSchema, signUpSchema } from "../types";
import { client } from "../db";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

const router = Router();

router.post("/signin", async (req, res) => {
  const body = req.body;
  const parsedData = signInSchema.safeParse(body);

  if (!parsedData.success) {
    res.status(411).json({
      message: "Incorrect Inputs",
    });
    return;
  }

  const user = await client.user.findFirst({
    where: {
      email: parsedData.data.email,
      password: parsedData.data.password,
    },
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user.id,
      },
      JWT_SECRET
    );
    res.status(200).json({
      token,
    });
    return;
  } else {
    res.status(403).json({
      message: "Invalid Credentials",
    });
    return;
  }
});

router.post("/signup", async (req, res) => {
  const body = req.body;
  const parsedData = signUpSchema.safeParse(body);

  if (!parsedData.success) {
    res.status(411).json({
      message: "Incorrect Inputs",
    });
    return;
  }

  const userExist = await client.user.findFirst({
    where: {
      email: parsedData.data.email,
    },
  });

  if (userExist) {
    res.status(403).json({
      message: "User Already exist",
    });
    return;
  }

  await client.user.create({
    data: {
      email: parsedData.data.email,
      password: parsedData.data.password,
      name: parsedData.data.name,
    },
  });

  res.json({
    message: "Please verify your account",
  });
  return;
});

router.get("/user", authMiddleware, async (req, res) => {
  //@ts-ignore
  const id = req.id;

  const user = await client.user.findFirst({
    where: { id },
    select: {
      name: true,
      email: true,
    },
  });

  res.json({ user });
  return;
});

export default router;
