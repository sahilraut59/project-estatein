import Image from "next/image";

const Property = (props) => {
  const { title, description, price, bedroom, bathroom, type, picture } = props;
  return (
    <div className="flex flex-col items-center border max-w-sm text-white p-10 space-y-6 border-gray-600 rounded-lg">
      <Image src={picture} width={300} height={300} />
      <div className="">
      <h1>{title}</h1>
      <p className="flex-wrap text-sm text-gray-400">{description}</p>
      <div className="flex gap-2 text-sm">
        <div className="flex border rounded-2xl p-1 border-gray-600">
          <Image src="/icons/bedroom.svg" width={20} height={20} />
          <span>{bedroom} -Bedroom</span>
        </div>
        <div className="flex border rounded-2xl p-1 border-gray-600">
          <Image src="/icons/bathroom.svg" width={20} height={20} />
          <span>{bathroom} -Bathroom</span>
        </div>
        <div className="flex border rounded-2xl p-1 border-gray-600">
          <Image src="/icons/villa.svg" width={20} height={20} />
          <span>{type}</span>
        </div>
      </div>
      <div className="flex">
        <div>
          <p>Price</p>
          <span>${price}</span>
        </div>
        <div>
          <div className="rounded-lg bg-">
            View Property Details
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Property;
