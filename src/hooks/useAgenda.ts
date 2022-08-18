import { useEffect, useState } from "react";
import { getAgenda } from "../services";
import { DateTimeType, MentorType } from "../types";

/**
 * This custom hook will handle fetching available agenda
 * from the API.
 * It will return agenda data, error state, and the loading state
 */
const useAgenda = (dependancy = []) => {
  const [agenda, setAgenda] = useState<DateTimeType[] | undefined>();
  const [mentor, setMentor] = useState<MentorType | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAgenda = async () => {
      try {
        setLoading(true);
        const { data } = await getAgenda();

        if (!data) {
          // Error loading data
          setError("Unexpected error occurred");
          return;
        }

        setAgenda(data.calendar);
        setMentor(data.mentor);
        setLoading(false);
      } catch (error) {
        // Error fetching agenda
        setError("Unexpected error occurred");
        setLoading(false);
      }
    };

    fetchAgenda();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependancy]);

  return { loading, error, agenda, mentor };
};

export default useAgenda;
