import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#1A1A1A]">
      <div className="">
        {/* upper */} 
        <div className="flex justify-end">
          <div className=" flex flex-col justify-center p-2 gap-10 ">
            <div className="">
              <h1 className="text-white  text-5xl">Discover Your Dream</h1>
              <h1 className="text-white text-5xl">Property with Estatein</h1>
              <p className=" text-gray-400">
                Your journey to finding the perfect property bnegins
                here.Explore our listings to find the home that matches your
                dreams.
              </p>
            </div>
            <div className="flex gap-8 text-white">
              <button className="rounded-lg border border-gray-700 p-3">Learn More</button>
              <button className="rounded-lg  p-3 bg-[#703BF7]">Browse Properties</button>
            </div>
            <div className="flex justify-start gap-4">
              <div className="border border-gray-700 p-6 rounded-lg bg-[#262626]">
                <h1 className="text-white text-2xl">200+</h1>
                <p className=" text-gray-400">Happy Customers</p>
              </div>
              <div className="border border-gray-700 p-6 rounded-lg bg-[#262626]">
                <h1 className="text-white text-2xl">10k+</h1>
                <p className=" text-gray-400">Properties for clients</p>
              </div>
              <div className="border border-gray-700 p-6 rounded-lg bg-[#262626]">
                <h1 className="text-white text-2xl">16+</h1>
                <p className=" text-gray-400">Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="">
            <Image src="/icons/building.png" width={700} height={700} />
          </div>
        </div>
        {/* lower */}
        <div className="flex text-white justify-evenly p-4">
            <div className="flex flex-col justify-center items-center bg-[#262626] rounded-lg p-8 border border-gray-700  gap-2">
                <Image src="/icons/Hug.svg" height={32} width={32} />
                <p>Find Your Dream Home</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-[#262626] rounded-lg p-8 border border-gray-700 gap-2">
                <Image src="/icons/camera.svg" height={32} width={32} />
                <p>Unlock Property Value</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-[#262626] rounded-lg p-8 border border-gray-700 gap-2">
                <Image src="/icons/home.svg" height={32} width={32} />
                <p>Effortless Property Management</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-[#262626] rounded-lg p-8 border border-gray-700 gap-2">
                <Image src="/icons/bulb.svg" height={32} width={32} />
                <p>Smart Investments, Informed Decisions</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
