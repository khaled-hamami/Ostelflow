import { Button } from "@/components/ui/button"
import Image from "next/image"
import Logo from "./logo"

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="xl:col-span-1">
            <Logo />
            <p className="mt-8 text-gray-500 text-base">
              We always make our customers happy by providing as many choices as possible
            </p>
            <div className="mt-8 flex space-x-6">
              <a className="text-gray-400 hover:text-gray-300" href="#">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a className="text-gray-400 hover:text-gray-300" href="#">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a className="text-gray-400 hover:text-gray-300" href="#">
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  About
                </h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a className="text-base text-gray-300 hover:text-white" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-300 hover:text-white" href="#">
                      Features
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-300 hover:text-white" href="#">
                      News
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-300 hover:text-white" href="#">
                      Menu
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  Company
                </h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a className="text-base text-gray-300 hover:text-white" href="#">
                      Why Zirsm
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-300 hover:text-white" href="#">
                      Partner With Us
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-300 hover:text-white" href="#">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-300 hover:text-white" href="#">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  Support
                </h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a className="text-base text-gray-300 hover:text-white" href="#">
                      Account
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-300 hover:text-white" href="#">
                      Support Center
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-300 hover:text-white" href="#">
                      Feedback
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-300 hover:text-white" href="#">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  Subscribe on our destination review newsletters
                </h4>
                <form className="mt-4 sm:flex sm:max-w-md">
                  <label className="sr-only" htmlFor="email-address">
                    Email address
                  </label>
                  <input
                    autoComplete="email"
                    className="appearance-none min-w-0 w-full bg-white text-gray-900 placeholder-gray-500 border border-transparent rounded-md py-2 px-4 text-base leading-6 focus:outline-none focus:border-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    defaultValue="osteflowbooking@gmail.com"
                    id="email-address"
                    name="email-address"
                    placeholder="Your Email"
                    required
                    type="email"
                  />
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <Button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-yellow-400 hover:bg-yellow-500">
                      <RightArrowIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const RightArrowIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
      <path d="M12 13.5H4V11.5H12V4.5L20 12.5L12 20.5V13.5Z" fill="black" />
    </svg>
  )
}

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
      <path
        d="M29.5484 8.23655C28.5305 8.68681 27.451 8.98251 26.3458 9.11388C27.5108 8.41713 28.3827 7.32057 28.7991 6.02855C27.7058 6.67921 26.5071 7.13521 25.2578 7.38188C24.4186 6.48399 23.3062 5.8885 22.0937 5.68799C20.8812 5.48749 19.6363 5.6932 18.5528 6.27315C17.4692 6.8531 16.6076 7.77479 16.1019 8.89494C15.5962 10.0151 15.4748 11.2709 15.7564 12.4672C13.5392 12.3561 11.3702 11.7799 9.39014 10.7761C7.41008 9.77229 5.66326 8.36328 4.26309 6.64055C3.76748 7.49182 3.50703 8.45952 3.50843 9.44455C3.50843 11.3779 4.49243 13.0859 5.98843 14.0859C5.10311 14.058 4.23727 13.8189 3.46309 13.3885V13.4579C3.46336 14.7455 3.90892 15.9934 4.72422 16.99C5.53953 17.9866 6.6744 18.6705 7.93643 18.9259C7.11458 19.1486 6.25284 19.1814 5.41643 19.0219C5.77225 20.1302 6.46577 21.0995 7.39988 21.794C8.334 22.4886 9.46193 22.8736 10.6258 22.8952C9.46907 23.8036 8.14466 24.4752 6.72827 24.8714C5.31187 25.2677 3.83126 25.3809 2.37109 25.2045C4.92002 26.8438 7.88722 27.714 10.9178 27.7112C21.1751 27.7112 26.7844 19.2139 26.7844 11.8445C26.7844 11.6045 26.7778 11.3619 26.7671 11.1245C27.8589 10.3354 28.8012 9.35791 29.5498 8.23788L29.5484 8.23655Z"
        fill="#FFCA00"
      />
    </svg>
  )
}

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
      <path
        d="M16.0013 3.36133C19.624 3.36133 20.076 3.37466 21.4973 3.44133C22.9173 3.50799 23.884 3.73066 24.7346 4.06133C25.6146 4.39999 26.356 4.85866 27.0973 5.59866C27.7753 6.26519 28.2999 7.07145 28.6346 7.96133C28.964 8.81066 29.188 9.77866 29.2546 11.1987C29.3173 12.62 29.3346 13.072 29.3346 16.6947C29.3346 20.3173 29.3213 20.7693 29.2546 22.1907C29.188 23.6107 28.964 24.5773 28.6346 25.428C28.3009 26.3184 27.7761 27.1248 27.0973 27.7907C26.4306 28.4684 25.6244 28.993 24.7346 29.328C23.8853 29.6573 22.9173 29.8813 21.4973 29.948C20.076 30.0107 19.624 30.028 16.0013 30.028C12.3786 30.028 11.9266 30.0147 10.5053 29.948C9.0853 29.8813 8.11864 29.6573 7.26797 29.328C6.37774 28.994 5.57134 28.4693 4.9053 27.7907C4.22718 27.1242 3.70254 26.318 3.36797 25.428C3.0373 24.5787 2.81464 23.6107 2.74797 22.1907C2.6853 20.7693 2.66797 20.3173 2.66797 16.6947C2.66797 13.072 2.6813 12.62 2.74797 11.1987C2.81464 9.77733 3.0373 8.81199 3.36797 7.96133C3.70162 7.0709 4.22637 6.26442 4.9053 5.59866C5.57153 4.9203 6.37787 4.39563 7.26797 4.06133C8.11864 3.73066 9.08397 3.50799 10.5053 3.44133C11.9266 3.37866 12.3786 3.36133 16.0013 3.36133ZM16.0013 10.028C14.2332 10.028 12.5375 10.7304 11.2873 11.9806C10.037 13.2309 9.33464 14.9266 9.33464 16.6947C9.33464 18.4628 10.037 20.1585 11.2873 21.4087C12.5375 22.6589 14.2332 23.3613 16.0013 23.3613C17.7694 23.3613 19.4651 22.6589 20.7153 21.4087C21.9656 20.1585 22.668 18.4628 22.668 16.6947C22.668 14.9266 21.9656 13.2309 20.7153 11.9806C19.4651 10.7304 17.7694 10.028 16.0013 10.028V10.028ZM24.668 9.69466C24.668 9.25263 24.4924 8.82871 24.1798 8.51615C23.8673 8.20359 23.4433 8.02799 23.0013 8.02799C22.5593 8.02799 22.1354 8.20359 21.8228 8.51615C21.5102 8.82871 21.3346 9.25263 21.3346 9.69466C21.3346 10.1367 21.5102 10.5606 21.8228 10.8732C22.1354 11.1857 22.5593 11.3613 23.0013 11.3613C23.4433 11.3613 23.8673 11.1857 24.1798 10.8732C24.4924 10.5606 24.668 10.1367 24.668 9.69466ZM16.0013 12.6947C17.0622 12.6947 18.0796 13.1161 18.8297 13.8662C19.5799 14.6164 20.0013 15.6338 20.0013 16.6947C20.0013 17.7555 19.5799 18.7729 18.8297 19.5231C18.0796 20.2732 17.0622 20.6947 16.0013 20.6947C14.9404 20.6947 13.923 20.2732 13.1729 19.5231C12.4227 18.7729 12.0013 17.7555 12.0013 16.6947C12.0013 15.6338 12.4227 14.6164 13.1729 13.8662C13.923 13.1161 14.9404 12.6947 16.0013 12.6947V12.6947Z"
        fill="#FFCA00"
      />
    </svg>
  )
}

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
      <path
        d="M16.0013 3.36133C8.6373 3.36133 2.66797 9.33066 2.66797 16.6947C2.66797 23.3493 7.54397 28.8653 13.9186 29.8667V20.548H10.532V16.6947H13.9186V13.7573C13.9186 10.416 15.908 8.57066 18.9546 8.57066C20.4133 8.57066 21.9386 8.83066 21.9386 8.83066V12.1107H20.2586C18.6013 12.1107 18.0853 13.1387 18.0853 14.1933V16.6947H21.7826L21.192 20.548H18.0853V29.8667C24.4586 28.8667 29.3346 23.348 29.3346 16.6947C29.3346 9.33066 23.3653 3.36133 16.0013 3.36133Z"
        fill="#FFCA00"
      />
    </svg>
  )
}
