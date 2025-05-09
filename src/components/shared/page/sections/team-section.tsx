import { teamProfiles } from "@/components/lists/team/team-profiles";
import FlipCard from "../flip-card";
import SlideUpCard from "../slide-up-card";
import SlideDownCard from "../slide-down-card";
import GridPattern from "@/components/magic-ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function TeamSection() {
  return (
    <section className="w-full mx-auto" data-aos="fade-up">
      <h1 className="text-3xl font-bold text-center mb-12 text-white"></h1>
      <ul className="grid relative grid-cols-1 md:grid-cols-3 gap-8">
        <li>
          <FlipCard profile={teamProfiles[0]} />
        </li>

        <li>
          <SlideUpCard profile={teamProfiles[1]} />
        </li>

        <li>
          <SlideDownCard profile={teamProfiles[2]} />
        </li>

        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "[mask-image:linear-gradient(to_bottom,transparent_0%,white_50%,transparent_100%)]"
          )}
        />
      </ul>
    </section>
  );
}
