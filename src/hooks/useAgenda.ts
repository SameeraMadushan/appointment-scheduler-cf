import { useEffect, useState } from "react";
import { getAgenda } from "../services";
import { DateTimeType, MentorType } from "../types";

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
        console.log(error);
        setError("Unexpected error occurred");
        setLoading(false);
        // Error fetching agenda
      }
    };

    fetchAgenda();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependancy]);

  return { loading, error, agenda, mentor };
};

export default useAgenda;
