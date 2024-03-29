import "./Header.css";
import Logo from "../../assets/Logo.svg";
import ChevronDown from "../../assets/chevron-down.svg";
import AvatarGroup from "../../assets/Avatar-group.png";
import StarIcon from "../../assets/Star-icon.png";
import Avatar1 from "../../assets/avatar1.png";
import Avatar2 from "../../assets/avatar2.png";
import Avatar3 from "../../assets/avatar3.png";
import Avatar4 from "../../assets/avatar4.png";
import Avatar5 from "../../assets/avatar5.png";
import Avatar6 from "../../assets/avatar6.png";
import Microphone from "../../assets/microphone-01.svg";
import VideoRecorder from "../../assets/video-recorder.svg";
import Monitor from "../../assets/monitor-01.svg";
import FaceSmile from "../../assets/face-smile.svg";
import MessageTextCircle from "../../assets/message-text-circle-02.svg";
import Settings from "../../assets/settings-01.svg";

const Header = () => {
  return (
    <div className="header-section flex flex-col justify-between gap-[160px]">
      <nav>
        <div className="navbar flex items-center justify-between px-[32px] py-[16px] rounded-[100px]">
          <div className="company-logo flex gap-[10px] items-center">
            <span>
              <img className="w-full" src={Logo} alt="logo" />
            </span>
            <span className="logo-name">
              ClearLink<span className="text-[#528BFF]">.</span>
            </span>
          </div>
          <div className="nav-links">
            <ul className="flex gap-[40px]">
              <li className="flex items-center gap-[6px] text-[#667085]">
                Products <img src={ChevronDown} alt="down" />
              </li>
              <li className="flex items-center gap-[6px] text-[#667085]">
                Solutions <img src={ChevronDown} alt="down" />
              </li>
              <li className="flex items-center gap-[6px] text-[#667085]">
                Resources <img src={ChevronDown} alt="down" />
              </li>
              <li className="flex items-center gap-[6px] text-[#667085]">
                Pricing
              </li>
            </ul>
          </div>
          <div className="navbar-cta flex items-center gap-[8px]">
            <a
              href="#"
              className="first-action flex px-[24px] py-[14px] justify-center items-center gap-[4px] text-[#101828] text-[16px]"
            >
              Talk to sales
            </a>
            <a
              href="#"
              className="second-action flex px-[24px] py-[14px] justify-center items-center gap-[4px] text-white text-[16px]"
            >
              Sign up for free
            </a>
          </div>
        </div>
      </nav>
      <div className="header-main-div flex justify-between items-center gap-10">
        <div className="header-left">
          <div className="top-div flex flex-col gap-[24px]">
            <div className="h2">
              <h2 className="text-[#1D2939] text-[64px] font-[600]">
                Uniting the world, one video call at a time
              </h2>
            </div>
            <div>
              <p className="text-[#667085] text-[24px] font-[400] leading-[32px]">
                Experience the future of communication with ClearLink - where
                crystal-clear video conferencing meets unparalleled simplicity.
              </p>
            </div>
          </div>
          <div>
            <div className="py-[48px] flex items-center gap-[20px]">
              <div className="start-free-trial flex justify-center items-center gap-[4px] px-[28px] py-[16px] rounded-[100px] w-fit">
                <a
                  href="#"
                  className="text-white text-[18px] font-[600] leading-[28px] "
                >
                  Start your free trial
                </a>
              </div>
              <div className="flex items-center gap-[12px]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.1055 17.6575C8.76002 17.6577 7.43547 17.6614 6.11095 17.6564C5.47166 17.6539 4.86812 17.5139 4.33152 17.1442C3.56328 16.6149 3.1295 15.8887 3.01862 14.962C2.98114 14.6487 2.98557 14.3361 2.9854 14.0229C2.98426 11.9455 2.98132 9.86803 2.98696 7.79061C2.98861 7.18278 3.10842 6.59638 3.44286 6.07724C4.00969 5.19735 4.81402 4.7024 5.86857 4.66996C6.59988 4.64746 7.3324 4.66509 8.06436 4.66158C8.37757 4.66007 8.69079 4.64438 9.00392 4.64687C9.16937 4.64819 9.21907 4.58029 9.21748 4.42086C9.21123 3.79351 9.21225 3.16604 9.21683 2.53866C9.22016 2.08074 9.41713 1.79826 9.79065 1.69539C10.222 1.57659 10.6529 1.83664 10.7401 2.27488C10.7644 2.39692 10.7766 2.52325 10.7775 2.64773C10.7815 3.21934 10.7867 3.79113 10.7759 4.36257C10.7721 4.5633 10.8208 4.64292 11.0404 4.64935C12.0371 4.67855 13.0339 4.64759 14.0305 4.66481C15.3009 4.68677 16.3239 5.39256 16.7939 6.57418C16.9078 6.8604 16.9722 7.16209 16.98 7.47025C17.0425 9.92362 16.991 12.3772 16.9749 14.8305C16.9655 16.2594 15.7609 17.4917 14.3283 17.6274C14.0915 17.6499 13.8558 17.6582 13.6189 17.6582C12.4547 17.6579 11.2906 17.6577 10.1055 17.6575ZM5.9568 6.19883C5.14196 6.2578 4.57094 6.84104 4.55079 7.65542C4.53752 8.19189 4.54735 8.72893 4.54714 9.26571C4.54645 11.0225 4.54339 12.7793 4.54633 14.5361C4.54787 15.4585 5.12845 16.0893 6.01632 16.0928C8.6654 16.103 11.3146 16.1029 13.9637 16.0922C14.8449 16.0887 15.4486 15.4533 15.4496 14.5693C15.4523 12.2966 15.4527 10.024 15.4494 7.75129C15.4481 6.82437 14.8263 6.19857 13.9013 6.1974C11.2661 6.19406 8.63096 6.19708 5.9568 6.19883Z"
                      fill="#175CD3"
                    />
                    <path
                      d="M2.04289 9.95243C2.04291 11.4377 2.04309 12.9021 2.04278 14.3664C2.04272 14.6527 2.04173 14.6475 1.75323 14.6545C1.45013 14.6619 1.15185 14.6394 0.875652 14.5071C0.309544 14.2357 0.0295195 13.7576 0.0148384 13.1526C-0.00951087 12.149 0.00137854 11.1444 0.0104841 10.1403C0.0179942 9.31216 0.675786 8.66164 1.50414 8.6418C2.04325 8.62889 2.04324 8.62889 2.04305 9.15749C2.04296 9.4155 2.04294 9.67351 2.04289 9.95243Z"
                      fill="#175CD3"
                    />
                    <path
                      d="M17.9575 12.2538C17.9576 11.118 17.9613 10.0031 17.9541 8.88828C17.9529 8.70082 18.0042 8.63469 18.1997 8.63601C18.5028 8.63805 18.7995 8.65676 19.0785 8.78072C19.676 9.04614 19.9738 9.52847 19.9869 10.1637C20.0073 11.1527 20.0016 12.1426 19.9897 13.1319C19.9791 14.0027 19.3085 14.6507 18.4321 14.651C17.8764 14.6512 17.9634 14.7273 17.9589 14.1769C17.9537 13.5429 17.9576 12.9088 17.9575 12.2538Z"
                      fill="#175CD3"
                    />
                    <path
                      d="M7.18438 10.8826C6.3083 10.6563 5.95707 9.6044 6.4995 8.87649C6.86571 8.38506 7.54175 8.25072 8.11796 8.53851C8.61748 8.788 8.88208 9.44913 8.71366 10.0269C8.54706 10.5984 7.98613 10.9754 7.38663 10.9173C7.32447 10.9113 7.26311 10.8969 7.18438 10.8826Z"
                      fill="#175CD3"
                    />
                    <path
                      d="M13.7153 9.94558C13.513 10.8954 12.3155 11.2594 11.5976 10.5617C11.2151 10.19 11.121 9.56177 11.3775 9.03618C11.5806 8.61988 12.1592 8.329 12.6447 8.39911C13.2114 8.48095 13.6178 8.87092 13.7227 9.41299C13.7567 9.58869 13.757 9.75676 13.7153 9.94558Z"
                      fill="#175CD3"
                    />
                    <path
                      d="M7.8998 14.4796C7.77567 14.6078 7.63491 14.6534 7.47486 14.6527C7.15519 14.6514 6.83545 14.656 6.51585 14.6512C6.18533 14.6462 5.99046 14.4496 5.9922 14.1338C5.9939 13.8244 6.19505 13.6275 6.52577 13.6222C6.83147 13.6174 7.13734 13.6183 7.44307 13.6221C7.95291 13.6284 8.17162 14.0268 7.8998 14.4796Z"
                      fill="#175CD3"
                    />
                    <path
                      d="M9.77294 14.6531C9.65486 14.6525 9.55709 14.6565 9.45998 14.6503C9.17661 14.6322 8.98073 14.4296 8.97101 14.1498C8.96179 13.8845 9.16262 13.6401 9.43681 13.6281C9.80504 13.612 10.1753 13.6106 10.5433 13.6301C10.8481 13.6463 11.008 13.8553 10.9992 14.1683C10.9912 14.4517 10.8016 14.6412 10.5037 14.6505C10.2672 14.6579 10.0303 14.6527 9.77294 14.6531Z"
                      fill="#175CD3"
                    />
                    <path
                      d="M13.8357 13.7487C14.0108 13.9437 14.0597 14.1501 13.9485 14.3764C13.8386 14.6 13.6396 14.6576 13.4073 14.6539C13.1076 14.6491 12.8078 14.6555 12.5081 14.6514C12.1741 14.6469 11.975 14.4517 11.9756 14.1381C11.9762 13.8311 12.1822 13.6279 12.5105 13.6224C12.8241 13.6171 13.1379 13.6217 13.4516 13.6217C13.5878 13.6217 13.7139 13.6529 13.8357 13.7487Z"
                      fill="#175CD3"
                    />
                  </svg>
                </span>
                <span className="text-[#175CD3] text-[18px] font-[600] leading-[28px]">Discover AI assistant</span>
              </div>
            </div>

            <div className="flex items-center gap-[16px]">
              <div><img src={AvatarGroup} alt="" /></div>
              <div>
                <div className="flex items-center gap-[8px]">
                  <div className="flex">
                    <span><img src={StarIcon} alt="star"/></span>
                    <span><img src={StarIcon} alt="star"/></span>
                    <span><img src={StarIcon} alt="star"/></span>
                    <span><img src={StarIcon} alt="star"/></span>
                    <span><img src={StarIcon} alt="star"/></span>
                  </div>
                  <div>
                    <span className="text-[#344054] text-[16px] font-[600] leading-[24px]">5.0</span>
                  </div>
                </div>
                <div>
                  <p className="text-[#475467] text-[16px] font-[500] leading-[24px]">from 3,000+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-right">
          <div className="flex p-[32px] flex-col justify-center items-center gap-[40px]">
            <div className="flex flex-col justify-center items-center gap-[20px]">
              <div className="flex justify-center items-center gap-[20px]">
                <div className="bg-[#FF9C66] rounded-[12px] min-w-[160px]"><img src={Avatar1} alt="" /></div>
                <div className="bg-[#D6BBFB] rounded-[12px] min-w-[160px]"><img src={Avatar2} alt="" /></div>
                <div className="bg-[#ACDC79] rounded-[12px] min-w-[160px]"><img src={Avatar3} alt="" /></div>
              </div>
              <div className="flex justify-center items-center gap-[20px]">
                <div className="bg-[#B3B8DB] rounded-[12px] min-w-[160px]"><img src={Avatar4} alt="" /></div>
                <div className="bg-[#FEC84B] rounded-[12px] min-w-[160px]"><img src={Avatar5} alt="" /></div>
                <div className="bg-[#FEA3B4] rounded-[12px] min-w-[160px]"><img src={Avatar6} alt="" /></div>
              </div>
            </div>
            <div>
              <div className="flex gap-[16px]">
                <div className="icons-border flex justify-center items-center p-[12px]"><img src={Microphone} alt="" /></div>
                <div className="icons-border flex justify-center items-center p-[12px]"><img src={VideoRecorder} alt="" /></div>
                <div className="icons-border flex justify-center items-center p-[12px]"><img src={Monitor} alt="" /></div>
                <div className="icons-border flex justify-center items-center p-[12px]"><img src={FaceSmile} alt="" /></div>
                <div className="icons-border flex justify-center items-center p-[12px]"><img src={MessageTextCircle} alt="" /></div>
                <div className="icons-border flex justify-center items-center p-[12px]"><img src={Settings} alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
