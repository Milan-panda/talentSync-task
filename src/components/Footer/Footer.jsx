import Logo from '../../assets/Logo.svg'
import playStore from "../../assets/google-play.svg"
import appStore from "../../assets/app-store.svg"
import linkedin from "../../assets/linkedin.svg"
import twitter from "../../assets/twitter.svg"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import github from "../../assets/github.svg"
import youtube from "../../assets/youtube.svg" 

const Footer = () => {
  return (
    <>
      {/* Upper part */}
      <div className='pt-[96px] pb-[48px] flex gap-[100px]'>
        {/* Left part */}
        <div>
           <div className='flex gap-[10px]'>
            <span><img src={Logo} alt="" /></span>
            <span className='text-[#101828] text-[24px] font-[600] '>ClearLink<span className='text-[#528BFF]'>.</span></span>
           </div>
           <div>
            <p className='text-[#475467] text-[18px] font-[400] leading-[28px]'>ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!</p>
           </div>
        </div>

        {/* Right part */}
        <div className='flex gap-[32px]'>
          <div className='flex flex-col gap-[16px] w-[160px]'>
            <h2 className='text-[#667085] text-[16px] font-[600] leading-[24px]'>Product</h2>
            <a href="#" className='text-[#475467] text-[18px] font-[600] leading-[28px]'>Overview</a>
            <a href="#" className='text-[#475467] text-[18px] font-[600] leading-[28px]'>Features</a>
            <a href="#" className='text-[#475467] text-[18px] font-[600] leading-[28px]'>Solutions</a>
            <a href="#" className='text-[#475467] text-[18px] font-[600] leading-[28px]'>Tutorials</a>
            <a href="#" className='text-[#475467] text-[18px] font-[600] leading-[28px]'>Pricing</a>
          </div>
          <div className='flex flex-col gap-[16px] w-[160px]'>
            <h2 className='text-[#667085] text-[16px] font-[600] leading-[24px]'>Company</h2>
            <a href="#" className='text-[#475467] text-[18px] font-[600] leading-[28px]'>About us</a>
            <a href="#" className='text-[#475467] text-[18px] font-[600] leading-[28px]'>Careers</a>
            <a href="#" className='text-[#475467] text-[18px] font-[600] leading-[28px]'>Press</a>
            <a href="#" className='text-[#475467] text-[18px] font-[600] leading-[28px]'>News</a>
            <a href="#" className='text-[#475467] text-[18px] font-[600] leading-[28px]'>Contact</a>
          </div>
          <div className='flex flex-col gap-[16px] w-[160px]'>
            <h2 className='text-[#667085] text-[16px] font-[600] leading-[24px]'>Resources</h2>
            <a href="#" className='text-[#475467] text-[18px] font-[600] leading-[28px]'>Blog</a>
            <a href="#" className='text-[#475467] text-[18px] font-[600] leading-[28px]'>Events</a>
            <a href="#" className='text-[#475467] text-[18px] font-[600] leading-[28px]'>Help center</a>
            <a href="#" className='text-[#475467] text-[18px] font-[600] leading-[28px]'>Tutorials</a>
            <a href="#" className='text-[#475467] text-[18px] font-[600] leading-[28px]'>Support</a>
          </div>
          <div className='flex flex-col gap-[16px] w-[160px]'>
            <h2 className='text-[#667085] text-[16px] font-[600] leading-[24px]'>Legal</h2>
            <a href="#" className='text-[#475467] text-[18px] font-[600] leading-[28px]'>Terms</a>
            <a href="#" className='text-[#475467] text-[18px] font-[600] leading-[28px]'>Privacy</a>
            <a href="#" className='text-[#475467] text-[18px] font-[600] leading-[28px]'>Cookies</a>
            <a href="#" className='text-[#475467] text-[18px] font-[600] leading-[28px]'>Licenses</a>
            <a href="#" className='text-[#475467] text-[18px] font-[600] leading-[28px]'>Contact</a>
          </div>
          <div className='flex flex-col gap-[16px] w-[135px]'>
            <h2 className='text-[#004EEB] text-[16px] font-[600] leading-[24px]'>Get the app</h2>
            <a href="#"><img src={appStore} alt="" /></a>
            <a href='#'><img src={playStore} alt="" /></a>
          </div>
        </div>
      </div>

      {/* Lower part */}
      <div className='py-[48px]'>
        <div className='flex justify-between'>
          <div>
            <h2 className='text-[#667085] text-[16px] font-[400] leading-[24px]'>© 2023 ClearLink. All rights reserved.</h2>
          </div>
          <div className='flex gap-[24px]'>
            <a href='#'><img src={linkedin} alt="" /> </a>
            <a href='#'><img src={twitter} alt="" /> </a>
            <a href='#'><img src={facebook} alt="" /> </a>
            <a href='#'><img src={instagram} alt="" /> </a>
            <a href='#'><img src={github} alt="" /> </a>
            <a href='#'><img src={youtube} alt="" /> </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
