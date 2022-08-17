interface TimeslotCardProps {
  timeslot: string;
  onConfirm: () => void;
  disabled?: boolean;
}

const TimeslotCard = ({
  timeslot,
  onConfirm,
  disabled = false
}: TimeslotCardProps) => {
  return (
    <div className="flex justify-between items-center rounded-md border border-gray-200 my-2 px-2 hover:border-sky-400">
      <div className="flex items-center">
        {disabled ? (
          <div className="w-2 h-2 rounded-full bg-red-400 mr-2" />
        ) : (
          <div className="w-2 h-2 rounded-full bg-green-400 mr-2" />
        )}
        <h3 className="font-medium text-gray-500 text-sm py-2 ">{timeslot}</h3>
      </div>

      <button
        onClick={onConfirm}
        disabled={disabled}
        className="bg-sky-500 border rounded-md py-1 px-2 text-green-50 text-xs disabled:bg-gray-400 hover:bg-sky-600"
      >
        {disabled ? "Booked" : "Select"}
      </button>
    </div>
  );
};

export default TimeslotCard;
