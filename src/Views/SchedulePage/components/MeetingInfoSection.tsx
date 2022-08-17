import { ClockIcon, VideoCameraIcon } from "@heroicons/react/solid";

interface MeetingInfoSectionProps {
  studentName?: string;
  mentorName?: string;
}

const MeetingInfoSection = ({
  studentName,
  mentorName
}: MeetingInfoSectionProps) => {
  return (
    <div className="p-5">
      <h1 className="font-light text-xl">Schedule your mentoring session</h1>
      <h2 className="font-bold text-gray-500 text-sm">
        {studentName} | {mentorName}
      </h2>

      <h3 className="font-medium text-gray-500 text-sm flex my-2">
        <ClockIcon className="h-5 w-5 pr-1" />1 Hour
      </h3>

      <h3 className="font-medium text-gray-500 text-sm flex my-2">
        <VideoCameraIcon className="h-5 w-5 pr-1" />
        Web conferencing details provided upon confirmation.
      </h3>
    </div>
  );
};

export default MeetingInfoSection;
