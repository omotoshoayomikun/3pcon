import ContactUs from "@/components/ContactUs/ContactUs";
import Hero from "@/components/Hero/Hero";
import OurSolutions from "@/components/OurSolutions/OurSolution";
import OurValues from "@/components/OurValues/OurValues";
import Trust from "@/components/Trust/Trust";
import { Metadata } from "next";

export const metadata: Metadata = {
  description: "Welcome to 3PCON! A dynamic tech and digital startup with the vision of helping businesses and government organisations become more agile and nimble, responding to the fast-changing environment and customer needs, through the intelligent application of tech and digital for pacesetting advantage & sustained prosperity.",
}

export default function Home() {
  return (
  <>
  <Hero />
  <OurSolutions />
  <Trust />
  <OurValues />
  <ContactUs />
  </>
  );
}
