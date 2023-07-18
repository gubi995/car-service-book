import { getCarById } from '@/app/api/cars/operations';
import Accordion from '@/ui/Accordion';
import Button from '@/ui/Button';

export default async function CarDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { services } = await getCarById(params.id);

  return (
    <Accordion label="Services">
      <div className="py-5">
        <ul className="flex snap-x gap-3 overflow-x-auto">
          {services.length ? (
            services.map((value) => (
              <li
                key={value.toISOString()}
                className="snap-center whitespace-nowrap"
              >
                <Button>{value.toLocaleDateString()}</Button>
              </li>
            ))
          ) : (
            <div className="flex w-full items-center justify-between">
              <span>No service recorded yet.</span>
              <Button>Add Service</Button>
            </div>
          )}
        </ul>
      </div>
    </Accordion>
  );
}
