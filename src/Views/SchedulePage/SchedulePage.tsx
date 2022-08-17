import { MeetingInfoSection, SchedulerSection } from "./components";
import { Card, FloatingBackButton, Layout } from "../../components";
import { useAgenda } from "../../hooks";

const Schedule = () => {
  const { loading, agenda = [], mentor, error } = useAgenda();

  return (
    <Layout loading={loading} error={error}>
      <Card>
        <FloatingBackButton />

        {/* Horizontal section wrapper */}
        <div className="flex divide-x divide-slate-300">
          {/* Left side section */}
          <MeetingInfoSection studentName="Sameera" mentorName={mentor?.name} />

          {/* Right side section */}
          <SchedulerSection agenda={agenda} />
        </div>
      </Card>
    </Layout>
  );
};

export default Schedule;
