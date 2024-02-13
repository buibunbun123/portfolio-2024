'use client'
import React from 'react'
import Button from '../button'
import Image from 'next/image'
import SimpleDatePicker from '../date-picker'
import { useState } from 'react'
const EventPicker = () => {
    const [isShow, setShow] = useState(false)
    const [dateFrom, setDateFrom] = useState (new Date())
    var DD1 = dateFrom.getDate();
    var MM1 = dateFrom.getMonth()+1;
    var YY1 = dateFrom.getFullYear();
    const [dateTo, setDateTo] = useState(new Date())
    var DD2 = dateTo.getDate();
    var MM2 = dateTo.getMonth() +1;
    var YY2 = dateTo.getFullYear();
   return (
    <section className='w-full py-auto'>
        {isShow ? (<div className='mx-auto flex flex-grow border-[3px] border-blue-900 rounded-[8px] w-[30%] h-[108px] mb-4 bg-gradient-to-r from-blue-400 to-yellow-300'>
            <SimpleDatePicker 
            className='top-2 mx-2'
            onClose={() => setShow(false)}
            onSelectFrom={(date) => setDateFrom(date)}
            onSelectTo={(date) => setDateTo(date)}
            />
        </div>) : null}
    <div className='flex flex-grow w-[1020px] h-[160px] mx-auto bg-white rounded-[20px]'>
        <div className='flex my-auto ml-[60px]'>
            <Image 
                src = "/location.svg"
                alt = "location image"
                width={80}
                height={80}
            />
        </div>
        <div className='my-auto ml-4 space-y-5'>
            <div className='text-[14px]'>LOCATION</div>
            <div className='font-semibold text-[16px]'>Ho Chi Minh</div>
        </div>
        <div className='w-[2px] h-[80px] border-[1px] bg-black border-black my-auto ml-[40px]'></div>
        <div className="ml-7 bg-[#D9D9D9] bg-opacity-20 hover:bg-opacity-40 rounded-[8px] w-[380px] h-[100px] my-auto flex"
        onClick={()=>setShow(true)}
        >
        <Image 
                src = "/calendar-icon.svg"
                alt = "calendar image"
                width={80}
                height={80}
                className='ml-5'
            />
            <div className='my-auto ml-4 space-y-5'>
                <button className='flex flex-grow'>
                <div className='text-[14px] pr-1'>DATE PICKER</div>
                <Image 
                    src = "/keyboard_arrow_up.svg"
                    alt = "arrow icon"
                    height={20}
                    width={20}
                />
                </button>
            <div className='font-semibold text-[16px]'>{DD1}/{MM1}/{YY1} to {DD2}/{MM2}/{YY2}</div>
        </div>
        </div>
        <div className='flex ml-6'>
  <Button
    onClick={() => { console.log("Navigate to Plans") }}
    bgImage='/button-image-cat.svg'
    bgWidth={264}
    bgHeight={79}
    className='relative flex my-auto'
    childrenClassName='absolute top-[30px] left-0 right-0 mx-auto text-white text-[16px] font-semibold my-auto'
  >
    Make Your Plans Now
  </Button>
</div>


    </div>
    </section>
  )
}

export default EventPicker