import { readFileSync } from 'fs';

import { Car } from '@/types/car';

export const readCarJson = () => {
  const carsJSON = readFileSync('db/cars.json').toString();
  const { cars } = JSON.parse(carsJSON) as { cars: Car[] };

  return cars;
};
