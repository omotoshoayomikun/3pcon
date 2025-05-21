"use client"

import React, { useState } from "react";
import { Input, TextArea } from "../Form/Input/Input";
import { Button } from "../Form/Button/Button";
import styles from "./ContactUs.module.css"
import Image from "next/image";
import { valueInterface } from "../../../utils/types";
import { SendMessage } from "../../../utils/Action";


function ContactUs() {
  const [value, setValue] = useState<valueInterface>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false)

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

  const handleSendMessage = async() => {
    try {
      setLoading(true)
      const response = await SendMessage(`api/send-message`, value)
      console.log(response)
    } catch (err:unknown) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

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
      <div className="flex-1 w-full">
        <div className="special-text mb-2">CONTACT US</div>
        <h2 className=" text-heading">
          We are here to partner with you
        </h2>
        <p className="mb-10">
          schedule your business planning appointment today.
        </p>
        <div>
          <div className="grid grid-cols-2 md:gap-5 gap-3">
            {InputDetail.map((input, index) => (
              <Input
                key={index}
                {...input}
                value={value[input.name] || ""} // Ensure controlled component
                handleChange={handleChange}
              />
            ))}
          </div>
          <div className="md:mt-5 mt-3">
          <TextArea placeholder="Message" name="message" value={value.message} handleChange={handleChange} />
          </div>
          <div className="md:mt-5 mt-3">
            <Button title="Send Message"  icon={"/images/arrow.svg"} btnStyle={{width: "100%", justifyContent: "center"}} disabled={loading} handleClick={handleSendMessage} />
          </div>
        </div>
      </div>
      <div className="flex-1 align-middle">
        <div className={styles.image_container}>
          <Image src="/images/solution/lady2.png" alt="" fill objectFit="contain" />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
