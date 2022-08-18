import { createContext, Dispatch, SetStateAction } from "react";

/**
 * Creatng a context to keeping User information
 */
const UserContext = createContext<{
  user?: string;
  setUser?: Dispatch<SetStateAction<string>>;
}>({});

export default UserContext;
