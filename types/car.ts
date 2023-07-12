export interface Car {
  make: string;
  model: string;
  year: number;
  enginePerformance: string;
  motorNumber?: string;
  chassisNumber: string;
  plateNumber: string;
  mileage: number;
  fuelType: 'Diesel' | 'Petrol' | 'CNG';
  serviceInterval: number;
  metric: 'km' | 'mi';
  owner: Owner;
}

export interface Owner {
  name: string;
  address?: string;
  phoneNumber?: string;
}

export interface Service {}
