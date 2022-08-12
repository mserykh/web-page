import desktop from '../assets/images/desktop.png';
import mouse from '../assets/images/mouse.png';
import image from '../assets/images/image.png';
import colors from '../assets/images/colors.png';
import popup from '../assets/images/popup.png';
import message from '../assets/images/message.png';

const BonusImage = () => {
  return (
    <div className="w-[32rem] h-[32rem]">
      <div className="w-full grid place-items-center">
        <div className="relative h-full w-full desktop-wrapper">
          <div>
            <img src={desktop} className="desktop" alt="" />
          </div>
          <div className="select-none w-fit h-fit absolute right-0 bottom-0 mouse">
            <img className="" src={mouse} alt="" />
          </div>
          <div className="select-none absolute left-[20rem] bottom-[15rem] image">
            <img className="" src={image} alt="" />
          </div>
          <div className="select-none absolute left-[13rem] top-[8rem] colors">
            <img className="" src={colors} alt="" />
          </div>
          <div className="select-none absolute left-[20rem] top-[8rem] popup">
            <img className="" src={popup} alt="" />
          </div>
          <div className="select-none absolute left-[3.25rem] top-[15rem] message">
            <img className="" src={message} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusImage;
