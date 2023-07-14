import { createCar } from '@/app/api/cars/operations';
import CarForm from '@/components/CarForm';

export default function NewCar() {
  return (
    <div className="px-8 py-5">
      <h2 className="text-3xl font-bold"></h2>
      <CarForm operation={createCar} />
    </div>
  );
}
