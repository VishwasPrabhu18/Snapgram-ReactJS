import { z } from "zod";

export const SignUpValidation = z.object({
  name: z.string().min(2, {message: "To short"}),
  username: z.string().min(2, { message: "To short" }),
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must be of 8 charactes" }),
});

export const SignInValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must be of 8 charactes" }),
});

export const PostValidation = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string(),
});