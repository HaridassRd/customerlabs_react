import React, { useCallback, useState, useMemo } from "react";
import Dropdown from "./dropdown";

export default function PopUp({ handleClosePopup }) {
  const [addDatas, setAddDatas] = useState([]);
  const [name, setName] = useState("");

  const schemaOptions = useMemo(() => {
    return {
      add_sigma_to_segment: "Add sigma to segment",
      first_name: "First Name",
      last_name: "Last Name",
      gender:"Gender",
      age:"Age",
      account_name:"Account Name",
      city: "City",
      state:"State"
    };
  }, []);

  const handleSave = useCallback(() => {
    const getSchema = addDatas.reduce((output, item) => {
        output.push({
        [item]: schemaOptions[item],
      });

      return output;
    }, []);

    const selectedDatas = {
      segment_name: name,
      schema: getSchema,
    };

    console.log(selectedDatas);
  }, [addDatas, schemaOptions]);
  return (
    <div className="popup-content relative h-full">
      <div className="popup-header">
        <h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            // viewBox="0 0 23 23"
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
          Saving Segment
        </h1>
      </div>
      <div className="m-5">
        <div>
          <label className="block">Enter the Name of the Segment</label>
          <input
            type="text"
            placeholder="Name of the segment"
            className="border-4 border-spacing-4 w-full p-1.5 my-3"
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <p className="my-3 font-semibold">
          To save your segment, you need to add the schemas to build the query.
        </p>
        <Dropdown
          addDatas={addDatas}
          setAddDatas={setAddDatas}
          schemaOptions={schemaOptions}
        />
        <div className="absolute bottom-3 ">
          <button
            className="mx-2 bg-green-600 rounded-md text-white px-5 font-semibold py-2 border-2 border-black"
            onClick={handleSave}
          >
            Save the Segment
          </button>
          <button
            className="mx-2 bg-white rounded-md text-red-700 font-semibold px-5  py-2 border-2 border-black"
            onClick={handleClosePopup}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
