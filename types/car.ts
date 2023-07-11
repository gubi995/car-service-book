export interface Car {
  brand: string;
  type: string;
  year: number;
  enginePerformance: string;
  motorNumber?: string;
  chassisNumber: string;
  plateNumber: string;
  serviceInterval: number;
  serviceIntervalMetric: string;
  owner: Owner;
}

export interface Owner {
  name: string;
  address?: string;
  phoneNumber?: string;
}

export interface Service {}
