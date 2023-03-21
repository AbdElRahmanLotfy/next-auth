import Navigation from "./navigation";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <main className={inter.className}>{props.children}</main>
    </>
  );
};

export default Layout;
