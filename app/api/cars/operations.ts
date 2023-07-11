import { Car } from '@/types/car';

export const getCars = async () => {
  const response = await fetch('http://localhost:3000/api/cars');

  if (!response.ok) throw new Error('Failed to fetch cars');

  const data = await response.json();

  return data.cars as Car[];
};

export const getCarById = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/cars/${id}`);

  if (!response.ok)
    throw new Error(`Failed to load car with ${id} chassis number`);

  const data = await response.json();

  return data as Car;
};
