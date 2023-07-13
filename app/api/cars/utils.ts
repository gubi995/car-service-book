import { readFileSync, writeFileSync } from 'fs';

import { CarSchema } from '@/types/car';

export const readCarJson = () => {
  const carsJSON = readFileSync('db/cars.json').toString();
  const { cars } = JSON.parse(carsJSON) as { cars: Car[] };

  return cars;
};

export const updateCarJson = (cars: Car[]) => {
  writeFileSync('db/cars.json', JSON.stringify({ cars }));
};
