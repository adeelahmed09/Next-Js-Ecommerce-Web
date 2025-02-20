import "./globals.css";
import Nav from "./components/nav";

import ImgProvider from "./components/imageuploader/ImgProvider";



export const metadata = {
  title: "New Zone",
  description: "Welcome to New Zone, your go-to destination for high-quality products at unbeatable prices. We offer a seamless shopping experience with a wide range of items, from the latest trends to everyday essentials. With secure payments, fast delivery, and a user-friendly interface, we make online shopping easy and enjoyable. Shop with confidence and discover great deals today",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Nav/>
        <ImgProvider childern={children}/>
        
      </body>
    </html>
  );
}
