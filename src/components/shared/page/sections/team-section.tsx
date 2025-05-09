import { teamProfiles } from "@/components/lists/team/team-profiles";
import FlipCard from "../flip-card";
import GridPattern from "@/components/magic-ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function TeamSection() {
  return (
    <section className="w-full mx-auto" data-aos="fade-up">
      <h1 className="text-3xl font-bold text-center mb-12 text-white"></h1>
      <ul className="grid relative grid-cols-1 md:grid-cols-3 gap-8">
        {teamProfiles.map((profile) => (
          <li key={profile.name}>
            <FlipCard profile={profile} />
          </li>
        ))}
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "[mask-image:linear-gradient(to_bottom,transparent_0%,white_50%,transparent_90%)]"
          )}
        />
      </ul>
    </section>
  );
}
