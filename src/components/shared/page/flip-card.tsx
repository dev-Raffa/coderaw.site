"use client";

import { useState } from "react";
import { Linkedin, Twitter, Github } from "lucide-react";
import Image from "next/image";

interface ProfileSocial {
  linkedin: string;
  twitter: string;
  github: string;
}

interface ProfileProps {
  profile: {
    name: string;
    role: string;
    image: string;
    resume: string;
    social: ProfileSocial;
  };
}

export default function FlipCard({ profile }: ProfileProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section
      className="h-[400px] w-full perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Frente do cartão */}
        <div
          className="absolute w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden flex flex-col items-center justify-center"
          style={{ backgroundColor: "hsl(120, 100%, 0.39%)" }}
        >
          <figure className="w-32 h-32 relative rounded-full overflow-hidden mx-auto mb-6">
            <Image
              src={profile.image}
              alt={profile.name}
              fill
              className="object-cover"
            />
          </figure>
          <div className="text-center text-white">
            <h3 className="text-xl font-bold">{profile.name}</h3>
            <p className="text-gray-300">{profile.role}</p>
          </div>
        </div>

        {/* Verso do cartão */}
        <div
          className="absolute w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden rotate-y-180 flex flex-col items-center justify-center p-6"
          style={{ backgroundColor: "hsl(120, 100%, 0.39%)" }}
        >
          <div className="text-center text-white">
            <h3 className="text-xl font-bold mb-4">{profile.name}</h3>
            <p className="text-gray-300 mb-6">{profile.resume}</p>

            <div className="flex justify-center space-x-4">
              <a
                href={`https://${profile.social.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`https://${profile.social.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <Twitter size={24} />
              </a>
              <a
                href={`https://${profile.social.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
