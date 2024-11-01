'use server';

export const fetchVehicleMakes = async () => {
  const response = await fetch(`${process.env.VEHICLE_MAKES_API_URL}`);
  const data = await response.json();
  return data.Results;
};
