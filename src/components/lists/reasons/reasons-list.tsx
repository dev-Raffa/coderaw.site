import { reasons } from "./reasons"

export const ReasonsList = ()=>{
    return (
      <ul className="grid gap-6 sm:grid-cols-2">
        {reasons.map((reason, index) => (
          <li key={index} className="flex gap-4">
            <div className="flex-shrink-0 mt-1">{reason.icon}</div>
            <article>
              <h3 className="font-bold mb-1 text-coderaw-text">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {reason.description}
              </p>
            </article>
          </li>
        ))}
      </ul>
    );
}