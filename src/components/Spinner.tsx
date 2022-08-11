const Spinner: React.FC = () => {
  return (
    <div className="mx-auto w-fit flex font-bold">
      <span className="animate-[jump_1s_ease-in-out_100ms_infinite]">L</span>
      <span className="animate-[jump_1s_ease-in-out_200ms_infinite]">O</span>
      <span className="animate-[jump_1s_ease-in-out_300ms_infinite]">A</span>
      <span className="animate-[jump_1s_ease-in-out_400ms_infinite]">D</span>
      <span className="animate-[jump_1s_ease-in-out_500ms_infinite]">I</span>
      <span className="animate-[jump_1s_ease-in-out_600ms_infinite]">N</span>
      <span className="animate-[jump_1s_ease-in-out_700ms_infinite]">G</span>
    </div>
  );
};

export default Spinner;
