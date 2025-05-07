import { cases } from "./cases";
export const CasesList = () => {
    return (
      <ul className="grid gap-8 md:grid-cols-3">
        {cases.map((item, index) => (
          <li
            key={index}
            className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-700"
          >
            <article className="p-6">
              <div className="space-y-3 mb-4">
                <div>
                  <h4 className="font-semibold text-sm text-gray-300">
                    Desafio:
                  </h4>
                  <p className="text-coderaw-text">{item.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-300">
                    Solução:
                  </h4>
                  <p className="text-coderaw-text">{item.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-300">
                    Resultado:
                  </h4>
                  <p className="text-coderaw-text">{item.result}</p>
                </div>
              </div>
              {/*
                  <Button
                  variant="outline"
                >
                  Ver Detalhes
                </Button>
                */}
            </article>
          </li>
        ))}
      </ul>
    );
}