import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string().min(5),
  password: z.string().min(6),
  name: z.string().min(3),
});

export const signInSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const zapCreateSchema = z.object({
  availableTriggerId: z.string(),
  triggerMetadata: z.any().optional(),
  action: z.array(
    z.object({
      availableActionId: z.string(),
      actionMetadata: z.any().optional(),
    })
  ),
});
