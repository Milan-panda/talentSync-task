import HandDrawnArrow from "../../assets/Hand-drawn-arrow.svg"
import VideoRecorder from "../../assets/video-recorder.svg"
import Microphone from "../../assets/microphone-01.svg"
import Calendar from "../../assets/calendar.svg"
import LockUnlocked from "../../assets/lock-unlocked-04.svg"
import Rectangle from "../../assets/Rectangle-1.png"
import "./WhyClearLink.css"

const WhyClearLink = () => {
  return (
    <div className='flex flex-col gap-[80px]'>
      <div className='flex items-start'>
        <div className='flex flex-col gap-[20px]'>
          <div className='flex flex-col gap-[12px]'>
            <h3 className='text-[#175CD3] text-[18px] font-[600] leading-[28px]'>The ClearLink Advantage</h3>
            <h2 className='text-[#1D2939] text-[48px] font-[600] leading-[60px] tracking-[-0.96px]'>Why Choose ClearLink?</h2>
          </div>
          <p className='text-[#667085] text-[24px] font-[400] leading-[32px]'>In a world where connection is everything, ClearLink takes the lead. Our <br /> cutting-edge video conferencing app offers:</p>
        </div>
        <div>
          <img src={HandDrawnArrow} className='absolute hand-drawn-arrow' alt="" />
        </div>
      </div>

      {/* 2nd Half */}
      <div className='flex justify-between items-center gap-[70px]'>
        <div className='grid gap-x-[40px] gap-y-[60px] grid-cols-2'>
          <div className="flex flex-col gap-[20px]">
            <div>
              <div className="flex p-[16px] items-center justify-center rounded-full bg-[#F9FAFB] border-[1px] border-[#F9FAFB] w-fit"><img src={VideoRecorder} alt="Vide Recorder" /></div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[#101828] text-[24px] font-[600] leading-[32px]">Crystal-clear HD video</h3>
              <p className="text-[#475467] text-[18px] font-[400] leading-[28px]">No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.</p>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div>
              <div className="flex p-[16px] items-center justify-center rounded-full bg-[#F9FAFB] border-[1px] border-[#F9FAFB] w-fit"><img src={Microphone} alt="Vide Recorder" /></div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[#101828] text-[24px] font-[600] leading-[32px]">Noise-canceling audio</h3>
              <p className="text-[#475467] text-[18px] font-[400] leading-[28px]">Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.</p>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div>
              <div className="flex p-[16px] items-center justify-center rounded-full bg-[#F9FAFB] border-[1px] border-[#F9FAFB] w-fit"><img src={Calendar} alt="Vide Recorder" /></div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[#101828] text-[24px] font-[600] leading-[32px]">Scheduling made easy</h3>
              <p className="text-[#475467] text-[18px] font-[400] leading-[28px]">Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.</p>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div>
              <div className="flex p-[16px] items-center justify-center rounded-full bg-[#F9FAFB] border-[1px] border-[#F9FAFB] w-fit"><img src={LockUnlocked} alt="Vide Recorder" /></div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[#101828] text-[24px] font-[600] leading-[32px]">Bank-grade security</h3>
              <p className="text-[#475467] text-[18px] font-[400] leading-[28px]">Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img src={Rectangle} alt="" />
        </div>
      </div>
    </div>
  )
}

export default WhyClearLink
