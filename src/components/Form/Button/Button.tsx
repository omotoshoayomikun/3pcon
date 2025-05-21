import Image from "next/image";
import styles from "./Button.module.css";
import { CgSpinner } from "react-icons/cg";

interface ButtonProps {
  icon?: string;
  title: string;
  btnStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
  disabled?: boolean;
  handleClick: () => void;
}

export const Button = ({ icon, title, btnStyle, iconStyle, disabled, handleClick }: ButtonProps) => {
  return (
    <button className={`${styles.Cus_button}`} style={btnStyle} onClick={handleClick} disabled={disabled}>
      {
        disabled ? (
          <CgSpinner size={25} className="animate-spin" />
        ) : (
          <>
          {title}
          {
            icon && (
              <div className={`relative w-3 h-3`}  style={iconStyle}>
                <Image src={icon} alt={icon} fill />
              </div>
            )
          }
          </>
        )
      }
    </button>
  );
};
