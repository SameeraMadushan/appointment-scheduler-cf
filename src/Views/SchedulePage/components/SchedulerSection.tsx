import { useEffect, useState } from "react";
import { CalendarTileProperties } from "react-calendar";
import { Calendar, TimeslotCard } from "../../../components";
import { DateTimeType } from "../../../types";
import { format } from "date-fns";
import { DATE_FORMAT, DISPLAY_DATE, TIME_FORMAT } from "../../../utils";
import { useAppointmentContext } from "../../../context/AppointmentContext";

interface SchedulerSectionProps {
  agenda: DateTimeType[];
  onTimeSlotSelect: (date: Date | null) => void;
}

/**
 * Scheduling calendar and time slot selection
 */
const SchedulerSection = ({
  agenda,
  onTimeSlotSelect
}: SchedulerSectionProps) => {
  const [value, setValue] = useState<Date>();
  const [timeSlots, setTimeSlots] = useState<DateTimeType[]>([]);
  const appointments = useAppointmentContext();
  const minDate = new Date();

  /**
   * On component update, load previous appointments
   * and set timeslots to disable if it's already booked
   */
  useEffect(() => {
    if (!value) return;

    // Getting the date from existing appointments
    const date = appointments.filter(
      ({ timeslot }) =>
        format(new Date(timeslot), DATE_FORMAT) ===
        format(new Date(value), DATE_FORMAT)
    );

    if (!date.length) return;

    // Map time slots within the selected date
    const newTimeSlots = timeSlots.map(({ date_time }) => {
      const bookedTime = date.filter(
        ({ timeslot }) =>
          format(new Date(timeslot).setMinutes(0), TIME_FORMAT) ===
          format(new Date(date_time).setMinutes(0), TIME_FORMAT)
      );

      // If a appointment exist set to booked=true
      if (bookedTime.length) return { date_time, booked: true };

      return { date_time };
    });

    setTimeSlots(newTimeSlots);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, appointments]);

  /**
   * Get disabled fields for calendar day tiles
   * If the day isn't in the agenda,
   * Day will be disabled
   */
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

  /**
   * Filter timeslots for the selected date
   */
  const handleOnDateSelect = (date: Date) => {
    setValue(date);
    const filterTimeSlots = agenda.filter(({ date_time }) => {
      return (
        format(new Date(date_time), DATE_FORMAT) ===
        format(new Date(date), DATE_FORMAT)
      );
    });
    setTimeSlots(filterTimeSlots);
    onTimeSlotSelect(null);
  };

  /**
   * Action on timeslot select
   * This will display meeting form
   * with the reason field and other info
   */
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
              {timeSlots.map(({ date_time, booked = false }, i) => (
                <div key={`${date_time}${i}`}>
                  <TimeslotCard
                    disabled={booked}
                    timeslot={date_time}
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
