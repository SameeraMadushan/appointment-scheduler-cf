import { useContext } from "react";
import UserContext from "./UserContext";

/**
 * Re usable User context
 */
const useUserContext = () => useContext(UserContext);

export default useUserContext;
