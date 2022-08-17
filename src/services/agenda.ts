import client from "./client";
import { MENTOR_AGENDA } from "./endpoints";

export const getAgenda = () => {
  return client.get(MENTOR_AGENDA);
};
