import { useContext } from "react";
import AppointmentContext from "./AppointmentContext";

const useAppointmentContext = () => useContext(AppointmentContext);

export default useAppointmentContext;
