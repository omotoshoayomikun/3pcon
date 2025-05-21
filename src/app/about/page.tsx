
import { Metadata } from "next";
import About from "@/components/About/About";


export const metadata: Metadata = {
  title: "About" 
}

function Page() {

  return (
   <About />
  );
}

export default Page;
