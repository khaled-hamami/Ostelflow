import { UserButton, currentUser } from "@clerk/nextjs"
import { ModeToggle } from "./modeToogler"
import Link from "next/link"

export default async function Header() {
  // const user = await currentUser()

  return (
    <header className=" hidden md:flex w-full py-2 bg-black  justify-between items-center px-24 flex-wrap">
      <span className="text-white flex items-center gap-2 ">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M13.5 3C7.70085 3 3 7.72946 3 13.5639C3 18.8364 6.83985 23.2067 11.8599 24V16.6169H9.1929V13.5639H11.8599V11.2367C11.8599 8.58937 13.4265 7.12732 15.8257 7.12732C16.9744 7.12732 18.1756 7.33332 18.1756 7.33332V9.93204H16.8526C15.5475 9.93204 15.1411 10.7465 15.1411 11.5821V13.5639H18.0528L17.5876 16.6169H15.1411V24C20.1601 23.2077 24 18.8353 24 13.5639C24 7.72946 19.2991 3 13.5 3Z"
              fill="white"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <g clipPath="url(#clip0_44_11681)">
              <path
                d="M25.9988 7.25551C25.1 7.64264 24.1467 7.89689 23.1707 8.00985C24.1995 7.41077 24.9694 6.46794 25.3371 5.35705C24.3717 5.9165 23.3132 6.30857 22.21 6.52066C21.4689 5.74864 20.4867 5.23663 19.416 5.06424C18.3452 4.89184 17.246 5.06872 16.2892 5.56736C15.3323 6.06601 14.5715 6.85849 14.1249 7.8216C13.6784 8.78471 13.5711 9.86449 13.8199 10.8931C11.862 10.7975 9.94662 10.3021 8.19814 9.43904C6.44966 8.57595 4.90714 7.36447 3.67072 5.88325C3.23307 6.61518 3.00309 7.44722 3.00432 8.29416C3.00432 9.95645 3.87323 11.425 5.19427 12.2848C4.41249 12.2609 3.64792 12.0553 2.96429 11.6852V11.7449C2.96452 12.8519 3.35797 13.9249 4.07792 14.7818C4.79787 15.6386 5.80002 16.2267 6.91444 16.4463C6.18871 16.6378 5.42776 16.666 4.68917 16.5288C5.00338 17.4818 5.61579 18.3152 6.44065 18.9123C7.26551 19.5095 8.26153 19.8406 9.28925 19.8592C8.26783 20.6402 7.09832 21.2176 5.84758 21.5583C4.59684 21.899 3.2894 21.9964 2 21.8447C4.25082 23.2542 6.87099 24.0024 9.5471 24C18.6048 24 23.5581 16.6939 23.5581 10.3577C23.5581 10.1513 23.5522 9.9427 23.5428 9.73864C24.5069 9.06015 25.339 8.21966 26 7.25665L25.9988 7.25551Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_44_11681">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            className="mt-[-3px]"
          >
            <g clipPath="url(#clip0_44_11685)">
              <path
                d="M13.5 2.25C16.5566 2.25 16.938 2.26125 18.1373 2.3175C19.3354 2.37375 20.151 2.56163 20.8688 2.84063C21.6113 3.12638 22.2368 3.51338 22.8623 4.13775C23.4343 4.70013 23.877 5.38041 24.1594 6.13125C24.4373 6.84788 24.6263 7.66463 24.6825 8.86275C24.7354 10.062 24.75 10.4434 24.75 13.5C24.75 16.5566 24.7388 16.938 24.6825 18.1373C24.6263 19.3354 24.4373 20.151 24.1594 20.8688C23.8778 21.62 23.435 22.3004 22.8623 22.8623C22.2997 23.4341 21.6195 23.8767 20.8688 24.1594C20.1521 24.4373 19.3354 24.6263 18.1373 24.6825C16.938 24.7354 16.5566 24.75 13.5 24.75C10.4434 24.75 10.062 24.7388 8.86275 24.6825C7.66463 24.6263 6.849 24.4373 6.13125 24.1594C5.38012 23.8775 4.69972 23.4348 4.13775 22.8623C3.56558 22.3 3.12292 21.6197 2.84063 20.8688C2.56163 20.1521 2.37375 19.3354 2.3175 18.1373C2.26462 16.938 2.25 16.5566 2.25 13.5C2.25 10.4434 2.26125 10.062 2.3175 8.86275C2.37375 7.6635 2.56163 6.849 2.84063 6.13125C3.12214 5.37995 3.5649 4.69949 4.13775 4.13775C4.69988 3.56539 5.38023 3.1227 6.13125 2.84063C6.849 2.56163 7.6635 2.37375 8.86275 2.3175C10.062 2.26462 10.4434 2.25 13.5 2.25ZM13.5 7.875C12.0082 7.875 10.5774 8.46763 9.52253 9.52253C8.46763 10.5774 7.875 12.0082 7.875 13.5C7.875 14.9918 8.46763 16.4226 9.52253 17.4775C10.5774 18.5324 12.0082 19.125 13.5 19.125C14.9918 19.125 16.4226 18.5324 17.4775 17.4775C18.5324 16.4226 19.125 14.9918 19.125 13.5C19.125 12.0082 18.5324 10.5774 17.4775 9.52253C16.4226 8.46763 14.9918 7.875 13.5 7.875ZM20.8125 7.59375C20.8125 7.22079 20.6643 6.8631 20.4006 6.59938C20.1369 6.33566 19.7792 6.1875 19.4063 6.1875C19.0333 6.1875 18.6756 6.33566 18.4119 6.59938C18.1482 6.8631 18 7.22079 18 7.59375C18 7.96671 18.1482 8.3244 18.4119 8.58812C18.6756 8.85184 19.0333 9 19.4063 9C19.7792 9 20.1369 8.85184 20.4006 8.58812C20.6643 8.3244 20.8125 7.96671 20.8125 7.59375ZM13.5 10.125C14.3951 10.125 15.2536 10.4806 15.8865 11.1135C16.5194 11.7465 16.875 12.6049 16.875 13.5C16.875 14.3951 16.5194 15.2536 15.8865 15.8865C15.2536 16.5194 14.3951 16.875 13.5 16.875C12.6049 16.875 11.7465 16.5194 11.1135 15.8865C10.4806 15.2536 10.125 14.3951 10.125 13.5C10.125 12.6049 10.4806 11.7465 11.1135 11.1135C11.7465 10.4806 12.6049 10.125 13.5 10.125Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_44_11685">
                <rect width="27" height="27" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </span>
      <span className="flex items-center  gap-12 text-white">
        <span className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.7564 2.17932C11.3533 0.774485 9.48483 0 7.49653 0C3.39836 0 0.0625155 3.33411 0.060779 7.43228C0.060779 8.74161 0.402872 10.0214 1.05406 11.1484L0 15L3.94188 13.9668C5.0272 14.5589 6.25145 14.8715 7.49479 14.8715H7.49826C11.5964 14.8715 14.9323 11.5374 14.934 7.43749C14.9323 5.45091 14.1595 3.58416 12.7564 2.17932ZM7.49653 13.616H7.49479C6.38516 13.616 5.2981 13.3173 4.34997 12.7547L4.12422 12.621L1.78514 13.234L2.41028 10.9539L2.26268 10.7195C1.64448 9.73663 1.31801 8.59921 1.31801 7.43228C1.31975 4.02524 4.09122 1.25376 7.50174 1.25376C9.15316 1.25376 10.7039 1.89801 11.8708 3.06495C13.0377 4.23362 13.6803 5.78433 13.6785 7.43575C13.675 10.8445 10.9036 13.616 7.49653 13.616ZM10.8862 8.98819C10.7004 8.89442 9.78699 8.4464 9.61681 8.38389C9.44663 8.32137 9.32334 8.29011 9.19831 8.47766C9.07502 8.66346 8.71903 9.08196 8.60963 9.20526C8.50197 9.32855 8.39257 9.34418 8.20676 9.25214C8.02095 9.15837 7.42186 8.96388 6.71336 8.33005C6.16115 7.83688 5.7878 7.2291 5.68014 7.0433C5.57247 6.85749 5.66798 6.75677 5.76175 6.66474C5.8451 6.58138 5.94756 6.44767 6.03959 6.34001C6.13163 6.23235 6.16289 6.1542 6.2254 6.03091C6.28791 5.90762 6.25666 5.79822 6.20977 5.70618C6.16288 5.61241 5.79127 4.699 5.63672 4.32739C5.48565 3.96446 5.33283 4.01482 5.21822 4.00787C5.11056 4.00266 4.98553 4.00093 4.86224 4.00093C4.73894 4.00093 4.53751 4.04781 4.36733 4.23362C4.19715 4.41943 3.71788 4.86918 3.71788 5.78259C3.71788 6.69599 4.38296 7.57988 4.47673 7.70317C4.5705 7.82646 5.78606 9.70364 7.65108 10.5076C8.09389 10.6987 8.44119 10.8133 8.71035 10.8984C9.1549 11.039 9.56124 11.0199 9.88076 10.9713C10.2385 10.9175 10.98 10.5215 11.1345 10.0874C11.2891 9.65328 11.2891 9.28166 11.2422 9.20352C11.197 9.12711 11.072 9.08196 10.8862 8.98819Z"
              fill="white"
            />
          </svg>
          + 216 24 201 201
        </span>
        <span className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="15"
            viewBox="0 0 19 15"
            fill="none"
          >
            <g clipPath="url(#clip0_44_11698)">
              <path
                d="M2.3737 1.875H16.6237C16.8337 1.875 17.035 1.94085 17.1835 2.05806C17.332 2.17527 17.4154 2.33424 17.4154 2.5V12.5C17.4154 12.6658 17.332 12.8247 17.1835 12.9419C17.035 13.0592 16.8337 13.125 16.6237 13.125H2.3737C2.16373 13.125 1.96237 13.0592 1.81391 12.9419C1.66544 12.8247 1.58203 12.6658 1.58203 12.5V2.5C1.58203 2.33424 1.66544 2.17527 1.81391 2.05806C1.96237 1.94085 2.16373 1.875 2.3737 1.875ZM15.832 4.52375L9.5557 8.96125L3.16536 4.51V11.875H15.832V4.52375ZM3.56991 3.125L9.54699 7.28875L15.4378 3.125H3.56991Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_44_11698">
                <rect width="19" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span>ostelflowbooking@gmail.com</span>
        </span>
      </span>
      <span className="flex items-center gap-4 text-white">
        <button>TND</button>
        <button>FN</button>
        {/* {!user && (
          <> */}
        <Link href="/signup">Register</Link>
        <Link href="/signin">Sign in</Link>
        {/* </>
        )} */}
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </span>
    </header>
  )
}