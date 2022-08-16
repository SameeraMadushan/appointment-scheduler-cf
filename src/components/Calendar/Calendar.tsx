import "react-calendar/dist/Calendar.css";
import {
  Calendar as ReactCalendar,
  OnChangeDateCallback,
  OnChangeDateRangeCallback
} from "react-calendar";

interface CalendarProps {
  value: Date;
  minDate: Date;
  onChange: OnChangeDateCallback | OnChangeDateRangeCallback | undefined;
}

const Calendar = ({ minDate, onChange, value, ...rest }: CalendarProps) => {
  return (
    <ReactCalendar
      className="border-none border-gray-100 rounded-lg p-3"
      onChange={onChange}
      value={value}
      minDate={minDate}
      {...rest}
    />
  );
};

export default Calendar;
