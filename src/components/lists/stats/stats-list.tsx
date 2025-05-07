import { stats } from "./stats";

export const StatsList = ()=>{
    return (
      <ul className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <li key={index} className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-300">{stat.label}</div>
          </li>
        ))}
      </ul>
    );
}