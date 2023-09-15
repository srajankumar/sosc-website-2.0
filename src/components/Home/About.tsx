import Image from "next/image";
const About = () => {
  return (
    <div className="flex justify-center items-center my-5 py-5 m-[5%]">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <div className="md:w-1/2">
          <h1 className="font-montserratB text-4xl md:text-5xl my-5">About</h1>
          <p className="font-montserratR text-xl">
            SOSC is a conglomeration of clubs and individuals who contribute to
            the community by helping us conduct events and activities. there are
            numerous clubs and experts who help shape the community to be
            pro-active. Mozilla Campus Clubs, Developer Students clubs, and the
            GitHub Campus Expert are to name a few.
          </p>
        </div>
        <div className="md:pl-10 md:pr-0 px-20 md:py-0 py-20 flex items-center justify-center md:w-1/2">
          <Image
            className="lg:p-20 md:px-10 sm:p-10"
            width={500}
            height={500}
            src="/assets/home/rocket.png"
            alt="about-image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
