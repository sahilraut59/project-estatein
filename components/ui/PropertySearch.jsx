import Image from "next/image";


const PropertySearch = () => {
    return(
        <section className="">
            <div className="">
                <div className="flex justify-center">
                    <div className="flex flex-col justify-center p-2 gap-10">
                        <h1 className="text-white text-5xl">Find Your Property</h1>
                        <p className="text-gray-400">
                        Welcome to Estatein, where your dream property awaits in every corner of our beautiful world.
                        Explore our curated selection of properties, each offering a unique story and a chance to redefine your life.
                        With categories to suit every dreamer, your journey 
                        </p>
                    </div>
                </div> 
                {/*SearchBar*/}
                <div className="flex justify-center ">
                    <div className="flex justify-between rounded-lg border-gray-700 border p-2 w-2/3 bg-[#1A1A1A] ">
                        <input className="text-white rounded-lg w-96 outline-none bg-transparent"
                        placeholder="Search For A Property"
                        />
                        <div className="flex gap-2 text-white rounded-lg  p-3 bg-[#703BF7]">
                            <Image src="/icons/glassIcon.svg"height={22} width={22} />
                            <button>Find Property</button>
                        </div>
                    </div>
                </div>
                {/*DropDown Menus*/}
                <div className="flex justify-center gap-10 p-5">
                    <div className="bg-[#1A1A1A] rounded-lg flex border border-gray-700 p-3">
                        <Image src="/icons/location.svg"height={22} width={22} />
                        <select className="text-white rounded-lg  outline-none bg-transparent p-2" >
                            <option disabled selected hidden>Location</option>
                        </select>
                    </div>
                    <div className="bg-[#1A1A1A] rounded-lg flex  border border-gray-700 p-3">
                        <Image src="/icons/building.svg"height={22} width={22} />
                        <select className="text-white rounded-lg  outline-none bg-transparent p-2" >
                            <option disabled selected hidden className="flex">Property Type</option>
                        </select>
                    </div>
                    <div className="bg-[#1A1A1A] rounded-lg flex  border border-gray-700 p-3">
                        <Image src="/icons/priceCam.svg"height={22} width={22} />
                        <select className="text-white rounded-lg  outline-none bg-transparent p-2" >
                            <option disabled selected hidden className="flex">Pricing Range</option>
                        </select>
                    </div>
                    <div className="bg-[#1A1A1A] rounded-lg flex  border border-gray-700 p-3">
                        <Image src="/icons/boxsize.svg"height={22} width={22} />
                        <select className="text-white rounded-lg  outline-none bg-transparent p-2" >
                            <option disabled selected hidden className="flex">Property Size</option>
                        </select>
                    </div>
                    <div className="bg-[#1A1A1A] rounded-lg flex  border border-gray-700 p-3">
                        <Image src="/icons/calander.svg"height={22} width={22} />
                        <select className="text-white rounded-lg  outline-none bg-transparent p-2" >
                            <option disabled selected hidden className="flex">Build year</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropertySearch;