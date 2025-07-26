import { Briefcase, Code, User } from "lucide-react";


export const AboutSection =()=>{
    return( 
    <section id="about" class="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About<span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Passionate Web Developer</h3>

                    <p className="text-muted-foreground">
                        I'm an IT undergraduate with a growing passion for full-stack 
                        development. I enjoy creating intuitive user interfaces and 
                        learning how backend systems work to support real-world applications. 
                        My technical journey includes working with tools like React and Node.js, 
                        while also building a solid foundation in data structures, problem-solving, 
                        and database handling.
                    </p>
                    <p className="text-muted-foreground">
                        In addition to my technical growth, I'm someone who thrives in 
                        collaborative environments. I take initiative, communicate clearly, 
                        and enjoy contributing to group goals. Whether it's working on a team project, 
                        mentoring peers, or organizing tasks, I bring a mix of focus, adaptability, and 
                        leadership to every opportunity I take on.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">Get In Touch</a>

                    <a href="/Kishorekumar_H_SASTRA.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a>

                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semi-bold text-lg">Web Development</h4>
                                <p>Creating Responsive Websites And Web Applications With Modern Frameworks.</p>

                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semi-bold text-lg">Soft Skills</h4>
                                <p>Demonstrating Effective Teamwork, Adaptability, Multitasking, 
                                Organizational Excellence, and Quick Learning in Dynamic Environments.</p>

                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semi-bold text-lg">Project Experience</h4>
                                <p>Actively Looking for Real-World Projects to Contribute To, While Building 
                                    Applications Through Self-Initiated Work.</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    );
};