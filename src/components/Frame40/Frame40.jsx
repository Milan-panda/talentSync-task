import CheckCircle from '../../assets/check-circle.svg'
import ScreenMockup from '../../assets/Screen-Mockup-Full.png'

const Frame40 = () => {
  return (
    <div className='flex justify-between items-center'>
      {/* Left Half */}
      <div className='flex flex-col max-w-[579px] gap-[40px]'>
        <div className='flex flex-col gap-[32px]'>
          <h2 className='text-[#101828] text-[48px] font-[600] leading-[60px] tracking-[-0.96px]'>Ready to clear the path to perfect communication?</h2>
          <div className='flex flex-col gap-[20px] pl-[16px]'>
            <div className='flex gap-[12px] items-center'>
              <img src={CheckCircle} alt="" />
              <p>30 days free trial</p>
            </div>
            <div className='flex gap-[12px] items-center'>
              <img src={CheckCircle} alt="" />
              <p>Cancel at any time</p>
            </div>
            <div className='flex gap-[12px] items-center'>
              <img src={CheckCircle} alt="" />
              <p>Access to all features</p>
            </div>
            <div className='flex gap-[12px] items-center'>
              <img src={CheckCircle} alt="" />
              <p>Personalized onboarding</p>
            </div>
          </div>
        </div>

        <div className="navbar-cta flex items-center gap-[8px]">
          <a
            href="#"
            className="first-action flex px-[24px] py-[14px] justify-center items-center gap-[4px] text-[#101828] text-[16px] font-[600] leading-[24px]"
          >
            Talk to sales
          </a>
          <a
            href="#"
            className="second-action flex px-[24px] py-[14px] justify-center items-center gap-[4px] text-white text-[16px] font-[600] leading-[24px]"
          >
            Start your free trial
          </a>
        </div>
      </div>

      {/* Right Half */}
      <div className='max-w-[704px] max-h-[528px]'>
        <img className='max-w-none h-[624px] rounded-[12px]' src={ScreenMockup} alt="" />
      </div>
    </div>
  )
}

export default Frame40
