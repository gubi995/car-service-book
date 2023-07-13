import { z } from 'zod';

export const OwnerSchema = z.object({
  name: z.string().nonempty(),
  address: z.string().optional(),
  phoneNumber: z.string().optional(),
});

export const CarSchema = z.object({
  make: z.string().nonempty(),
  model: z.string().nonempty(),
  year: z.coerce.number().gte(1990).lte(new Date().getFullYear()),
  enginePerformance: z.string().optional(),
  motorNumber: z.string().optional(),
  chassisNumber: z.string().nonempty(),
  plateNumber: z.string().optional(),
  mileage: z.coerce.number().nonnegative(),
  fuelType: z.literal('Diesel').or(z.literal('Petrol')).or(z.literal('CNG')),
  serviceInterval: z.coerce.number().optional(),
  metric: z.literal('km').or(z.literal('mi')),
  owner: OwnerSchema,
});

export type Owner = z.infer<typeof OwnerSchema>;

export type Car = z.infer<typeof CarSchema>;

// export interface Service {}
