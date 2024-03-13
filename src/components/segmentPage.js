import React, { useState } from "react";
import PopUp from "./popUp";
export default function SegmentPage() {
  const [open, setOpen] = useState(false);

  const handleSaveSegment = () => {
    setOpen(true);
  };
  const handleClosePopup = () => {
    setOpen(false);
  };

  return (
    <div className="main-container">
      <div className="segment">
        <div className="header">
          <h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 23 23"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            View Audience
          </h1>
        </div>
        <div className="save-Segment">
          <button onClick={handleSaveSegment}>Save Segment</button>
        </div>
      </div>

      {open && (
        <div className="popup">
          <PopUp handleClosePopup={handleClosePopup} />
        </div>
      )}
    </div>
  );
}
