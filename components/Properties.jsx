import Property from "./Property";
import { propertyList } from "@/constants/property-list";

const Properties = () => {
  return (
    <div className="flex flex-col pl-40 max-w-full">
      <div className=" p-28">
        <h1 className="text-3xl text-white mb-6">Featured Properties</h1>
        <div className=" flex justify-between">
          <p className="text-gray-400">
            Explorte our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and <br />{" "}
            investments available through Estafein. Click "View Details for more
            information.
          </p>
          <div className="text-white border rounded-xl flex items-center p-2 border-gray-600">View All Properties</div>
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
  );
};

export default Properties;
