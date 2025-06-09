"use client";

import React, { useState } from "react";
import { Input, TextArea } from "../Form/Input/Input";
import { Button } from "../Form/Button/Button";
import styles from "./ContactUs.module.css";
import Image from "next/image";
import { ToastOptionsInterface, valueInterface } from "../../../utils/types";
import { SendMessage } from "../../../utils/Action";
import { Bounce, toast } from "react-toastify";
import Link from "next/link";

function ContactUs() {
  const [value, setValue] = useState<valueInterface>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const ToastOptions: ToastOptionsInterface = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  };

  // const [err, setError] = useState({
  //   name: false,
  //   email: false,
  //   phone: false,
  //   subject: false,
  //   message: false,
  // })

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSendMessage = async () => {
    // Basic validation
    const requiredFields: (keyof valueInterface)[] = [
      "name",
      "email",
      "phone",
      "subject",
      "message",
    ];
    const emptyFields = requiredFields.filter((field) => !value[field].trim());

    if (emptyFields.length > 0) {
      toast.error("Please fill in all required fields", ToastOptions);
      return;
    }

    try {
      setLoading(true);
      const response = await SendMessage(`api/send-message`, value);
      if (response.success) {
        toast.success("🖂 Message sent successfully", ToastOptions);
      } else {
        toast.error(
          "An Error occur!!! Please re-send the message",
          ToastOptions
        );
      }
      console.log(response);
    } catch (err: unknown) {
      console.log(err);
      toast.error(
        "🖂 An Error occur!!! Please re-send the message",
        ToastOptions
      );
    } finally {
      setLoading(false);
    }
  };

  const InputDetail: Array<{
    label: string;
    name: keyof typeof value;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }> = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Your Name*",
      value: value.name,
      onChange: handleChange,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Your E-mail*",
      value: value.email,
      onChange: handleChange,
    },
    {
      label: "Phone",
      name: "phone",
      type: "tel",
      placeholder: "Phone*",
      value: value.phone,
      onChange: handleChange,
    },
    {
      label: "Company",
      name: "company",
      type: "tel",
      placeholder: "Your Company Name (Optional)*",
      value: value.phone,
      onChange: handleChange,
    },
    {
      label: "Subject",
      name: "subject",
      type: "text",
      placeholder: "Subject*",
      value: value.subject,
      onChange: handleChange,
    },
  ];

  return (
    <section className={styles.contact_container}>
      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <h2 className="text-heading mb-6 text-[#09224E]">Let&apos;s Connect</h2>
        </div>
        <p className="mb-6">
          Whether you&apos;re exploring digital solutions or need expert advice,
          3PCON is just a call or click away. We&apos;d love to hear from you.
        </p>
        <div className="flex items-center mb-6">
          <Image
            src="/images/phone.svg"
            alt=""
            width={40}
            height={40}
            objectFit="contain"
          />
          <Link href="tel:+2349060000278" className="text-[18px] font-bold mr-2 cursor-pointer text-[#09224E]">
            +234(0)9060000278,{" "}
          </Link>
          <Link href="tel:+2349083511770" className="text-[18px] font-bold cursor-pointer text-[#09224E]">
            {" "}
            +234(0)9083511770
          </Link>
        </div>
        <div className="flex items-center gap-2 mb-8">
          <Image
            src="/images/fly.svg"
            alt=""
            width={30}
            height={30}
            objectFit="contain"
          />
          <Link
            href="mailto:3PCONtech@gmail.com"
            className="text-[18px] font-bold cursor-pointer text-[#09224E]"
          >
            3pcontech@gmail.com
          </Link>
        </div>

        <div className="flex gap-2">
          <Link href="https://www.linkedin.com/company/94791400/admin/dashboard/" className=" cursor-pointer" target="_blank">
            <Image
              src="/images/linkedin.svg"
              alt=""
              width={30}
              height={30}
              objectFit="contain"
            />
          </Link>
          <Link href="" className=" cursor-pointer" target="_blank">
            <Image
              src="/images/twitter.svg"
              alt=""
              width={30}
              height={30}
              objectFit="contain"
            />
          </Link>
          <Link href="" className=" cursor-pointer"  target="_blank">
            <Image
              src="/images/facebook.svg"
              alt=""
              width={30}
              height={30}
              objectFit="contain"
            />
          </Link>
          <Link href="https://www.instagram.com/3pcon_tech/?igsh=MWlycmhqaDAxaXFuaA%3D%3D#" className=" cursor-pointer" target="_blank">
            <Image
              src="/images/insta.svg"
              alt=""
              width={30}
              height={30}
              objectFit="contain"
            />
          </Link>
        </div>
      </div>

      <div className={`${styles.form_container}`}>
        <div className="special-text mb-2">CONTACT US</div>
        <h2 className=" font-bold text-[1.5rem] md:text-[1.9rem]">We are here to partner with you</h2>
        <p className="mb-6">
          schedule your business planning appointment today.
        </p>
        <div>
          <div className="grid grid-cols-2 md:gap-3 gap-2">
            {InputDetail.map((input, index) => (
              <Input
                key={index}
                {...input}
                value={value[input.name] || ""} // Ensure controlled component
                handleChange={handleChange}
              />
            )).slice(0, 4)}
          </div>
          <div className="md:mt-3 mt-2">
            <Input
              {...InputDetail[4]}
              value={value.subject || ""} // Ensure controlled component
              handleChange={handleChange}
            />
          </div>
          <div className="md:mt-3 mt-2">
            <TextArea
              placeholder="Message"
              name="message"
              value={value.message}
              handleChange={handleChange}
            />
          </div>
          <div className="md:mt-3 mt-2">
            <Button
              title="Send Message"
              icon={"/images/arrow.svg"}
              btnStyle={{ width: "100%", justifyContent: "center" }}
              disabled={loading}
              handleClick={handleSendMessage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
