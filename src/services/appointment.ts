import { getAllAppointmentData } from "../utils";
import client from "./client";
import { SCHEDULE_APPOINTMENT } from "./endpoints";

type AppointmentType = {
  studentName: string;
  mentorName: string;
  timeslot: Date;
  reason: string;
};

export const saveAppointment = (data: AppointmentType) => {
  return client.post(SCHEDULE_APPOINTMENT, data);
};

export const getAllAppointments = () => {
  return getAllAppointmentData();
};
