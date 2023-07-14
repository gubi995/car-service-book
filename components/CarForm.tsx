'use client';

import { useTransition } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Car, CarSchema } from '@/types/car';
import Button from '@/ui/Button';
import Input from '@/ui/Input';
import Select from '@/ui/Select';

const defaultValues: Car = {
  make: '',
  model: '',
  chassisNumber: '',
  fuelType: 'Petrol',
  metric: 'km',
  mileage: 0,
  year: 0,
  enginePerformance: '',
  motorNumber: '',
  plateNumber: '',
  serviceInterval: 0,
  owner: {
    name: '',
    address: '',
    phoneNumber: '',
  },
};

interface CarFormProps {
  car?: Car;
  operation: (car: Car) => Promise<void>;
}

export default function CarForm({ car, operation }: CarFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<Car>({
    mode: 'onBlur',
    defaultValues: car ?? defaultValues,
    resolver: zodResolver(CarSchema),
  });
  const [isPending, startTransition] = useTransition();

  const onSubmit: SubmitHandler<Car> = (car) => {
    startTransition(() => {
      operation(car);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex flex-col">
      {!Boolean(car) && (
        <>
          <Input
            label="Make"
            inputProps={{
              ...register('make'),
            }}
            error={errors?.make?.message}
          />
          <Input
            label="Model"
            inputProps={{
              ...register('model'),
            }}
            error={errors?.model?.message}
          />
        </>
      )}
      <Input
        label="Chassis number"
        inputProps={{
          readOnly: Boolean(car),
          ...register('chassisNumber'),
        }}
        error={errors?.chassisNumber?.message}
      />
      <Input
        label="Plate number"
        inputProps={register('plateNumber')}
        error={errors?.plateNumber?.message}
      />
      <Select
        label="Fuel type"
        selectProps={register('fuelType')}
        options={[
          { children: 'Diesel', value: 'Diesel' },
          { children: 'Petrol', value: 'Petrol' },
          { children: 'CNG', value: 'CNG' },
        ]}
        error={errors?.fuelType?.message}
      />
      <Input
        label="Year"
        inputProps={{ type: 'number', ...register('year') }}
        error={errors?.year?.message}
      />
      <Input
        label="Engine performance"
        inputProps={register('enginePerformance')}
        error={errors?.enginePerformance?.message}
      />
      <Input
        label="Motor number"
        inputProps={register('motorNumber')}
        error={errors?.motorNumber?.message}
      />
      <Select
        label="Metric"
        selectProps={register('metric')}
        options={[
          { children: 'km', value: 'km' },
          { children: 'mi', value: 'mi' },
        ]}
        error={errors?.metric?.message}
      />
      <Input
        label="Mileage"
        inputProps={register('mileage')}
        error={errors?.mileage?.message}
      />
      <Input
        label="Service interval"
        inputProps={register('serviceInterval')}
        error={errors?.serviceInterval?.message}
      />

      <h3 className="mb-2 mt-3 font-semibold">Owner details</h3>
      <Input
        label="Name"
        inputProps={register('owner.name')}
        error={errors?.owner?.name?.message}
      />
      <Input
        label="Address"
        inputProps={register('owner.address')}
        error={errors?.owner?.address?.message}
      />
      <Input
        label="Phone number"
        inputProps={register('owner.phoneNumber')}
        error={errors?.owner?.phoneNumber?.message}
      />

      <Button
        type="submit"
        disabled={isPending || !isDirty || !isValid}
        className="mt-5 w-[150px] self-center"
      >
        {car ? 'Update' : 'Create'}
      </Button>
    </form>
  );
}
