import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface PopUpProps {
  openPopUp: boolean;
  closePopUp: () => void;
  HandleSubmit: () => void;
  HandleBlock: () => void;
}

const PopUp: React.FC<PopUpProps> = ({
  openPopUp,
  closePopUp,
  HandleSubmit,
  HandleBlock,
}) => {
  const handleClosePopUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === "ModalContainer") {
      closePopUp();
    }
  };

  if (!openPopUp) return null;

  return (
    <div
      id="ModalContainer"
      onClick={handleClosePopUp}
      style={{ zIndex: 1000 }}
      className="fixed inset-0 flex items-center justify-center"
    >
      <div className="w-10/12 rounded-lg bg-gray-400 p-6 shadow-inner dark:bg-gray-800 md:w-1/2 lg:w-1/3">
        {/* Header with close icon */}
        <div className="flex items-center justify-between border-b border-gray-500 pb-4">
          <h2 className="text-lg font-semibold text-white dark:text-white">
            Arrora Gaur
          </h2>
          {/* Close button */}
          <button
            onClick={closePopUp} // Close the modal when close button is clicked
            className="text-white hover:text-gray-300 dark:text-white"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="mt-4 text-sm text-white dark:text-white">
          <div className="cursor-pointer font-bold text-white underline">
            Chips Manage
          </div>
          <p className="mt-4 text-lg font-medium text-white dark:text-white">
            Current Chips: <span className="text-2xl font-bold">10000</span>
          </p>

          <div className="mt-3 flex items-center">
            <input
              type="text"
              placeholder="Enter Chips"
              className="w-full rounded-md bg-[#1f1f39] p-2 text-white placeholder-gray-400 focus:outline-none dark:bg-gray-700"
            />
            <button className="ml-3 rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600">
              Add
            </button>
            <button className="ml-3 rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600">
              Remove
            </button>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-md bg-[#1f1f39] p-3 dark:bg-gray-700">
              <p className="text-xl font-semibold text-white dark:text-white">
                5
              </p>
              <p className="text-gray-300">Total ADS Watch</p>
            </div>
            <div className="rounded-md bg-[#1f1f39] p-3 dark:bg-gray-700">
              <p className="text-xl font-semibold text-white dark:text-white">
                6
              </p>
              <p className="text-gray-300">Daily Spin Rewards</p>
            </div>
            <div className="rounded-md bg-[#1f1f39] p-3 dark:bg-gray-700">
              <p className="text-xl font-semibold text-white dark:text-white">
                5
              </p>
              <p className="text-gray-300">Chips Boy</p>
            </div>
          </div>

          <div className="mt-6 flex justify-between">
            <button
              onClick={HandleBlock}
              className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Block User
            </button>
            <button
              onClick={HandleSubmit}
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
