import client from "./client";
import { SCHEDULE_APPOINTMENT } from "./endpoints";

type AppointmentType = {
  studentName: string;
  mentorName: string;
  timeslot: string;
};

export const saveAppointment = (data: AppointmentType) => {
  return client.post(SCHEDULE_APPOINTMENT, data);
};
