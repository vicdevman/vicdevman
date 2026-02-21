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
    title: "Software Engineer Intern",
    company: "Aura",
    duration: "2023 - August 2023",
    description:
      "Contributed to the development of a real-time data analytics dashboard using React and Node.js. Implemented new features and optimized existing code, resulting in a 20% improvement in performance.",
  },
];

export default function Work() {
  return (
    <div className="flex flex-col items-start mt-30 ">
      <div className=" max-w-3xl mx-auto px-6">
        <h1 className="text-2xl font-[satoshi-bold] mb-2 tracking-tight">
          Work Experience
        </h1>
        <div className=" flex flex-col gap-10 mb-8 items-between justify-between w-full mt-16 ">
          {experinces.map((experience, index) => (
            <div
              key={index}
              className="flex flex-wrap gap-10 max-sm:gap-4 justify-between max-w-lg w-full"
            >
              <p className="text-md whitespace-nowrap font-[satoshi-bold] flex-1 text-neutral-400/90 tracking-tight">
                {experience.duration}
              </p>

              <div className="-mt-1 flex gap-2 items-center flex-wrap justify-start flex-1">
                <h1 className="text-[1.1rem] whitespace-nowrap font-[satoshi-medium] text-neutral-500 mb-2 tracking-tight">
                  {experience.title} at
                </h1>

                <div className="-mt-1 flex cursor-pointer items-center whitespace-nowrap  text-[1rem] font-[satoshi-bold] p-1.5 px-3 border tracking-tight bg-blue-100 border-blue-200 text-blue-500 rounded-xl">
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
