import { ToastPosition, ToastTransitionProps } from "react-toastify";

export interface valueInterface {
  name: string;
  email: string;
  phone: string;
  subject: string;
  company: string;
  message: string;
}

export interface WebinarI {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  source: string;
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

// Add this near your imports
export interface UserFilter {
    createdAt?: { $gte?: Date; $lte?: Date };
    status?: string | null;
    $or?: Array<{ [key: string]: { $regex: string; $options: string } }>;
    eventId?: string | null
}


export interface MailOPtionInterface {
  from: {
    name: string;
    address: string;
  };
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}

export interface SpeakerI {
  name: string;
  title: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

export interface EventI {
  _id?: string;
  title: string;
  date: string;
  description: string;
  image: string;
  speakers: SpeakerI[];
}


export interface IUser {
  _id: string,
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  source: string;
  createdAt: Date;
  updatedAt: Date;
  eventId: { eventId: string, title: string};
}