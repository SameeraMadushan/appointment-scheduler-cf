import { ClockIcon, VideoCameraIcon, LinkIcon } from "@heroicons/react/solid";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { saveAppointment } from "../../../services";
import { DISPLAY_DATE, TIME_FORMAT } from "../../../utils";

interface MeetingInfoSectionProps {
  studentName?: string;
  mentorName?: string;
  timeslot?: Date | null;
  setTimeSlot: (x: Date | null) => void;
}

/**
 * Meeting information and meeting creation form
 */
const MeetingInfoSection = ({
  studentName = "",
  mentorName = "",
  timeslot,
  setTimeSlot
}: MeetingInfoSectionProps) => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit
  } = useForm();
  const router = useRouter();
  const [submitError, setSubmitError] = useState("");

  // Confirm appointment
  const onSubmit: SubmitHandler<FieldValues> = async ({ reason }) => {
    if (!timeslot) return;

    try {
      const response = await saveAppointment({
        reason,
        timeslot,
        studentName,
        mentorName: mentorName
      });

      // successfully saved
      if (response.data) {
        // Reset form values
        reset();
        // reFethcing appointments to validate timeslots
        router.replace(router.asPath);
        setTimeSlot(null);
      }
    } catch (error) {
      // Error
      setSubmitError("Error placing appointment");
    }
  };

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
        <LinkIcon className="h-5 w-5 pr-1" />
        Web conferencing details provided upon confirmation.
      </h3>

      {/* Meeting schedule form */}
      {timeslot && (
        <>
          <div>
            <h3 className="font-medium text-gray-500 text-sm flex my-2">
              <VideoCameraIcon className="h-5 w-5 pr-1" />
              Selected time slot:{" "}
              {format(new Date(timeslot), `${DISPLAY_DATE} - ${TIME_FORMAT}`)}
            </h3>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <textarea
                className="rouned-md border font-light text-sm border-slate-200 p-2 mt-3"
                placeholder="Reason for the meeeting.."
                rows={10}
                {...register("reason", {
                  required: true
                })}
              />

              {errors.reason && (
                <span className="text-red-500 text-xs pt-1">
                  Please describe your reason for this meeting
                </span>
              )}

              <button
                className="font-light rounded-md text-gray-50 bg-sky-500 text-sm py-1 mt-3 hover:bg-sky-600"
                type="submit"
              >
                Confirm
              </button>

              {submitError && (
                <span className="text-red-500 text-xs pt-1">{submitError}</span>
              )}
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default MeetingInfoSection;
