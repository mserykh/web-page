import { useEffect } from 'react';

type ModalProps = {
  name: string | null;
  isOpen: boolean;
  handleClose: (event: React.MouseEvent) => void;
};

const Modal = (props: ModalProps) => {
  if (!props.name) {
    return <div></div>;
  }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-opacity-60 bg-dark z-20">
      <div
        className={`fixed bg-lime-400 max-w-3/4 w-1/2 py-6 px-6 lg:px-12 lg:py-12 rounded-2xl text-dark top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition duration-1000${
          props.isOpen ? ' left-1/2' : ' left-0 opacity-0'
        }`}
      >
        <p className="mb-8">Hey, {props.name}!</p>
        <p className="mb-8">You have subscribed to IT news!</p>
        <button
          className="border-dark hover:border-orange-50 hover:text-orange-50"
          onClick={props.handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
