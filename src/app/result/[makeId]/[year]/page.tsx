'use server';

import VehicleModelList from '@/app/components/result/VehicleModelList';
import { Suspense } from 'react';
import { ResultPageProps } from '@/app/types';

export const generateStaticParams = async () => {
  const response = await fetch(`${process.env.VEHICLE_MAKES_API_URL}`);
  const data = await response.json();

  const paths = [];
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2015 + 1 },
    (_, i) => currentYear - i
  );

  for (const make of data.Results) {
    for (const year of years) {
      paths.push({ makeId: make.MakeId, year });
    }
  }

  return paths.map((path) => ({
    params: {
      makeId: path.makeId.toString(),
      year: path.year.toString(),
    },
  }));
};

export default async function ResultPage(props: {
  params: Promise<ResultPageProps>;
}) {
  const propsPage = await props.params;
  const makeId = propsPage.makeId;
  const year = propsPage.year;
  const paramsPromise = Promise.resolve({ makeId, year });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 text-gray-700">
      <h1 className="mb-6 text-3xl font-bold">Vehicle Models</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <VehicleModelList params={paramsPromise} />
      </Suspense>
    </div>
  );
}
