import { z } from "zod";

export const moverRoverSchema = z.object({
  plateau: z.string().refine((value) => /^\d+\s\d+$/.test(value), {
    message: "Plateau must have two integers separated by a space",
  }),
  initialPosition: z
    .string()
    .refine((value) => /^\d+\s\d+\s[NSEW]$/.test(value), {
      message: "(N, S, E, W) separated by spaces",
    }),
  commands: z.string().refine((value) => /^[LRM]+$/.test(value), {
    message: "Only L, R, and M",
  }),
});

export type MoverRoverSchemaProps = z.infer<typeof moverRoverSchema>;
