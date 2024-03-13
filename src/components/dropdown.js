import React, { useState, useMemo } from "react";

export default function Dropdown({ addDatas, setAddDatas, schemaOptions }) {
  const [selectedValue, setSelectedValue] = useState("add_sigma_to_segment");

  const generateElement = useMemo(() => {
    return addDatas.map((item) => {
      const selectedValue = schemaOptions[item];
      return (
        <div className="flex m-3" key={selectedValue}>
          <select
            className="border-2 border-spacing-2 p-2 w-full "
            defaultValue={selectedValue}
          >
            <option value={selectedValue}>{selectedValue}</option>
          </select>
          <button
            className="text-green-900 bg-slate-300 px-3 font-extrabold mx-1"
            onClick={() => handleRemoveSchema(item)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>
        </div>
      );
    });
  }, [addDatas]);

  const handleAddNewSchema = () => {
    if (selectedValue !== "add_sigma_to_segment" && !addDatas.includes(selectedValue)) {
      setAddDatas([...addDatas, selectedValue]);
    }
  };

  const handleRemoveSchema = (id) => {
    const removedData = addDatas.filter((selectBox) => selectBox !== id);
    setAddDatas([...removedData]);
  };

  return (
    <div>
      {addDatas.length ? (
        <div className="border-2 border-blue-600 py-5 my-5">
          {generateElement}
        </div>
      ) : (
        ""
      )}
      <div>
        <select
          className="border-2 border-spacing-2 p-2 w-full"
          value={selectedValue}
          onChange={(e) => {
            setSelectedValue(e.target.value);
          }}
        >
          {Object.keys(schemaOptions).filter((item) => !addDatas.includes(item)).map((option) => (
            <option key={option} value={option}>
              {schemaOptions[option]}
            </option>
          ))}
        </select>
        <button
          className="text-teal-500 font-semibold my-5"
          onClick={handleAddNewSchema}
        >
          +Add new schema
        </button>
      </div>
    </div>
  );
}
