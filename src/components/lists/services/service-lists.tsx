import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { serviceList } from "./services";
import { FaRegCheckCircle } from "react-icons/fa";

export const ServiceList = () => {
  const highlightedServices = serviceList.filter(
    (service) => service.highlight === true
  );
  
  return (
    <Tabs
      defaultValue={highlightedServices[0].label}
      className="mx-auto mb-8 flex flex-col gap-2 items-center w-full bg-[transparent]"
    >
      <TabsList className="bg-[transparent] grid w-fit grid-cols-2 gap-2 md:grid-cols-4">
        {highlightedServices.map((service, index) => (
          <TabsTrigger
            key={`service-${index}`}
            value={service.label}
            className="text-sm bg-background text-foreground-muted border-foreground-muted px-1 flex gap-1 md:text-base rounded-lg w-[220px] border"
          >
            {service.icon && service.icon}
            {service.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {highlightedServices.map((service, index) => (
        <TabsContent
          key={`service-${index}`}
          value={service.label}
          className="rounded-2xl overflow-hidden shadow-lg max-w-[1100px] p-0  border-foreground-muted bg-white"
        >
          <article className="grid gap-8 md:grid-cols-2">
            <section className="flex flex-col items-center p-8 py-12 justify-start">
              <h3 className="mb-2 content-title">{service.title}</h3>
              <p className="mb-4 content-text">{service.description}</p>
              <ul className="flex flex-col gap-2 w-full px-1 mb-4">
                {service.features?.map((feature, index) => (
                  <li key={`feature-${index}`} className="content-text">
                    <FaRegCheckCircle className="inline-block mr-2 text-green-700" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
            <section className="flex bg-[#d9f4ff6e] items-center p-8 py-12 justify-center">
              <ul className="flex border border-foreground-muted w-96 rounded-xl flex-col bg-background">
                {service.advantages?.map((advantage, index) => (
                  <li
                    key={`advantage-${index}`}
                    className={`content-text h-24 flex items-center px-8 gap-4  ${
                      index !== service.advantages.length - 1
                        ? "border-b border-foreground-muted"
                        : ""
                    }`}
                  >
                    <div className=" flex items-center text-primary justify-center text-3xl">
                      {advantage.icon}
                    </div>
                    {advantage.label}
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </TabsContent>
      ))}
    </Tabs>
  );
};
