import { adventures } from "../model/adventureLoader";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      <h1 className="text-4xl mb-8 text-center">Choose Your Adventure</h1>

      <div className="grid gap-6 max-w-xl mx-auto">
        {Object.values(adventures).map(({ meta }) => (
          <Link
            key={meta.id}
            to={`/adventure/${meta.id}`}
            className="bg-purple-600 hover:bg-purple-700 p-6 rounded text-center"
          >
            <h2 className="text-2xl">{meta.title}</h2>
            <p>{meta.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
