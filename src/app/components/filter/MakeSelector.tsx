import { VehicleMake } from '@/app/types';

interface MakeSelectorProps {
  makes: VehicleMake[];
  onMakeChange: (makeId: number | null) => void;
}

export default function MakeSelector({
  makes,
  onMakeChange,
}: MakeSelectorProps) {
  const handleMakeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onMakeChange(event.target.value ? Number(event.target.value) : null);
  };

  return (
    <div className="mb-4">
      <label htmlFor="make" className="mb-2 block font-semibold">
        Select Vehicle Make:
      </label>
      <select
        id="make"
        onChange={handleMakeChange}
        className="rounded border border-gray-300 p-2"
      >
        <option value="">-- Select Make --</option>
        {makes.map((make) => (
          <option key={make.MakeId} value={make.MakeId}>
            {make.MakeName}
          </option>
        ))}
      </select>
    </div>
  );
}
