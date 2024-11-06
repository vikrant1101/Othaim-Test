import { z, ZodType } from 'zod';
export const reasonOptions = ['Suggestion', 'Complaints', 'Inquiries'];
export const phoneRegex = new RegExp(/^(\+971|0)?5\d{8}$/);
export type Reason = (typeof reasonOptions)[number];
export const ContactUsSchema = z.object({
  name: z.string().min(1, { message: 'This field is required' }),
  job: z.string().min(1, { message: 'This field is required' }),
  email: z.string().email({ message: 'This field is required' }),
  mobile_number: z
    .string()
    .regex(phoneRegex, { message: 'Please enter valid mobile numbers.' })
    .max(15, { message: 'Phone number must not exceed 15 characters.' }),
  iktissab: z.string().optional(),
  reason: z.string().min(1, { message: 'This field is required' }),
  comments: z
    .string()
    .min(1, { message: 'This field is required' })
    .max(500, { message: 'Maximum charachter allowed 500' }),
});
export type FormData = z.infer<typeof ContactUsSchema>;
