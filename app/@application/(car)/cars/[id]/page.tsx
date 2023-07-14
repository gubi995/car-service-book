import { getCarById } from '@/app/api/cars/operations';
import { updateCar } from '@/app/api/cars/operations';
import CarForm from '@/components/CarForm';
import Accordion from '@/ui/Accordion';

export default async function CarDetailPage({
  params,
}: {
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
    </div>
  );
}
