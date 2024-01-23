import Shopify from "../../assets/social-proofs/Shopify.svg"
import StarIcon from "../../assets/Star-icon.png"
import Avatar from "../../assets/Avatar.png"
import Arrow from "../../assets/arrow-left.svg"
import Contents from "../../assets/Contents.png"

import "./Testimonial.css"

const Testimonial = () => {
  return (
    <div className="grid gap-[64px] grid-cols-2 px-[32px]">
      <div className="flex flex-col gap-[48px]">
        <div className="h-[32px] w-[112.787px]"><img src={Shopify} alt="" /></div>
        <div className="flex items-center gap-[4px]">
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
          <img src={StarIcon} alt="" />
        </div>
        <div>
          <h2 className="text-[#101828] text-[44px] font-[500] leading-[60px] tracking-[-0.88px]">
          ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.
          </h2>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-[16px]">
            <img src={Avatar} alt="" />
            <div>
              <p className="text-[#101828] text-[20px] font-[600] leading-[30px]">Sarah Thompson</p>
              <p className="text-[#475467] text-[18px] font-[400] leading-[28px]">Project Manager, Shopify</p>
            </div>
          </div>
          <div className="flex gap-[32px]">
            <div className="testimonial-arrow-carousel flex justify-center items-center rounded-full h-[56px] w-[56px]"><img src={Arrow} alt="" /></div>
            <div className="testimonial-arrow-carousel flex justify-center items-center rounded-full h-[56px] w-[56px]"><img className="rotate-180" src={Arrow} alt="" /></div>
          </div>
        </div>
      </div>

      {/* right half */}
      <div>
        <img src={Contents} alt="" />
      </div>
    </div>
  )
}

export default Testimonial