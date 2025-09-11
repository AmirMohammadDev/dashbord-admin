import { useState } from "react";

export default function CheckBox() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="inline-block relative">
      <label className="relative block w-5 h-5 pb-full cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className={`appearance-none w-full h-full absolute dark:bg-[#111C44] top-0 left-0 rounded-[4px] border transition-all duration-200
            ${checked ? "border-[2px] border-[#422AFB]" : "border border-[#d1d6ee]"} 
            bg-white hover:border-[#422AFB]`}
        />
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none dark:stroke-white stroke-current"
          viewBox="0 0 22 22"
        >
          <path
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.5,11.3L9,14.8L20.2,3.3c-0.5-1-1.5-1.8-2.7-1.8h-13c-1.7,0-3,1.3-3,3v13c0,1.7,1.3,3,3,3h13c1.7,0,3-1.3,3-3v-13c0-0.4-0.1-0.8-0.3-1.2"
            style={{
              strokeDasharray: checked ? "16 93" : "93",
              strokeDashoffset: checked ? "109" : "94",
              transition: "stroke-dasharray 0.4s, stroke-dashoffset 0.4s",
            }}
          />
        </svg>
      </label>
    </div>
  );
}
