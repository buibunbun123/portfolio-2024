"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Clock = () => {
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");
  useEffect(() => {
    setInterval(() => {
      const h = new Date().getHours();
      const m = new Date().getMinutes();
      const s = new Date().getSeconds();

      setHour(padNumber(h));
      setMinute(padNumber(m));
      setSecond(padNumber(s));
    }, 1000);

  const padNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };
  }, []);
  return (
    <div className="flex justify-center items-center mt-11 left-0 right-0 rounded-[8px]">
      <div className="rounded-[8px] inline-block text-[#FDE28A] border-[3px] bg-black/50 border-black/100 w-[416px] h-[100px]">
        <div className="flex-grow flex space-x-[40px] h-[100px] justify-center items-center">
          <div className="flex-col h-[60px] w-[69px] my-auto mt-3">
            <div className="text-center text-[48px] font-semibold leading-[53px]">{hour}</div>
            <div className="text-center text-[12px] mt-1">Hours</div>
          </div>
          <div className="text-[#FDE28A] text-[32px] my-auto mt-4">:</div>
          <div className="flex-col h-[60px] w-[69px] my-auto mt-3">
            <div className="text-center text-[48px] font-semibold leading-[53px]">{minute}</div>
            <div className="text-center text-[12px] mt-1">Mins</div>
          </div>
          <div className="text-[#FDE28A] text-[32px] my-auto mt-4">:</div>
          <div className="flex-col h-[60px] w-[69px] my-auto mt-3 ">
            <div className="text-center text-[48px] font-semibold leading-[53px]">{second}</div>
            <div className="text-center text-[12px] mt-1">Sec</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
