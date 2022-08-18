import { useContext } from "react";
import AppointmentContext from "./AppointmentContext";

/**
 * Re usable appointment context
 */
const useAppointmentContext = () => useContext(AppointmentContext);

export default useAppointmentContext;
