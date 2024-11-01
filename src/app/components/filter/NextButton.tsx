import Link from 'next/link';

interface NextButtonProps {
  isDisabled: boolean;
  makeId: number | null;
  year: number | null;
}

export default function NextButton({
  isDisabled,
  makeId,
  year,
}: NextButtonProps) {
  return (
    <Link href={isDisabled ? '#' : `/result/${makeId}/${year}`}>
      <button
        disabled={isDisabled}
        className={`rounded px-4 py-2 font-bold text-white ${
          isDisabled
            ? 'cursor-not-allowed bg-gray-400'
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        Next
      </button>
    </Link>
  );
}
