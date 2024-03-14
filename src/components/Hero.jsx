const Hero = () => {
  return (
    <div id="main" className="h-screen pt-[10vh] bg-white1 flex w-full">
      <div className="grid laptop:grid-cols-12 w-full">
        <div className="col-span-9 h-full flex w-full bg-black">
          <div className="laptop:w-[55px] bg-white1 h-[90vh] flex z-10 border-1 border-r-black"></div>
          <div className="h-[90vh] w-full border border-black">
            <video
              className="w-full h-full object-cover"
              src="/video/headphone.mp4"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
        </div>
        <div className="col-span-3 h-[80vh]">
          <div className="w-full  transform-origin-top border two-text-bg border-b-black flex flex-col justify-between min-h-[280px]  p-4 py-6 h-[20vh]">
            <p className="text-sm">We</p>
            <div className="flex justify-between gap-2">
              <p className="text-3xl">
                Enter the Realm of Superior Sound: Welcome to Your Headphone
                Haven Escape
              </p>
            </div>
          </div>
          <div className="w-full  border two-text-bg border-b-black flex flex-col justify-between min-h-[280px] py-6 p-4 h-[20vh]">
            <p className="text-sm">Are</p>
            <div className="flex justify-between gap-2">
              <p className="text-3xl">
                Plunge into the Depths of Crystal Clear Sound: Welcome to Your
                Audio Hideaway
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="moving-text-container overflow-x-hidden bg-white1  border-2 border-black absolute bottom-5 flex items-center w-full h-16 tablet:h-24">
        <div className="">
          <div className="horizontal-scrolling-items text-3xl tablet:text-[4rem]">
            <div className="horizontal-scrolling-items__item uppercase">
              Experience Beyond Sound:{" "}
              <span className="italic">In the Realm of Headphones</span>, I Am a
              World Unto Myself &nbsp;✣ &nbsp;
            </div>

            <div className="horizontal-scrolling-items__item uppercase overflow-x-hidden">
              Experience Beyond Sound:{" "}
              <span className="italic">In the Realm of Headphones</span>, I Am a
              World Unto Myself &nbsp;✣ &nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
