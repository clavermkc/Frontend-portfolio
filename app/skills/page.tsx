import { SkillCategory } from "@/types";

const skills: SkillCategory[] = [
  {
    id: 1,
    title: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Jakarta EE",
      "Spring Security",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    id: 2,
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React (Basics)",
      "Vue.js (Basics)",
      "JavaFX",
      "JSF / PrimeFaces",
    ],
  },
  {
    id: 3,
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Hibernate",
      "JPA",
      "Database Design",
      "Performance Optimization",
    ],
  },
  {
    id: 4,
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "Git",
      "GitLab CI/CD",
      "Apache Tomcat",
      "WildFly",
      "Linux",
    ],
  },
];

export default function SkillsPage() {
  return (
    
    <section>
      <h1 className="text-2xl mb-6 text-dark-300">  
        Skills
      </h1>
{/* En-tête avec style terminal */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 text-accent font-mono text-sm mb-4">
          <span className="animate-pulse">❯</span>
          <span>skills:~$ cat skills.md</span>
        </div>
    </div>
    
      {/* Grille des compétences */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {skills.map((category) => (
          <div
            key={category.id}
            className="
              border
              border-gray-300
              p-6
              transition
              hover:border-[var(--color-terminal-green)]
              
            "
          >
            <h2 className="text-lg mb-4 text-dark-200  transition-colors duration-300 hover:border-green-500/20 
                    hover:text-green-500"> 
              {category.title}
            </h2>

            <ul className="flex flex-wrap gap-2 ">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="
                    text-xs
                    px-2
                    py-1
                    border
                    border-gray-600
                    text-gray-450
                    transition-colors duration-300 hover:border-green-500/20 
                    hover:text-green-500
                     "

                  
                >
                  {skill}
                </li>
              ))}
            </ul>

            {/* Phase 2 : skills dynamiques depuis backend */}
          </div>
        ))}
      </div>
    </section>
  );
}
