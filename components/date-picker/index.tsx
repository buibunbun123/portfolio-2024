import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../button";

type SimpleDatePickerProps = {
  className?: string;
  onClose?: () => void;
  onSelectFrom?: (date: Date) => void;
  onSelectTo?: (date: Date) => void;
};

const SimpleDatePicker = ({
  className,
  onClose,
  onSelectFrom,
  onSelectTo,
}: SimpleDatePickerProps) => {
  const [selectedDateFrom, setSelectedDateFrom] = useState(new Date());
  const [selectedDateTo, setSelectedDateTo] = useState(new Date());
  const [dateDifference, setDateDifference] = useState(0);

  const calculateDateDifference = () => {
    const differenceInDays =
      Math.floor(
        (selectedDateTo.getTime() - selectedDateFrom.getTime()) /
          (1000 * 60 * 60 * 24)
      ) + 1; // Adding 1 to include both selected dates
    setDateDifference(differenceInDays);
  };
  useEffect(() => {
    calculateDateDifference()
    return () => {
    };
  }, [selectedDateFrom, selectedDateTo]);
  return (
    <div className={className ? className : ""}>
      <div className="flex">
        <h2 className="flex text-black font-normal text-[16px]">
          Select date from
        </h2>
        <h2 className="flex ml-[100px] text-black font-normal text-[16px]">
          Select date to
        </h2>
        <Button
          onClick={() => {
            onClose && onClose();
          }}
          bgImage="/clear.fill.svg"
          bgHeight={28}
          bgWidth={28}
          className="flex ml-[60px] mix-blend-exclusion"
        >
          {" "}
        </Button>
      </div>
      <div className="flex ">
        <div className="flex mt-2 items-center rounded-[8px] bg-white border-[3px] border-green-400 w-[200px]">
          <span role="img" aria-label="calendar">
            📅
          </span>
          <DatePicker
            selected={selectedDateFrom}
            onChange={(date: Date) => {
              setSelectedDateFrom(date);
              onSelectFrom && onSelectFrom(date);
            }}
            
            dateFormat="MM/dd/yyyy"
            className="ml-[10px] outline-none w-[140px]"
          />
          <Button
            onClick={() => {
              setSelectedDateFrom(new Date());
            }}
            bgImage="/clear.fill.svg"
            bgHeight={28}
            bgWidth={28}
          >
            {" "}
          </Button>
        </div>
        <div className="flex mt-2 ml-8 items-center rounded-[8px] bg-white border-[3px] border-green-400 w-[200px]">
          <span role="img" aria-label="calendar" className="">
            📅
          </span>
          <DatePicker
            selected={selectedDateTo}
            onChange={(date: Date) => {
              setSelectedDateTo(date);
              onSelectTo && onSelectTo(date);
            }}
            dateFormat="MM/dd/yyyy"
            className="ml-[10px] outline-none w-[140px]"
          />
          <Button
            onClick={() => {
              setSelectedDateTo(new Date());
            }}
            bgImage="/clear.fill.svg"
            bgHeight={28}
            bgWidth={28}
          >
            {" "}
          </Button>
        </div>
      </div>
      <div className="flex-grow mt-2 flex items-center">
        <p className="text-[12px] font-bold text-blue-800">Days to the selected:</p>
        <div className=" ml-1 flex border-[1px] border-black text-white justify-center items-center px-auto bg-blue-900 rounded-[16px] w-8">
          {dateDifference}
        </div>
      </div>
    </div>
  );
};

export default SimpleDatePicker;
