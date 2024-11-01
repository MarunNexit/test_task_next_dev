import { ResultPageProps, VehicleModel } from '@/app/types';
import { fetchVehicleModels } from '@/app/api/fetchVehicleModels';
import ErrorMessage from '@/app/components/result/ErrorMessage';

export default async function VehicleModelList(props: {
  params: Promise<ResultPageProps>;
}) {
  const propsPage = await props.params;
  const makeId = propsPage.makeId;
  const year = propsPage.year;

  let models: VehicleModel[] = [];
  let error: string | null = null;

  try {
    models = await fetchVehicleModels(makeId, year);
  } catch (err) {
    error = (err as Error).message;
  }

  return (
    <div>
      {error ? (
        <ErrorMessage message={error} />
      ) : models.length === 0 ? (
        <p className="text-gray-500">
          No vehicle models found for this selection.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {models
            .filter(
              (model, index, self) =>
                index === self.findIndex((m) => m.Model_ID === model.Model_ID)
            )
            .map((model) => (
              <div
                key={model.Model_ID}
                className="transform rounded bg-white p-4 shadow transition-transform hover:scale-105"
              >
                <h2 className="text-lg font-semibold">{model.Model_Name}</h2>
                <p className="text-sm text-gray-600">
                  Model ID: {model.Model_ID}
                </p>
                <p className="text-sm text-gray-600">Make: {model.Make_Name}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
