import type { Metadata } from "next";
import { Urbanist, Inter, } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const urbanist = Urbanist({
//   variable: "--font-geist-urbanist",
//   subsets: ["latin"],
// });

const geistInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const urbanist = Urbanist({ 
  subsets: ["latin"], 
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"], 
  variable: "--font-urbanist" // Add this!
});

export const metadata: Metadata = {
  title: {
    default: "3PCON IT COMPANY",
    template: "%s - 3PCON IT Company"
  },
  description: "Welcome to 3PCON! A dynamic tech and digital startup with the vision of helping businesses and government organisations become more agile and nimble, responding to the fast-changing environment and customer needs, through the intelligent application of tech and digital for pacesetting advantage & sustained prosperity.",
  twitter: {
    card: "summary_large_image"
  },
  keywords: ["3pcon", "application development", "software engineering", "full-stack development", "backend development", "frontend development", "Data", "Data and Automation", "Agile", "Digital Transformation", "Consultancy", "Advisory", "Innovation Management", "IT Workforce", "Workforce", "IT Service", "artificial intelligence", "machine learning", "network security", "Google Cloud", "cloud computing", "iOS development", "Android development", "cross-platform apps", "React Native", "Flutter", "IT company", "IT company in Nigeria", "IT company in lagos", "Best Tech company in Nigeria", "Tech Company"],
  metadataBase: new URL("https://3pcon.com"),
  openGraph: {
    images: "/opengraph-image.png"
  }
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} antialiased`}
        className={`${urbanist.className} ${urbanist.variable} ${geistInter.variable} antialiased`}
      >
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
        <Toaster containerStyle={{
          zIndex: 99999
        }} />
      </body>
    </html>
  );
}
