import { createContext } from "react";

/**
 * Creatng a context to keeping appointment information
 */
const AppointmentContext = createContext<{ [x: string]: string | Date }[]>([]);

export default AppointmentContext;
