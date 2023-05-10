type IdentProps = {
  title: string;
  location: string;
};

export default function Ident({ title, location }: IdentProps) {
  return (
    <>
      <h2 className="text-lg md:text-4xl color ">{title}</h2>
      <h3 className="text-md md:text-lg ">{location}</h3>
    </>
  );
}
