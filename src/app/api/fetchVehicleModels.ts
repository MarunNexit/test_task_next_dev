'use server';

import { VehicleModel } from '@/app/types';

export const fetchVehicleModels = async (
  makeId: string,
  year: string
): Promise<VehicleModel[]> => {
  const response = await fetch(
    `${process.env.VEHICLE_MODELS_API_URL}/makeId/${makeId}/modelyear/${year}?format=json`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch vehicle models');
  }
  const data = await response.json();
  return data.Results || [];
};
