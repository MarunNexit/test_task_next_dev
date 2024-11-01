import React from 'react';

interface YearSelectorProps {
  years: number[];
  onYearChange: (year: number | null) => void;
}

export default function YearSelector({
  years,
  onYearChange,
}: YearSelectorProps) {
  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onYearChange(event.target.value ? Number(event.target.value) : null);
  };

  return (
    <div className="mb-4">
      <label htmlFor="year" className="mb-2 block font-semibold">
        Select Model Year:
      </label>
      <select
        id="year"
        onChange={handleYearChange}
        className="rounded border border-gray-300 p-2"
      >
        <option value="">-- Select Year --</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}
