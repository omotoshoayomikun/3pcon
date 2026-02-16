import Image from "next/image";
import styles from "./Button.module.css";
import { CgSpinner } from "react-icons/cg";

interface ButtonProps {
  icon?: string;
  title: string;
  btnStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  handleClick: () => void;
}

export const Button = ({ icon, title, btnStyle, iconStyle, disabled, loading, className, handleClick }: ButtonProps) => {
  return (
    <button className={`${styles.Cus_button} ${className}  flex justify-center items-center`} style={btnStyle} onClick={handleClick} disabled={disabled || loading}>
      {
        loading ? (
          <CgSpinner size={25} className="animate-spin" />
        ) : (
          <>
          {title}
          {
            icon && (
              <div className={`relative w-4 h-4`}  style={iconStyle}>
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
