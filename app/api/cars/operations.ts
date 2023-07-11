'use server';

import { Car } from '@/types/car';
import { revalidateTag } from 'next/cache';

export const getCars = async () => {
  const response = await fetch('http://localhost:3000/api/cars', {
    next: { tags: ['car'] },
  });

  if (!response.ok) throw new Error('Failed to fetch cars.');

  const data = await response.json();

  return data.cars as Car[];
};

export const getCarById = async (chassisNumber: string) => {
  const response = await fetch(
    `http://localhost:3000/api/cars/${chassisNumber}`,
    { next: { tags: ['car', chassisNumber] } }
  );

  if (!response.ok)
    throw new Error(`Failed to load car with ${chassisNumber} chassis number.`);

  const data = await response.json();

  return data as Car;
};

export const updateCar = async (form: FormData) => {
  const car = Object.fromEntries(form.entries());

  const response = await fetch(
    `http://localhost:3000/api/cars/${car.chassisNumber}`,
    {
      method: 'PATCH',
      body: JSON.stringify(car),
    }
  );

  if (!response.ok)
    throw new Error(
      `Failed to update car with ${car.chassisNumber} chassis number.`
    );

  revalidateTag('car');
};
