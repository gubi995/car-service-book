import { NextRequest, NextResponse } from 'next/server';

import { readCarJson, updateCarJson } from '@/app/api/cars/utils';
import { Car } from '@/types/car';

export const GET = (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const cars = readCarJson();

  const car = cars.find(({ chassisNumber }) => chassisNumber === params.id);

  if (!car)
    return NextResponse.json(
      {
        error: 'Car not found with the provided chassis number.',
      },
      { status: 404 }
    );

  return NextResponse.json(car);
};

export const PATCH = async (request: NextRequest) => {
  const cars = readCarJson();
  const carToUpdate = (await request.json()) as unknown as Car;

  const carIndexToUpdate = cars.findIndex(
    (car) => car.chassisNumber === carToUpdate.chassisNumber
  );

  if (carIndexToUpdate === -1)
    return NextResponse.json(
      {
        error: 'Car not found with the provided chassis number.',
      },
      { status: 404 }
    );

  cars[carIndexToUpdate] = { ...cars[carIndexToUpdate], ...carToUpdate };

  updateCarJson(cars);

  return new Response(undefined, { status: 200 });
};
