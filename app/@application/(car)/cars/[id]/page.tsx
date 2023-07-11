import { getCarById, updateCar } from '@/app/api/cars/operations';
import Button from '@/ui/Button';
import Input from '@/ui/Input';
import Select from '@/ui/Select';

export default async function CarDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const {
    brand,
    type,
    chassisNumber,
    enginePerformance,
    plateNumber,
    serviceInterval,
    serviceIntervalMetric,
    year,
    motorNumber,
    owner: { name, address, phoneNumber },
  } = await getCarById(params.id);

  return (
    <div className="mx-8 my-5">
      <h2 className="text-3xl font-bold">
        {brand} {type}
      </h2>

      <form action={updateCar} className="mt-4 flex flex-col gap-1">
        <Input
          label="Chassis number"
          inputProps={{
            name: 'chassisNumber',
            defaultValue: chassisNumber,
            readOnly: true,
          }}
        />
        <Input
          label="Plate number"
          inputProps={{ name: 'plateNumber', defaultValue: plateNumber }}
        />
        <Input
          label="Year"
          inputProps={{ name: 'year', type: 'number', defaultValue: year }}
        />
        <Input
          label="Engine performance"
          inputProps={{
            name: 'enginePerformance',
            defaultValue: enginePerformance,
          }}
        />
        <Input
          label="Motor number"
          inputProps={{ name: 'motorNumber', defaultValue: motorNumber }}
        />
        <Input
          label="Service interval"
          inputProps={{
            name: 'serviceInterval',
            defaultValue: serviceInterval,
          }}
        />
        <Select
          label="Service interval metric"
          selectProps={{
            name: 'serviceIntervalMetric',
            defaultValue: serviceIntervalMetric,
          }}
          options={[
            { children: 'km', value: 'km' },
            { children: 'mi', value: 'mi' },
          ]}
        />

        <h3 className="mb-2 mt-3 font-semibold">Owner details</h3>
        <Input label="Name" inputProps={{ name: 'name', defaultValue: name }} />
        <Input
          label="Address"
          inputProps={{ name: 'address', defaultValue: address }}
        />
        <Input
          label="Phone number"
          inputProps={{ name: 'phoneNumber', defaultValue: phoneNumber }}
        />

        <Button type="submit" className="mt-5 w-[150px] self-center">
          Update
        </Button>
      </form>
    </div>
  );
}
