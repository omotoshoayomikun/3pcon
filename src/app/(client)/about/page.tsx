import { Metadata } from "next";
import About from "@/components/About/About";

export const metadata: Metadata = {
  title: "About",
  description: `3PCON IT Company is a dynamic tech and digital startup committed to helping businesses and government organizations stay agile and responsive in a fast-changing world. Through the intelligent application of technology and digital solutions, we drive innovation, efficiency, and sustained growth. Our expertise spans consultancy, advisory services, and capability development, empowering organizations to navigate challenges and seize new opportunities.`,
};

function Page() {
  return <About />;
}

export default Page;
