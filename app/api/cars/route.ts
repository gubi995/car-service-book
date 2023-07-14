import { NextRequest, NextResponse } from 'next/server';

import { readCarJson, updateCarJson } from '@/app/api/cars/utils';
import { CarSchema } from '@/types/car';

export async function GET() {
  return NextResponse.json({ cars: readCarJson() });
}

export const POST = async (request: NextRequest) => {
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

  const { chassisNumber } = carToUpdate.data;

  if (cars.find(({ chassisNumber: cn }) => cn === chassisNumber))
    return NextResponse.json(
      {
        error: `There is already a car registered with ${chassisNumber} chassis number.`,
      },
      { status: 400 }
    );

  updateCarJson([...cars, carToUpdate.data]);

  return new Response(undefined, { status: 201 });
};
