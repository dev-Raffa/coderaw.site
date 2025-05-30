import { stats } from "./stats";

export const StatsList = ()=>{
    return (
      <ul className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <li key={index} className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {stat.value}
            </div>
            <div className="text-muted-foreground">{stat.label}</div>
          </li>
        ))}
      </ul>
    );
}