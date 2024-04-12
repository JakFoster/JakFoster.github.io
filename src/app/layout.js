import "./globals.css";
import CustomHead from "./components/CustomHead";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CustomHead 
      title="Jak Foster Portfolio" 
      description="Hello World! I'm a junior developer looking to break into my first role in tech! This portfolio showcases some of my abilities, passions, and motivations." 
      author="Jak Foster" 
      />
      <body className="body">
        <Header className="" />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}