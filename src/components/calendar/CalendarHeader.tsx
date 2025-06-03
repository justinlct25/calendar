import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type CalendarHeaderProps = {
  month: string;
  year: number;
  onPrev: () => void;
  onNext: () => void;
  view: string;
  setView: (view: string) => void;
};

export default function CalendarHeader({
  month,
  year,
  onPrev,
  onNext,
  view,
  setView,
}: CalendarHeaderProps) {
  return (
    <div className="calendar-header flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <button onClick={onPrev}><FaChevronLeft /></button>
        <span className="text-lg font-bold">{month} {year}</span>
        <button onClick={onNext}><FaChevronRight /></button>
      </div>
      <div className="flex gap-2">
        {['Year', 'Month', 'Day'].map(v => (
          <button
            key={v}
            className={`view-btn ${view === v ? 'active' : ''}`}
            onClick={() => setView(v)}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}
