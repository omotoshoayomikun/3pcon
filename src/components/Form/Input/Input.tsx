import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  rows?: number,
  className?: string;
  disabled?: boolean;
  success?: boolean;
  error?: boolean;
  hint?: string; // Optional hint text
  handleChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const Input: FC<InputProps> = ({
  className = "",
  disabled = false,
  success = false,
  error = false,
  hint,
  handleChange,
  ...props
}) => {

  // Determine input styles based on state (disabled, success, error)
  let inputClasses = `h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 ${className}`;

  // Add styles for the different states
  if (disabled) {
    inputClasses += ` text-gray-500 border-gray-300 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700`;
  } else if (error) {
    inputClasses += ` text-error-800 border-error-500 focus:ring-3 focus:ring-error-500/10  dark:text-error-400 dark:border-error-500`;
  } else if (success) {
    inputClasses += ` text-success-500 border-success-400 focus:ring-success-500/10 focus:border-success-300 dark:text-success-400 dark:border-success-500`;
  } else {
    inputClasses += ` bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800`;
  }

  return (
    <div>
      <input
        type="text"
        className={inputClasses}
        placeholder={props.placeholder}
        onChange={handleChange} // Ensure handleChange is used
        {...props}
      />
      {hint && (
        <p
          className={`mt-1.5 text-xs ${error
            ? "text-error-500"
            : success
              ? "text-success-500"
              : "text-gray-500"
            }`}
        >
          {hint}
        </p>
      )}
    </div>
  );
};

export const TextArea: FC<InputProps> = ({
   rows = 5,
  className = "",
  disabled = false,
  success = false,
  error = false,
  hint,
  handleChange, ...props
}) => {

  let textareaClasses = `
    w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs
    focus:outline-hidden focus:ring-3 ${className}`
  if (disabled) {
    textareaClasses += "bg-gray-100 opacity-50 text-gray-500 border-gray-300 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
  } else if (error) {
    textareaClasses += "bg-transparent text-error-600 border-error-500 focus:ring-error-500/10 dark:border-error-500"
  } else if (success) {
    textareaClasses += "bg-transparent text-success-600 border-success-500 focus:ring-success-500/10 dark:border-success-500"

  } else {
    textareaClasses += "bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
  }

  return (
    <div>
      <textarea
        className={textareaClasses}
        placeholder={props.placeholder}
        rows={rows}
        onChange={handleChange} // Ensure handleChange is used
        {...props}
      ></textarea>
      {error && hint && (
        <p className="mt-1 text-xs text-error-500">
          {hint}
        </p>
      )}
    </div>
  );
};
