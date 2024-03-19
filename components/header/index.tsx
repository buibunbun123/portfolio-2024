'use client'
import Image from "next/image";
import Button from "../button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  function navToHomepage() {
    router.push('/');
  }
  function navToEvent(){
    router.push('/event')
  }
  function navToQR(){
    router.push('/tools/qrcode')
  }
  return (
    <section className="inline-flex bg-white items-center top-0 w-full h-[100px]">
      <section className="inline-flex ">
      <Image
        src="/buimaomao-logo.svg"
        alt="website logo"
        width={60}
        height={60}
        className="m-5"
        onClick={navToHomepage}
      />
      <h1 className="text-black my-auto text-[32px] font-black"><Link href="/">bui mao mao</Link></h1>
    
      </section>
      <div className="inline-flex pl-[440px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <p className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"><Link href = "/event">events</Link></p>
            <p className="ml-[80px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">memory</p>
            <p className="ml-[80px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"><Link href = "/tools/qrcode">tools</Link></p>
            <p className="ml-[80px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">plans</p>
      </div>
      <Button
        onClick={()=>{console.log("Alo")}}
        className="ml-[120px] rounded-[20px] py-3 px-5 bg-[#85A0FD] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
      >login</Button>
    </section>
  );
};

export default Header;
