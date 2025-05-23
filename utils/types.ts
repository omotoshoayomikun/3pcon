import { ToastPosition, ToastTransitionProps } from "react-toastify";

export interface valueInterface {
  name: string;
  email: string;
  phone: string;
  subject: string;
  company: string;
  message: string;
}

export interface ToastOptionsInterface {
  position: ToastPosition;
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  progress: undefined;
  theme: string;
  transition: ({
    children,
    position,
    preventExitTransition,
    done,
    nodeRef,
    isIn,
    playToast,
  }: ToastTransitionProps) => React.JSX.Element;
}
