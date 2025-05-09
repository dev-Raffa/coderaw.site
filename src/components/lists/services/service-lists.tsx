import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { serviceList } from "./services-list"

export const ServiceLists = () => {
    return (
      <ul role="list" className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pt-[16px]">
        {serviceList.map((service, index) => (
          <li key={index}>
            <Card className="h-full blur-xs w-full bg-transparent border-2 border-primary  shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-lg  dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-base font-title font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul role="list" className="list-disc marker:primary pl-5">
                  {service.description.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    );
}