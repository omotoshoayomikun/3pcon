import SharedHero from "@/components/Hero/SharedHero/SharedHero";
import React from "react";

function page() {
  const NavInfo = [
    {
      title: "Service",
      url: "/service",
    },
    {
      title: "Software Development",
      url: "/software-development",
    },
  ];
  return (
    <div className="mt-[var(--fixed-h-value)]">
      <SharedHero value={NavInfo} headerText="Software Develoment" />
      <div className="py-[var(--shared-py)] px-[var(--shared-px)]">
        <p>In today’s fast-paced digital landscape, custom software solutions can be a key differentiator for businesses. At 3PCON, we specialize in providing top-notch software development services that cater to the unique needs of our clients. Our team of experts leverages cutting-edge technologies, agile methodologies, and industry best practices to design, develop, and deploy scalable, secure, and efficient software solutions.</p>
        
      </div>
    </div>
  );
}

export default page;
