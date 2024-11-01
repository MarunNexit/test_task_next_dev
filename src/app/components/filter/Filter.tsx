'use client';

import React, { useState } from 'react';
import MakeSelector from '@/app/components/filter/MakeSelector';
import YearSelector from '@/app/components/filter/YearSelector';
import NextButton from '@/app/components/filter/NextButton';
import { VehicleMake } from '@/app/types';

interface FilterProps {
  vehicleMakes: VehicleMake[];
}

export default function Filter({ vehicleMakes }: FilterProps) {
  const [makes] = useState<VehicleMake[]>(vehicleMakes);
  const [selectedMakeId, setSelectedMakeId] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2015 + 1 },
    (_, i) => currentYear - i
  );

  const isNextButtonDisabled = selectedMakeId === null || selectedYear === null;

  return (
    <div className="flex flex-col items-center justify-center rounded-md bg-white p-8 text-gray-700">
      <h1 className="mb-6 text-3xl font-bold">Vehicle Filter</h1>
      <div className="flex flex-wrap gap-4">
        {' '}
        {/* Add gap to create space between elements */}
        <MakeSelector makes={makes} onMakeChange={setSelectedMakeId} />
        <YearSelector years={years} onYearChange={setSelectedYear} />
      </div>
      <div className="mt-4 flex w-full justify-end">
        {' '}
        {/* Flex to align the button to the right with margin-top for spacing */}
        <NextButton
          isDisabled={isNextButtonDisabled}
          makeId={selectedMakeId}
          year={selectedYear}
        />
      </div>
    </div>
  );
}
