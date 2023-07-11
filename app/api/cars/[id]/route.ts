import { NextRequest, NextResponse } from 'next/server';

import { readCarJson } from '../utils';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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
}
