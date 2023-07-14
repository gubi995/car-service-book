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

export const updateCar = async (car: Car) => {
  const response = await fetch(
    `http://localhost:3000/api/cars/${car.chassisNumber}`,
    {
      cache: 'no-store',
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

export const createCar = async (car: Car) => {
  const response = await fetch(`http://localhost:3000/api/cars`, {
    cache: 'no-store',
    method: 'POST',
    body: JSON.stringify(car),
  });

  if (!response.ok) throw new Error(`Failed to register the provided car.`);

  revalidateTag('car');
};
