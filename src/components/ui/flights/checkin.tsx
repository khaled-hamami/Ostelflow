import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { Calendar } from "../calendar"

export default function Checkin() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className=" w-full h-full flex items-center justify-evenly cursor-pointer">
          <div className="flex w-[225.5px] items-start gap-[7px] p-[16px] relative bg-background  rounded-2xl">
            <div className="flex-col items-start justify-center gap-[6px] mr-[-15.50px] inline-flex relative flex-[0_0_auto]">
              <div className="items-center gap-[6px] inline-flex relative flex-[0_0_auto]">
                <div className="relative w-[16.29px] h-[19.17px] bg-[url(/location.svg)] bg-[100%_100%]" />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-foreground text-[18px] text-center tracking-[0] leading-[normal] flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                  >
                    <path
                      d="M16.6041 3.69141H5.53385C3.49586 3.69141 1.84375 5.34352 1.84375 7.3815V16.6067C1.84375 18.6447 3.49586 20.2968 5.53385 20.2968H16.6041C18.6421 20.2968 20.2942 18.6447 20.2942 16.6067V7.3815C20.2942 5.34352 18.6421 3.69141 16.6041 3.69141Z"
                      stroke="#FFCA00"
                      strokeWidth="2.21406"
                      strokeLinecap="round"
                      strokeLinejoin="round"
          
                    />
                    <path
                      d="M1.84375 9.2259H20.2942M7.3789 1.8457V5.5358V1.8457ZM14.7591 1.8457V5.5358V1.8457Z"
                      stroke="#FFCA00"
                      strokeWidth="2.21406"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    
                    />
                  </svg>
                  <span>Check in</span>
                </div>
              </div>
              <div className="items-center gap-[20px]  justify-between opacity-70 inline-flex relative flex-[0_0_auto]">
                <div className="flex flex-col gap-4 mt-4">
                  <div className="relative w-fit mt-[-1.00px] opacity-80 [font-family:'Open_Sans-Regular',Helvetica] font-normal text-foreground text-[18px] text-center tracking-[0] leading-[normal]">
                    Choose Time
                  </div>
                  <div className="relative w-fit mt-[-1.00px] opacity-80 [font-family:'Open_Sans-Regular',Helvetica] font-normal text-foreground text-[18px] text-center tracking-[0] leading-[normal]">
                    {date?.toLocaleDateString()}
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <g opacity="0.6">
                    <path
                      d="M15.6654 7.79102L10.2487 13.2077L4.83203 7.79102"
                      stroke="#333333"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="fill-current"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="shadow">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
