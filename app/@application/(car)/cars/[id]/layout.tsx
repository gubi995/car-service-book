import { ReactNode } from 'react';

import { getCarById, updateCar } from '@/app/api/cars/operations';
import Accordion from '@/ui/Accordion';
import CarForm from '@/components/CarForm';

export default async function CarDetailsLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { id: string };
}) {
  const car = await getCarById(params.id);

  return (
    <div className="px-8 py-5">
      <h2 className="text-3xl font-bold">
        {car.make} {car.model}
      </h2>
      <Accordion label="Details">
        <CarForm car={car} operation={updateCar} />
      </Accordion>
      {children}
    </div>
  );
}
