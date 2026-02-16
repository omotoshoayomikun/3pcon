"use client";
// import { EyeCloseIcon, EyeIcon } from "@/icons";
import React, { useState } from "react";
import { z } from "zod";
import { Input } from "@/components/Form/Input/Input";
import Label from "@/components/Form/Label";
import { Button } from "@/components/Form/Button/Button";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { PostApi } from "../../../../utils/Action";

// 1. Define the Login Schema
const loginSchema = z.object({
  username: z.string().min(5, "Username must be at least 5 characters"),
  password: z.string().min(5, "Password must be at least 5 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function SignInForm() {
  const router = useRouter();
  // const { loginUser, loading } = useAppContext();

  const [showPassword, setShowPassword] = useState(false);
  // const [isChecked, setIsChecked] = useState(false);

  const [formData, setFormData] = useState<LoginForm>({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false)

  // 2. Error State
  const [errors, setErrors] = useState<Partial<Record<keyof LoginForm, string>>>({});

  // 3. Field Validation Logic
  const validateField = (field: keyof LoginForm, value: string) => {
    const fieldSchema = loginSchema.pick({ [field]: true } as Record<keyof LoginForm, true>);
    const result = fieldSchema.safeParse({ [field]: value });
    return result.success ? undefined : result.error.issues[0].message;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof LoginForm;

    setFormData((prev) => ({ ...prev, [fieldName]: value }));

    // Instant error feedback
    const errorMessage = validateField(fieldName, value);
    setErrors((prev) => ({ ...prev, [fieldName]: errorMessage }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Final Validation check
    const result = loginSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof LoginForm, string>> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof LoginForm;
        fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fix the errors in the form");
      return;
    }

    // Call Context login
    try {
      setLoading(true)
      const value = { username: formData.username, password: formData.password }
      const response = await PostApi('api/auth/signin', value);

      if (response.success) {
        toast.success(response.message)
        router.push("/admin/dashboard")

      } else {
        toast.error(response.message)
      }
    } finally {
      setLoading(false)
    }

  };

  return (

    <div className="relative p-6 py-0 bg-white z-1 dark:bg-gray-900 sm:p-0">
      {/* <ThemeProvider> */}
      <div className="relative flex lg:flex-row w-full h-screen justify-center flex-col  dark:bg-gray-900 sm:p-0">
        <div className="flex flex-col flex-1 lg:w-1/2 w-full">
          <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
            <div>
              <div className="lg:hidden flex justify-center">
                <Link href="/" className="block mb-4">
                  <Image
                    width={190}
                    height={40}
                    src="/images/logoFull.png"
                    alt="Logo"
                    objectFit="contain"
                  />
                </Link>
              </div>

              <div className="mb-5 sm:mb-8  text-center lg:text-left">
                <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
                  Sign In
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enter your email and password to sign in!
                </p>
              </div>

              <div>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    {/* USERNAME */}
                    <div>
                      <Label>
                        Username <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        name="username"
                        placeholder="info@gmail.com"
                        type="text"
                        value={formData.username}
                        onChange={handleChange}
                        error={!!errors.username}
                        hint={errors.username}
                      />
                    </div>

                    {/* PASSWORD */}
                    <div>
                      <Label>
                        Password <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleChange}
                          error={!!errors.password}
                          hint={errors.password}
                        />
                        <span
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-[22px]"
                        >
                          {showPassword ? (
                            <FiEyeOff className="text-gray-400" />
                          ) : (
                            <FiEye className="text-gray-400" />
                          )}
                        </span>
                      </div>
                    </div>

                    {/* <div className="flex items-center justify-between"> */}
                    {/* <div className="flex items-center gap-3">
                    <Checkbox checked={isChecked} onChange={setIsChecked} />
                    <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                      Keep me logged in
                    </span>
                  </div> */}
                    {/* <Link
                    href="/reset-password"
                    className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                  >
                    Forgot password?
                  </Link> */}
                    {/* </div> */}

                    <div>
                      <Button
                        className="w-full"
                        // className="w-full" 
                        handleClick={() => { }}
                        // size="sm" 
                        loading={loading}
                        title="Sign in"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full h-full bg-gray-900 dark:bg-white/5 lg:grid items-center hidden">
          <div className="relative items-center justify-center  flex z-1">
            {/* <!-- ===== Common Grid Shape Start ===== --> */}
            {/* <GridShape /> */}
            <div className="flex flex-col items-center max-w-xs">
              <Link href="/" className="block mb-4">
                <Image
                  width={231}
                  height={48}
                  src="/images/logoFull.png"
                  alt="Logo"
                />
              </Link>
              <p className="text-center text-gray-400 dark:text-white/60">
                3pcon IT Company
              </p>
            </div>
          </div>
        </div>
        <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
          {/* <ThemeTogglerTwo /> */}
        </div>
      </div>
      {/* </ThemeProvider> */}
    </div>

  );
}