import Shopify from "../../assets/social-proofs/Shopify.svg"
import Coinbase from "../../assets/social-proofs/Coinbase.svg"
import Dropbox from "../../assets/social-proofs/Dropbox.svg"
import Intercom from "../../assets/social-proofs/Intercom.svg"
import Marvel from "../../assets/social-proofs/Marvel.svg"
import Automattic from "../../assets/social-proofs/Automattic.svg"


const SocialProof = () => {
  return (
    <div className='flex flex-col px-[32px] gap-[48px]'>
      <div className="text-center">
        <p className="text-[#475467] text-[20px] font-[500] leading-[30px]">Join 1,500+ companies already video conferencing the ClearLink way</p>
      </div>
      <div className="flex items-center gap-[69px]  ">
        <span><img src={Shopify} alt="shopify" /></span>
        <span><img src={Coinbase} alt="coinbase" /></span>
        <span><img src={Dropbox} alt="Dropbox" /></span>
        <span><img src={Intercom} alt="Intercom" /></span>
        <span><img src={Marvel} alt="Marvel" /></span>
        <span><img src={Automattic} alt="Automattic" /></span>
      </div>
    </div>
  )
}

export default SocialProof
