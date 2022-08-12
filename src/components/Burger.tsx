type BurgerProps = {
  onClick: () => void;
  burgerState: boolean;
};

const Burger = (props: BurgerProps) => {
  return (
    <div
      onClick={props.onClick}
      className="lg:hidden relative w-[40px] h-[40px] cursor-pointer overflow-hidden "
    >
      <span
        className={`absolute w-full h-[4px] bg-slate-100 transition ease-in-out ${
          props.burgerState
            ? 'origin-top translate-y-[18px] rotate-45 delay-150'
            : 'origin-center rotate-0'
        } `}
      ></span>
      <span
        className={`absolute translate-y-[18px] w-full h-[4px] bg-slate-100 transition ease-in-out ${
          props.burgerState ? 'translate-x-full' : 'translate-x-0 delay-150'
        } `}
      ></span>
      <span
        className={`absolute bottom-0 w-full h-[4px] bg-slate-100 origin-center transition ease-in-out${
          props.burgerState
            ? 'origin-top -translate-y-[18px] -rotate-45 delay-150'
            : 'origin-center rotate-0'
        } `}
      ></span>
    </div>
  );
};

export default Burger;
