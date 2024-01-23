import "./FAQ.css"
import MinusCircle from "../../assets/minus-circle.svg"
import PlusCircle from "../../assets/plus-circle.svg"

const FAQ = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex flex-col gap-[20px] max-w-[547px]'>
        <div className='flex flex-col gap-[12px]'>
          <h4 className='text-[#175CD3] text-[18px] font-[600] leading-[28px]'>Support</h4>
          <h2 className='text-[#1D2939] text-[48px] font-[600] leading-[60px] tracking-[-0.96px]'>FAQs</h2>
        </div>
        <div>
          <p className='text-[#667085] text-[24px] font-[400] leading-[32px]'>Everything you need to know about the product and billing. Can't find the answer you're looking for? Please <span className='underline'>chat to our friendly team.</span></p>
        </div>
      </div>

      {/* Right half */}
      <div className="max-w-[765px]">
        <div className="flex gap-[24px] p-[32px] active-accordion items-start justify-between">
          <div className='flex flex-col gap-[8px]'>
            <div className="title">
              <h2 className='text-[#101828] text-[20px] font-[600] leading-[30px]'>How many participants can join a ClearLink video conference?</h2>
            </div>
            <div className="supporting-text">
              <p className='text-[#475467] text-[18px] font-[400] leading-[28px]'>ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.</p>
            </div>
          </div>
          <img src={MinusCircle} alt="minus" />
        </div>

        <div className="flex gap-[24px] p-[32px] items-start justify-between">
          <div className='flex flex-col gap-[8px]'>
            <div className="title">
              <h2 className='text-[#101828] text-[20px] font-[600] leading-[30px]'>Can I use ClearLink on multiple devices?</h2>
            </div>
            <div className="supporting-text hidden">
              <p className='text-[#475467] text-[18px] font-[400] leading-[28px]'>ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.</p>
            </div>
          </div>
          <img src={PlusCircle} alt="plus" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="765" height="2" viewBox="0 0 765 2" fill="none">
          <path d="M0 1H765" stroke="#EAECF0"/>
        </svg>
        
        <div className="flex gap-[24px] p-[32px] items-start justify-between">
          <div className='flex flex-col gap-[8px]'>
            <div className="title">
              <h2 className='text-[#101828] text-[20px] font-[600] leading-[30px]'>Is ClearLink compatible with other video conferencing platforms?</h2>
            </div>
            <div className="supporting-text hidden">
              <p className='text-[#475467] text-[18px] font-[400] leading-[28px]'>ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.</p>
            </div>
          </div>
          <img src={PlusCircle} alt="plus" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="765" height="2" viewBox="0 0 765 2" fill="none">
          <path d="M0 1H765" stroke="#EAECF0"/>
        </svg>
        <div className="flex gap-[24px] p-[32px] items-start justify-between">
          <div className='flex flex-col gap-[8px]'>
            <div className="title">
              <h2 className='text-[#101828] text-[20px] font-[600] leading-[30px]'>How does ClearLink ensure the security of my video conferences?</h2>
            </div>
            <div className="supporting-text hidden">
              <p className='text-[#475467] text-[18px] font-[400] leading-[28px]'>ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.</p>
            </div>
          </div>
          <img src={PlusCircle} alt="plus" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="765" height="2" viewBox="0 0 765 2" fill="none">
          <path d="M0 1H765" stroke="#EAECF0"/>
        </svg>

        <div className="flex gap-[24px] p-[32px] items-start justify-between">
          <div className='flex flex-col gap-[8px]'>
            <div className="title">
              <h2 className='text-[#101828] text-[20px] font-[600] leading-[30px]'>Do I need to download any software to use ClearLink?</h2>
            </div>
            <div className="supporting-text hidden">
              <p className='text-[#475467] text-[18px] font-[400] leading-[28px]'>ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.</p>
            </div>
          </div>
          <img src={PlusCircle} alt="plus" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="765" height="2" viewBox="0 0 765 2" fill="none">
          <path d="M0 1H765" stroke="#EAECF0"/>
        </svg>

        <div className="flex gap-[24px] p-[32px] items-start justify-between">
          <div className='flex flex-col gap-[8px]'>
            <div className="title">
              <h2 className='text-[#101828] text-[20px] font-[600] leading-[30px]'>What kind of customer support does ClearLink provide?</h2>
            </div>
            <div className="supporting-text hidden">
              <p className='text-[#475467] text-[18px] font-[400] leading-[28px]'>ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.</p>
            </div>
          </div>
          <img src={PlusCircle} alt="plus" />
        </div>
      </div>
    </div>
  )
}

export default FAQ
