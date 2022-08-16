import { Calendar, Card, FloatingBackButton, Layout } from "../../components";
import { ClockIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useState } from "react";

interface ScheduleProps {}

const Schedule = (props: ScheduleProps) => {
  const [value, onChange] = useState(new Date());
  const minDate = new Date();

  return (
    <Layout>
      <Card>
        <FloatingBackButton />

        {/* Horizontal section wrapper */}
        <div className="flex divide-x divide-slate-300">
          {/* Left section */}
          <div className="p-5">
            <h1 className="font-light text-xl">
              Schedule your mentoring session
            </h1>
            <h2 className="font-bold text-gray-500 text-sm">
              Your Name | Mentor Name
            </h2>

            <h3 className="font-medium text-gray-500 text-sm flex my-2">
              <ClockIcon className="h-5 w-5 pr-1" />1 Hour
            </h3>

            <h3 className="font-medium text-gray-500 text-sm flex my-2">
              <VideoCameraIcon className="h-5 w-5 pr-1" />
              Web conferencing details provided upon confirmation.
            </h3>
          </div>

          {/* Right section */}
          <div className="p-5">
            <h2 className="font-medium text-gray-800 text-xl pb-2">
              Selet a Date & Time
            </h2>

            {/* Calendar */}
            <Calendar onChange={onChange} value={value} minDate={minDate} />
          </div>
        </div>
      </Card>
    </Layout>
  );
};

export default Schedule;
