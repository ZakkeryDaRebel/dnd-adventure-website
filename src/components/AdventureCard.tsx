interface Props {
  title: string;
  description: string;
}

export default function Card(props: Props) {
  return (
    <div className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition duration-700 p-4 md:p-5">
      <h3 className="text-lg font-bold text-gray-800">{props.title}</h3>
      <p className="mt-1 text-gray-500">{props.description}</p>
    </div>
  );
}
