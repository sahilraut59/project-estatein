import Property from "../Property";
import { propertyList } from "@/constants/property-list";
import Image from "next/image";


const DiscoverProperty = () => {
    return(
        <div className="flex flex-col pl-40 max-w-full bg-[#1A1A1A]">
           <div className="p-28">
            <h1 className="text-3xl text-white mb-6">Discover a World of Possibilities</h1>
            <div>
                <p className="text-gray-400">
                Our portfolio of properties is as diverse as your dreams. 
                Explore the following categories to find the perfect property that resonates with your vision of home  
                </p>
            </div>
           </div>
           <div className="flex justify-center space-x-20">
            {propertyList.map((property) => (
                <Property
                    title={property.title}
                    description={property.description}
                    price={property.price}
                    bedroom={property.bedroom}
                    bathroom={property.bathroom}
                    type={property.type}
                    picture={property.picture}
                />
            ))}
            </div>
        </div>
    )
}

export default DiscoverProperty;