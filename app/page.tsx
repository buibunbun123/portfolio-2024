"use client";
import Clock from "@/components/clock";
import Image from "next/image";
import { Poor_Story } from "next/font/google";
import Button from "@/components/button";
import EventPicker from "@/components/event-picker";
import { useRouter } from "next/navigation";
const poor = Poor_Story({
  weight: "400",
  subsets: ["latin"],
});
export default function Homepage() {
  var day = new Date().getDate();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var month = months[new Date().getMonth()];
  var year = new Date().getFullYear();
  const router = useRouter();
  function navToHomepage() {
    router.push("/");
  }
  function navToEvent() {
    router.push("/event");
  }
  function navToQR() {
    router.push("/tools/qrcode");
  }
  return (
    <div className="mx-auto w-full">
      <Image
        src="/bg-image-maomao.svg"
        alt="background image"
        width="1440"
        height={1220}
        objectFit="cover"
        style={{ width: "100%" }}
      />
      <div className=" absolute top-[120px] left-[20px] w-[520px] h-[520px]">
        <Image
          src="/fastcheck-bg.svg"
          alt="background image"
          width={520}
          height={520}
        />
        <div className="absolute justify-center items-center left-0 right-0 top-[32px]">
          <h1 className="text-white font-semibold text-center text-[24px]">
            {month} {day}, {year}
          </h1>
          <Clock />
          <div className="mt-[60px] ml-7 items-center">
            <h1 className="text-[24px] text-white mt-[60px] font-bold">
              Incoming Events
            </h1>
            <div className="flex w-[456px] h-[160px] ">
              <div className=" flex-grow">
                <div className="border-[3px] border-black/100 w-[416px] rounded-[8px] flex justify-center h-full bg-black/50">
                  <div className="flex-col items-center">
                    <h1 className="text-center text-[#F9BACD] mt-3 text-[16px] leading-[18px] font-extrabold">
                      {"Valentine's Day"}
                    </h1>
                    <p className="text-center text-white mt-[8px] text-[12px] font-normal">
                      {"February 14, 2024"}
                    </p>
                    <div className={poor.className}>
                      <p className="text-center mt-[24px] font-poor text-[16px] font-thin text-white">
                        Doubt thou the stars are fire, Doubt that the sun doth
                        move,
                        <br />
                        Doubt truth to be a liar, But never doubt I love.
                      </p>
                    </div>
                    <p className="text-white text-[12px] text-center font-light">
                      - William Shakespeare -
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-col ml-2 items-center my-auto space-y-1">
                <Button
                  onClick={() => {
                    console.log("Next Event");
                  }}
                  className="rounded-[8px] w-7 h-7 bg-[#D9D9D9] mix-blend-luminosity"
                  bgImage="/arrow.right.circle.svg"
                  bgHeight={28}
                  bgWidth={28}
                >
                  {" "}
                </Button>
                <Button
                  onClick={() => {
                    navToEvent();
                  }}
                  className="rounded-[8px] w-7 h-7 bg-[#D9D9D9] mix-blend-luminosity"
                  bgImage="/arrowshape.turn.up.forward.svg"
                  bgHeight={28}
                  bgWidth={28}
                >
                  {" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[940px] left-0 right-0">
        <EventPicker />
      </div>
    </div>
  );
}
