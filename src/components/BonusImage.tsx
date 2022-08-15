import desktop from '../assets/images/desktop.png';
import mouse from '../assets/images/mouse.png';
import image from '../assets/images/image.png';
import colors from '../assets/images/colors.png';
import popup from '../assets/images/popup.png';
import message from '../assets/images/message.png';

const BonusImage = () => {
  return (
    <div className="w-[32rem] max-w-full">
      <div className="w-full grid place-items-center">
        <div className="relative h-full w-full desktop-wrapper">
          <div>
            <img src={desktop} className="desktop" alt="" />
          </div>
          <div className="select-none w-[16%] absolute right-0 bottom-0 mouse">
            <img className="block w-full" src={mouse} alt="" />
          </div>
          <div className="select-none w-[9%] absolute right-[30%] top-[44%] image">
            <img className="block w-full" src={image} alt="" />
          </div>
          <div className="select-none w-[22%] absolute left-[38%] top-[25%] colors">
            <img className="block w-full" src={colors} alt="" />
          </div>
          <div className="select-none w-[20%] absolute right-[19%] top-[25%] popup">
            <img className="block w-full" src={popup} alt="" />
          </div>
          <div className="select-none w-[19%] absolute left-[11%] bottom-[40%] message">
            <img className="block w-full" src={message} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusImage;
