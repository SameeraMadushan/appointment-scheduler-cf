import { MeetingInfoSection, SchedulerSection } from "./components";
import { Card, FloatingBackButton, Layout } from "../../components";
import { useAgenda } from "../../hooks";
import { useState } from "react";
import { useUserContext } from "../../context/UserContext";

/**
 * View of the scheduling page
 */
const SchedulePage = () => {
  const [timeSlot, setTimeSlot] = useState<Date | null>();
  const { loading, agenda = [], mentor, error } = useAgenda();
  const { user } = useUserContext();

  return (
    <Layout loading={loading} error={error}>
      <Card>
        <FloatingBackButton />

        {/* Horizontal section wrapper */}
        <div className="flex divide-x divide-slate-300">
          {/* Left side section */}
          <MeetingInfoSection
            studentName={user}
            mentorName={mentor?.name}
            timeslot={timeSlot}
            setTimeSlot={setTimeSlot}
          />

          {/* Right side section */}
          <SchedulerSection agenda={agenda} onTimeSlotSelect={setTimeSlot} />
        </div>
      </Card>
    </Layout>
  );
};

export default SchedulePage;
