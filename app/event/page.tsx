"use client";
import Clock from "@/components/clock";
import Image from "next/image";
import { Poor_Story } from "next/font/google";
import Button from "@/components/button";
import EventPicker from "@/components/event-picker";
import { useState } from "react";
import { Seaweed_Script, Baloo_Chettan_2 } from "next/font/google";
const baloo = Baloo_Chettan_2({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const poor = Poor_Story({
  weight: "400",
  subsets: ["latin"],
});

const seaweed = Seaweed_Script({
  weight: "400",
  subsets: ["latin"],
});
export default function Homepage() {
  const [isShow, setShow] = useState(false);
  return (
    <div className=" mx-auto w-full">
      <Image
        src="/event-bg.svg"
        alt="background image"
        width="1440"
        height={1220}
        objectFit="cover"
        style={{ width: "100%" }}
      />
      <div className="absolute top-[200px] left-0 right-0">
        <div className="flex-col flex items-center mix-blend-normal mt-3">
          <h1 className="text-center text-pink-600 mt-6 text-[40px] leading-[18px] font-extrabold">
            {"Valentine's Day"}
          </h1>
          <p className="text-center text-black mt-[8px] text-[12px] font-bold">
            {"February 14, 2024"}
          </p>
          <div className={poor.className}>
            <p className="text-center mt-[24px] font-poor text-[26px] font-bold text-white">
              Doubt thou the stars are fire, Doubt that the sun doth move,
              <br />
              Doubt truth to be a liar, But never doubt I love.
            </p>
          </div>
          <p className="text-white text-[12px] text-center font-light">
            - William Shakespeare -
          </p>
        </div>
        <div
          className="rounded-[200px] mt-[240px] w-[334px] h-[114px] mx-auto bg-gradient-to-r from-[#EE74C4] via-[#73F876] to-[#0066FF]
        drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] hover:opacity-60 pt-4 "
        >
          <div
            className="rounded-full w-[80px] h-[80px] bg-[#FD1A1A] flex flex-grow justify-center opacity-100 items-center ml-4 mix-blend-overlay"
            onClick={() => {
              setShow(true);
              console.log("Change");
            }}
          >
            <Image
              src="/heart.circle.fill.svg"
              alt="heart icon"
              height={60}
              width={60}
              className=""
            />
            <p className="absolute text-white ml-[440px] flex w-full mt-1 font-light italic text-[24px] text-center">
              a message from <br />
              anh heo thui{" "}
            </p>
          </div>
        </div>
      </div>
      {isShow ? (
        <div className="absolute top-0 w-full h-[1320px] bg-black/40">
          <div className="bg-white rounded-[20px] w-[1200px] h-[600px] mx-auto mt-[380px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] flex flex-grow">
            <Image
              src="/ironman.svg"
              alt="ironman background"
              width={440}
              height={600}
            />

            <div className="text-[32px] w-full mt-6">
              <h1
                className={seaweed.className}
                style={{ color: "pink", textAlign: "center" }}
              >
                to my beloved - bui mao mao
              </h1>
              <div className={baloo.className}>
                <h2 className="text-[#0066FF] text-[16px] font-bold">
                  Cục vàng của anh ơi,
                </h2>
                <h2 className="text-[#FDDD76] mt-3 text-[14px] font-bold">
                  “Dịp valentine năm nay hơi đặc biệt một chút, hơi khác lạ với
                  mọi năm nhưng tình cảm của anh vẫn vậy vẫn to đùng mặp địt
                  tròn vo như quả trứng gà.”
                </h2>
                <p className="mt-3 text-[15px] text-black">
                  Lá thư này viết từ trái tim của anh, từ những cảm xúc sâu thẳm
                  mà anh luôn muốn dành cho em. Trong mọi khoảnh khắc đắm chìm
                  trong tình yêu của tụi mình, anh muốn nói với cục vàng rằng em
                  là ngọn lửa sưởi ấm cuộc đời anh.
                </p>
                <p className="mt-3 text-[15px] text-black">
                  Mi heo ơi, từ lần đầu tau gặp mi, anh đã biết rằng em là người
                  đặc biệt “mặp địt”. Ánh mắt của em, nụ cười của em, và cách em
                  nói chuyện đã khiến anh say đắm và bị cuốn hút theo đi. Kể từ
                  đó, anh không thể không yêu em, không thể không dành tặng cho
                  em những cảm xúc tuyệt vời nhất. Em là người mà anh muốn bên
                  cạnh, không chỉ trong những ngày hạnh phúc mà còn trong những
                  thời khắc khó khăn. Anh muốn chia sẻ mọi niềm vui, mọi nỗi
                  buồn, và mọi giấc mơ với em. Em là người mà anh muốn dành tặng
                  những bản tình ca “anh hát”, những bức tranh tuyệt đẹp “anh
                  vẽ”, và những kỷ niệm đáng nhớ. Anh muốn đi cùng em trên con
                  đường đời, bên nhau đối mặt với những thách thức và hạnh phúc.
                  Em là người mà anh muốn nắm tay, đi qua mọi ngả đường. Anh
                  muốn dành cho em những lời yêu thương, những cái ôm ấm áp, và
                  những bình minh đẹp nhất. Em là người mà anh muốn cùng nhau
                  lưu giữ kỷ niệm mỗi ngày, không chỉ vào dịp Valentine. Anh
                  muốn nói với em rằng em là người đặc biệt, là người khiến anh
                  tin vào tình yêu và hạnh phúc. Và cuối cùng, em là người mà
                  anh luôn muốn và sẽ luôn muốn nói:
                </p>
                <h2 className="text-[#F9BACD] mt-2 text-[16px] font-bold">
                “Em yêu, anh luôn ở đây, bên cạnh em.”
                </h2>
                <h2 className="text-[#FF004D] mt-2 text-[16px] font-bold">
                Happy Valentine, người yêu của anh!
                </h2>
                <h2 className="text-[#0B2878] mt-2 text-[16px] font-bold">
                Bỉ ngạn heo, Yêu thương vô hạn, Heo mặp vô địch.
                </h2>
                <h2 className="text-[#7FC97D] mt-3 text-[16px] font-bold">
                Anh Heo Thúi
                </h2>

              </div>
            </div>
            <Button
              onClick={() => {
                setShow(false);
              }}
              bgImage="/clear.fill.svg"
              bgHeight={32}
              bgWidth={32}
              className="absolute right-4 top-4 bg-[#D9D9D9] bg-opacity-20 hover:bg-opacity-80 items-center rounded-full"
            >
              {" "}
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
