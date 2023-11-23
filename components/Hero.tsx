import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-[100vh] w-[100%] ">
      <div
        className="min-h-[100vh] min-w-[100%] relative flex items-center justify-center overflow-none
      snap-start"
      >
        <Image
          src="/hero.png"
          fill
          alt="hero"
          className="absolute left-0 top-0 object-cover"
        />
        <div className="absolute left-0 top-0 bg-black/70 min-h-[100vh] min-w-[100%] " />
        <div className="z-10 flex w-[80%]">
          <div className="w-[660px]">
            <h1 className="text-yellow text-[32px] md:text-[64px] font-bold ">
              Gulfview Executive Homes
            </h1>
            <p className="text-white text[24px] md:text-[32px]">
              Discover the heart of Davao City living at Gulfview Executive
              Homes, a vibrant community nestled in the picturesque landscape of
              the Philippines. Our homeowners association, GVEHAI, is dedicated
              to creating a sense of belonging and community
            </p>
          </div>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
