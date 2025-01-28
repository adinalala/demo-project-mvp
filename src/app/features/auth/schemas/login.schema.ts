import * as z from 'zod';

export const loginSchema = z.object({
    email: z
        .string()
        .min(1)
        .email()
        .transform((value) => value.toLowerCase()),
    password: z.string().min(1)
});

export type LoginData = z.infer<typeof loginSchema>;
