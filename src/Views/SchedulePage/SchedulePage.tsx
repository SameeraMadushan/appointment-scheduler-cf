import { MeetingInfoSection, SchedulerSection } from "./components";
import { Card, FloatingBackButton, Layout } from "../../components";
import { useAgenda } from "../../hooks";
import { useState } from "react";

const SchedulePage = () => {
  const [timeSlot, setTimeSlot] = useState<Date | null>();
  const { loading, agenda = [], mentor, error } = useAgenda();

  return (
    <Layout loading={loading} error={error}>
      <Card>
        <FloatingBackButton />

        {/* Horizontal section wrapper */}
        <div className="flex divide-x divide-slate-300">
          {/* Left side section */}
          <MeetingInfoSection
            studentName="Sameera"
            mentorName={mentor?.name}
            timeslot={timeSlot}
          />

          {/* Right side section */}
          <SchedulerSection agenda={agenda} onTimeSlotSelect={setTimeSlot} />
        </div>
      </Card>
    </Layout>
  );
};

export default SchedulePage;
