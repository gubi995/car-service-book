import { NextRequest, NextResponse } from 'next/server';

import { readCarJson, updateCarJson } from '@/app/api/cars/utils';
import { CarSchema } from '@/types/car';

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
  const car = await request.json();
  const carToUpdate = CarSchema.safeParse(car);

  if (!carToUpdate.success)
    return NextResponse.json(
      {
        error: carToUpdate.error.formErrors.fieldErrors,
      },
      { status: 400 }
    );

  const carIndexToUpdate = cars.findIndex(
    (car) => car.chassisNumber === carToUpdate.data.chassisNumber
  );

  if (carIndexToUpdate === -1)
    return NextResponse.json(
      {
        error: 'Car not found with the provided chassis number.',
      },
      { status: 404 }
    );

  cars[carIndexToUpdate] = { ...cars[carIndexToUpdate], ...carToUpdate.data };

  updateCarJson(cars);

  return new Response(undefined, { status: 200 });
};
