import { z } from "zod";

export const moverRoverSchema = z.object({
  plateau: z.string().refine((value) => /^\d+\s\d+$/.test(value), {
    message: "Plateau must have two integers separated by a space",
  }).refine((value) => {
    const [x, y] = value.split(" ").map(Number);
    return x !== y;
  }, {
    message: "The dimensions of the plateau cannot be the same",
  }),
  initialPosition: z
    .string()
    .refine((value) => /^\d+\s\d+\s[NSEW]$/.test(value), {
      message: "Initial position must have two integers and a direction (N, S, E, W) separated by spaces",
    }),
  commands: z.string().refine((value) => /^[LRM]+$/.test(value), {
    message: "Commands must contain only L, R, and M",
  }),
  initialPosition2: z
    .string()
    .refine((value) => /^\d+\s\d+\s[NSEW]$/.test(value), {
      message: "Initial position 2 must have two integers and a direction (N, S, E, W) separated by spaces",
    })
    .optional(),
  commands2: z.string().refine((value) => /^[LRM]+$/.test(value), {
    message: "Commands 2 must contain only L, R, and M",
  }).optional(),
}).superRefine((data, ctx) => {
  if (data.initialPosition && data.initialPosition2 && data.initialPosition === data.initialPosition2) {
    ctx.addIssue({
      code: 'custom',
      path: ['initialPosition2'],
      message: "Initial positions must not be the same",
    });
  }
  if (data.commands && data.commands2 && data.commands === data.commands2) {
    ctx.addIssue({
      code: 'custom',
      path: ['commands2'],
      message: "Commands must not be the same",
    });
  }
});

export type MoverRoverSchemaProps = z.infer<typeof moverRoverSchema>;
