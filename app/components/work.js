import React from "react";

const experinces = [
  {
    title: "Full Stack Developer",
    company: "Creative Solutions Ltd.",
    duration: "2024 - Present",
    description:
      "Leading the development of a customer relationship management (CRM) system using Next.js and TypeScript. Collaborating with cross-functional teams to design and implement scalable solutions, improving user engagement by 30%.",
  },

  {
    title: "Frontend Engr. Intern",
    company: "Guru Innovation hub",
    duration: "2023 - August 2023",
    description:
      "Contributed to the development of a real-time data analytics dashboard using React and Node.js. Implemented new features and optimized existing code, resulting in a 20% improvement in performance.",
  },
];

export default function Work() {
  return (
    <div className="flex flex-col items-start mt-30 ">
      <div className=" max-w-3xl mx-auto px-6">
        <h1 className="text-2xl font-[satoshi-bold] mb-10 tracking-tight">
          Work Experience
        </h1>
        <div className="flex flex-col gap-8 mb-8 w-full">
          {experinces.map((experience, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 max-sm:gap-2 w-full"
            >
              {/* Duration */}
              <p className="text-sm sm:text-md font-[satoshi-bold] text-neutral-400/90 tracking-tight shrink-0">
                {experience.duration}
              </p>

              {/* Role + Company (always together) */}
              <div className="flex items-center flex-wrap gap-2">
                <h1 className="text-[1rem] sm:text-[1.1rem] font-[satoshi-medium] text-neutral-500 tracking-tight">
                  {experience.title} at
                </h1>

                <div className="cursor-pointer text-[0.9rem] sm:text-[1rem] font-[satoshi-bold] px-3 py-1.5 border tracking-tight bg-blue-100 border-blue-200 text-blue-500 rounded-lg">
                  {experience.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
