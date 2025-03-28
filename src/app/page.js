import Fotter from "@/components/constants/fotter";
import Navbar from "@/components/constants/navbar";
import Experience from "@/components/Home/experience";
import Info from "@/components/Home/Info";
import Projects from "@/components/Home/projects";

const Page = () => {
  return (
    <>
      <Navbar />
      <Info />
      <Projects count={2} />
      <Experience count={2} />
      <Fotter />
    </>
  );
};

export default Page;
