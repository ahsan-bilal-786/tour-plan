import { useState } from "react";

const Toggle = ({ className }) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden ${className}`}
    >
      <div className="flex">
        <label class="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
          <div
            onClick={() => {
              setEnabled(!enabled);
            }}
            className="w-14 h-[29px] bg-gray-200 rounded-full peer  peer-focus:ring-teal-600  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[25px] after:w-[25px] after:transition-all peer-checked:bg-teal-600"
          ></div>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
