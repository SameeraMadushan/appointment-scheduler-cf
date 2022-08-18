import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactElement;
  onConfirm: React.MouseEventHandler<HTMLButtonElement>;
}

const ConfirmationModal = ({
  isOpen,
  onClose,
  children,
  onConfirm
}: ConfirmationModalProps) => {
  return (
    <PureModal
      className="min-w-max"
      footer={
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 border rounded-md py-1 px-2 text-green-50 text-xs mr-2 "
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="bg-sky-500 border rounded-md py-1 px-2 text-green-50 text-xs hover:bg-sky-600"
          >
            Confirm
          </button>
        </div>
      }
      isOpen={isOpen}
      closeButton="x"
      onClose={onClose}
    >
      {children}
    </PureModal>
  );
};

export default ConfirmationModal;
