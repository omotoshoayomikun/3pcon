import Image from "next/image";
import styles from "./Button.module.css";

interface ButtonProps {
  icon?: string;
  title: string;
  btnStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
}

export const Button = ({ icon, title, btnStyle, iconStyle }: ButtonProps) => {
  return (
    <button className={`${styles.Cus_button}`} style={btnStyle}>
      {title}
      {icon && (
        <div className={`relative w-3 h-3`}  style={iconStyle}>
          <Image src={icon} alt={icon} fill />
        </div>
      )}
    </button>
  );
};
