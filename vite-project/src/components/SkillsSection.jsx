import { useState } from "react";
import { cn } from "../lib/utils";


const skills = [
    //frontend
    {name: "HTML/CSS" , level: 50, category: "Frontend"},
    {name: "JavaScript" , level: 40, category: "Frontend"},
    {name: "React" , level: 30, category: "Frontend"},

    //programming language
    {name: "Python" , level: 75, category: "Programming Language"},
    {name: "C" , level: 50, category: "Programming Language"},
    {name: "C++" , level: 50, category: "Programming Language"},
    {name: "Java" , level: 45, category: "Programming Language"},

    //backend
    {name: "SQL" , level: 50, category: "Backend"},
    {name: "Node.js" , level: 0, category: "Backend"},
    {name: "Mongo DB" , level: 20, category: "Backend"},

    //tools
    {name: "VS Code" , level: 30, category: "Tools"},
    {name: "IDLE" , level: 80, category: "Tools"}
];

const categories = ["All","Frontend","Backend","Programming Language","Tools"]

export const SkillsSection = () =>{
    const[activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = skills.filter((skill) => activeCategory==="All" || skill.category === activeCategory);



    return(<section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key)=>(
                    <button key={key} 
                    onClick={()=> setActiveCategory(category)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                    )}>{category}</button>
                ))}

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill,key) =>(
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-2 rounded-4 origin-left animate-[grow_1.5s_ease-out]" 
                        style={{width: skill.level + "%"}}/>
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>

                    </div>

                ))}
            </div>
        </div>

    </section>);
}