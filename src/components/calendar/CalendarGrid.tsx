type Event = {
  id: string;
  title: string;
  time: string;
  color: string;
};

type CalendarGridProps = {
  weeks: { date: Date; events: Event[] }[][];
  onDayClick?: (date: Date) => void;
};

const daysShort = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export default function CalendarGrid({ weeks, onDayClick }: CalendarGridProps) {
  return (
    <div className="calendar-grid">
      <div className="grid grid-cols-7 text-center font-semibold">
        {daysShort.map(day => (
          <div key={day} className="py-2">{day}</div>
        ))}
      </div>
      {weeks.map((week, i) => (
        <div key={i} className="grid grid-cols-7">
          {week.map(({ date, events }) => (
            <div
              key={date.toISOString()}
              className="border h-20 p-1 align-top"
              onClick={() => onDayClick?.(date)}
            >
              <div className="text-xs text-gray-500">{date.getDate()}</div>
              {events.map(event => (
                <div
                  key={event.id}
                  className="truncate rounded px-1 my-0.5 text-xs"
                  style={{ background: event.color }}
                  title={event.title}
                >
                  {event.time} {event.title}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
