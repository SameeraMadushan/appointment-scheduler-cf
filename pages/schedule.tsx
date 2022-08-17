import { AppointmentContext } from "../src/context/AppointmentContext";
import { getAllAppointmentData } from "../src/utils/readAppointments";
import { SchedulePage } from "../src/Views";

interface ScheduleProps {
  appointments: { [x: string]: string | Date }[];
}

const Schedule = ({ appointments }: ScheduleProps) => {
  return (
    <AppointmentContext.Provider value={appointments}>
      <SchedulePage />
    </AppointmentContext.Provider>
  );
};

/**
 * Will return all the appointment data from db folder
 */
export async function getServerSideProps() {
  const appointments = await getAllAppointmentData();

  return {
    props: { appointments }
  };
}

export default Schedule;
