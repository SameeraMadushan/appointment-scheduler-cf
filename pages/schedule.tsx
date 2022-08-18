import { AppointmentContext } from "../src/context/AppointmentContext";
import { getAllAppointmentData } from "../src/utils/readAppointments";
import { SchedulePage } from "../src/views";

interface ScheduleProps {
  appointments: { [x: string]: string | Date }[];
}

/**
 * Appointment schedule page
 */
const Schedule = ({ appointments }: ScheduleProps) => {
  return (
    <AppointmentContext.Provider value={appointments}>
      <SchedulePage />
    </AppointmentContext.Provider>
  );
};

/**
 * Will return all the appointment data from db folder
 * This will run on the serverside
 */
export async function getServerSideProps() {
  const appointments = await getAllAppointmentData();

  return {
    props: { appointments }
  };
}

export default Schedule;
