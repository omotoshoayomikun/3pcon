import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  handleChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const Input: FC<InputProps> = ({ handleChange, ...props }) => {
  return (
    <div>
      <input
        type="text"
        className="w-full px-5 py-3 border-[1px] border-solid border-[rgba(0, 0, 0, 0.6)] rounded-2xl"
        placeholder={props.placeholder}
        onChange={handleChange} // Ensure handleChange is used
        {...props}
      />
    </div>
  );
};

export const TextArea: FC<InputProps> = ({ handleChange, ...props }) => {
    return (
        <div>
            <textarea
                className="w-full px-5 py-4 border-[1px] border-solid border-[rgba(0, 0, 0, 0.6)] rounded-2xl resize-y h-[150px]"
                placeholder={props.placeholder}
                onChange={handleChange} // Ensure handleChange is used
                {...props}
            ></textarea>
        </div>
    );
};
