import { reasons } from "./reasons"

export const ReasonsList = ()=>{
    return (
      <ul className="grid justify-between gap-6 sm:grid-cols-2 mb-6">
        {reasons.map((reason, index) => (
          <li key={index} className="flex gap-6">
            <div className="content-title flex-shrink-0 mt-1">
              {reason.icon}
            </div>
            <article className="w-[70%]">
              <h3 className="content-title">{reason.title}</h3>
              <p className="content-text">{reason.description}</p>
            </article>
          </li>
        ))}
      </ul>
    );
}