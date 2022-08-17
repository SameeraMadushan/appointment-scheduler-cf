import { useState } from "react";
import { CalendarTileProperties } from "react-calendar";
import { Calendar, TimeslotCard } from "../../../components";
import { DateTimeType } from "../../../types";
import { format } from "date-fns";
import { DATE_FORMAT, DISPLAY_DATE, TIME_FORMAT } from "../../../utils";

interface SchedulerSectionProps {
  agenda: DateTimeType[];
  onTimeSlotSelect: (date: Date) => void;
}

const SchedulerSection = ({
  agenda,
  onTimeSlotSelect
}: SchedulerSectionProps) => {
  const [value, setValue] = useState<Date>();
  const [timeSlots, setTimeSlots] = useState<DateTimeType[]>([]);
  const minDate = new Date();

  const getDisabledFields = ({ date }: CalendarTileProperties) => {
    if (!agenda) return true;
    const disableDates = agenda.filter(
      ({ date_time }) =>
        format(new Date(date_time), DATE_FORMAT) ===
        format(new Date(date), DATE_FORMAT)
    );
    if (disableDates.length) return false;
    return true;
  };

  const handleOnDateSelect = (date: Date) => {
    setValue(date);
    const filterTimeSlots = agenda.filter(({ date_time }) => {
      return (
        format(new Date(date_time), DATE_FORMAT) ===
        format(new Date(date), DATE_FORMAT)
      );
    });
    setTimeSlots(filterTimeSlots);
  };

  const getTimeSlot = (date: Date) => {
    const floorHour = new Date(date).setMinutes(0);
    const floorTimeStamp = format(new Date(date).setMinutes(0), TIME_FORMAT);
    const ceilingTimeStamp = format(
      new Date(floorHour).setMinutes(60),
      TIME_FORMAT
    );

    return `${floorTimeStamp} - ${ceilingTimeStamp}`;
  };

  const handleTimeSlotSelect = (date: Date) => () => {
    const dateTimeSlot = new Date(date).setMinutes(0);
    onTimeSlotSelect(new Date(dateTimeSlot));
  };

  return (
    <div className="p-5">
      <h2 className="font-medium text-gray-800 text-xl pb-2">
        Selet a Date & Time
      </h2>

      {/* Calendar */}
      <Calendar
        onChange={handleOnDateSelect}
        value={value}
        view="month"
        minDate={minDate}
        tileDisabled={getDisabledFields}
      />

      {value && (
        <div className="my-5">
          <h2 className="font-light text-gray-500 text-md ">
            {format(value, DISPLAY_DATE)}
          </h2>

          {timeSlots.length > 0 ? (
            <>
              <div className="flex justify-center items-center bg-gray-100 my-2">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-1" />
                <h3 className="font-light text-gray-500 text-xs py-2 ">
                  Available time slots
                </h3>
              </div>

              {/* Time slot list for selected date */}

              {timeSlots.map(({ date_time }, i) => (
                <div key={`${date_time}${i}`}>
                  <TimeslotCard
                    timeslot={getTimeSlot(date_time)}
                    onConfirm={handleTimeSlotSelect(date_time)}
                  />
                </div>
              ))}
            </>
          ) : (
            <div>
              <div className="flex justify-center items-center bg-gray-100 my-2">
                <div className="w-2 h-2 rounded-full bg-red-400 mr-1" />
                <h3 className="font-light text-gray-500 text-xs py-2 ">
                  No timeslots available
                </h3>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SchedulerSection;
