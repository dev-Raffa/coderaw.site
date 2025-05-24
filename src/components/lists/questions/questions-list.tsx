import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { questions } from "./questions"

export const QuestionsList = ()=>{
    return (
      <ul className="w-full">
        <Accordion type="single" collapsible className="w-full">
          {questions.map((question, index) => (
            <li key={index}>
              <AccordionItem value={`item-${index}`} className="w-full ">
                <AccordionTrigger>
                  <span className="sm:hidden font-title content-title text-start">
                    {question.mobile_label}
                  </span>
                  <span className="hidden font-title content-title sm:flex text-start">
                    {question.desktop_label}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-start content-text">
                  {question.content}
                </AccordionContent>
              </AccordionItem>
            </li>
          ))}
        </Accordion>
      </ul>
    );
}