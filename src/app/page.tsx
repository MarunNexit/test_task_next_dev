'use server';

import { fetchVehicleMakes } from '@/app/api/fetchVehicleMakes';
import Filter from '@/app/components/filter/Filter';

export default async function FilterPage() {
  const vehicleMakes = await fetchVehicleMakes();

  return (
    <div>
      <div
        className="relative flex min-h-screen items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/background_img.webp')" }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-tr from-blue-800 to-transparent opacity-100"></div>

        <div className="relative left-60 z-10 p-6">
          <h1 className="mb-10 mt-10 text-6xl font-bold">Filter car online</h1>
          <Filter vehicleMakes={vehicleMakes} />
        </div>
      </div>
    </div>
  );
}
