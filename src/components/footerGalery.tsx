import FooterImage1 from "@/../public/footerimage1.jpg"
import FooterImage2 from "@/../public/footerimage2.jpg"
import FooterImage3 from "@/../public/footerimage3.jpg"
import FooterImage4 from "@/../public/footerimage4.jpg"
import FooterImage5 from "@/../public/footerimage5.jpg"
import FooterImage6 from "@/../public/footerimage6.jpg"
import Image from "next/image"

export default function FooterGallery() {
  return (
    <div className="flex w-full flex-wrap">
      <div className="relative flex-[1] h-[300px] min-w-[150px]">
        <Image src={FooterImage1} alt="" fill />
      </div>
      <div className="relative flex-[1] h-[300px] min-w-[150px]">
        <Image src={FooterImage2} alt="" fill />
      </div>
      <div className="relative flex-[1] h-[300px] min-w-[150px]">
        <Image src={FooterImage3} alt="" fill />
      </div>
      <div className="relative flex-[1] h-[300px] min-w-[150px]">
        <Image src={FooterImage4} alt="" fill />
      </div>
      <div className="relative flex-[1] h-[300px] min-w-[150px]">
        <Image src={FooterImage5} alt="" fill />
      </div>
      <div className="relative flex-[1] h-[300px] min-w-[150px]">
        <Image src={FooterImage6} alt="" fill />
      </div>
    </div>
  )
}
