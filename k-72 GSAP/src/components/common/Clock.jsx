import React, { useEffect, useState } from 'react'
import { Globe } from "lucide-react"

const Clock = ({city="Delhi", timezone="Asia/Kolkata"}) => {
    const [time,setTime]=useState("");
    useEffect(() => {
        const UpdateClock=() => {
        const options={
            hour:"2-digit",
            minute:"2-digit",
            second:"2-digit",
            hour12: false,
            timeZone: timezone,
        };
        const formatter=new Intl.DateTimeFormat("en-GB", options);
        setTime(formatter.format(new Date()));
        };
        UpdateClock();
        const interval=setInterval(UpdateClock,1000);
        return () => clearInterval(interval);
    },[timezone])
  return (
      <div className=" bg-black relative bottom-0 h-[3vw] w-[15vw] text-[1.8vw] px-2 flex items-center gap-2 z-1000 rounded-full text-white font-[font2]">
      <Globe size={15} />
      <span>
        {city}_{time}
      </span>
    </div>
  )
}

export default Clock
