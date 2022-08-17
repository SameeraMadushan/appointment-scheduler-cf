import { readdirSync, readFileSync } from "fs";
import path from "path";

/**
 * reading appointment db
 */
const appointmentsDir = path.join(process.cwd(), "/public/db");

/**
 * This will return all the available appointment ids
 */
export const getAllAppointmentIds = async (withExtention = false) => {
  const fileNames = readdirSync(appointmentsDir);

  return fileNames.map((fileName) => {
    return {
      id: withExtention ? fileName : fileName.replace(/\.json$/, "")
    };
  });
};

/**
 *
 * This will return individual appointment data
 */
export const getAppointmentData = async (id: string) => {
  const appointmentIds = await getAllAppointmentIds();

  const isValid = appointmentIds.filter(
    (appointment) => appointment.id === id
  ).length;

  if (!isValid) {
    return null;
  }

  const appointment = readFileSync(`${appointmentsDir}/${id}.json`, "utf8");
  const parsedAppointment = JSON.parse(appointment);
  parsedAppointment.id = id;
  return parsedAppointment;
};

/**
 *
 * This will return all the appointment data
 */
export const getAllAppointmentData = async () => {
  const appointmentIds = await getAllAppointmentIds(true);

  const validAppointments = appointmentIds.filter((str) => {
    return /\.json$/.test(str.id);
  });

  const appointmentData = validAppointments.map(({ id }) => {
    const data = JSON.parse(readFileSync(`${appointmentsDir}/${id}`, "utf8"));
    data.id = id;
    return {
      ...data
    };
  });

  return appointmentData;
};
