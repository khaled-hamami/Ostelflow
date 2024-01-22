import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu } from "../menubar"
import { Separator } from "../separator"
import { useState } from "react"

const demoData = [
  "Tour in the outside of Lucca",
  "Wine Tasting in Tuscany",
  "Cinque Terre Tour",
  "Siena and Surroundings",
]

export default function Destination() {
  const [destination, setDestination] = useState(demoData[1])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className=" w-full h-full flex items-center justify-evenly cursor-pointer">
          <div className="flex w-[225.5px] items-start gap-[7px] p-[16px] relative bg-background text-foreground  rounded-2xl">
            <div className="flex-col items-start justify-center gap-[6px] mr-[-15.50px] inline-flex relative flex-[0_0_auto]">
              <div className="items-center gap-[6px] inline-flex relative flex-[0_0_auto]">
                <div className="relative w-[16.29px] h-[19.17px] bg-[url(/location.svg)] bg-[100%_100%]" />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-foreground text-[18px] text-center tracking-[0] leading-[normal] flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="21"
                    viewBox="0 0 17 21"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.25 8.8872C0.25 4.47899 3.93372 0.916016 8.38955 0.916016C12.8579 0.916016 16.5417 4.47899 16.5417 8.8872C16.5417 11.1086 15.7338 13.1708 14.4041 14.9188C12.9372 16.8469 11.1292 18.5268 9.09402 19.8454C8.62824 20.1502 8.20788 20.1732 7.69668 19.8454C5.64996 18.5268 3.84192 16.8469 2.38756 14.9188C1.0569 13.1708 0.25 11.1086 0.25 8.8872ZM5.70697 9.1354C5.70697 10.6122 6.912 11.7736 8.38955 11.7736C9.86806 11.7736 11.0847 10.6122 11.0847 9.1354C11.0847 7.67015 9.86806 6.45215 8.38955 6.45215C6.912 6.45215 5.70697 7.67015 5.70697 9.1354Z"
                      fill="#FFCA00"
                    />
                  </svg>
                  <span>Destination ?</span>
                </div>
              </div>
              <div className="items-center gap-[20px] opacity-70 inline-flex relative flex-[0_0_auto]">
                <div className="flex flex-col gap-4 mt-4">
                  <div className="relative w-fit mt-[-1.00px] opacity-80 [font-family:'Open_Sans-Regular',Helvetica] font-normal text-foreground text-[18px] text-center tracking-[0] leading-[normal]">
                    Destinations, Hotels
                  </div>
                  <div className="relative w-fit mt-[-1.00px] opacity-80 [font-family:'Open_Sans-Regular',Helvetica] font-normal text-foreground text-[18px] text-center tracking-[0] leading-[normal]">
                    {destination}
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
      <DropdownMenuContent className="w-60 shadow">
        {demoData.map((item, index) => (
          <div key={index}>
            <DropdownMenuItem
              onClick={() => setDestination(item)}
              className="text-foreground group flex items-center w-full p-0 text-md leading-5 text-left cursor-pointer "
            >
              <div className="h-full w-full hover:bg-primary text-bold px-2 py-4">{item}</div>
            </DropdownMenuItem>
            {index !== demoData.length - 1 && <Separator />}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
