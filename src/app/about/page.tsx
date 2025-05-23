
import { Metadata } from "next";
import About from "@/components/About/About";


export const metadata: Metadata = {
  title: "About",
  description: `We recognize the pivotal role of technology in shaping the future of
  products and services. With a strong focus on customer success, we
  deliver tailored solutions that align with each organization's
  unique goals. By maintaining high professional standards and a
  customer-centric approach, we help businesses achieve both their
  operational and strategic objectives.`
}

function Page() {

  return (
   <About />
  );
}

export default Page;
