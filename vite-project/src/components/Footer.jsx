import { ArrowUp } from "lucide-react";

export const Footer = () =>{
    return( 
    <footer className="py-4 px-4 bg-card relative border-t border-border mt-12 pt-2 flex flex-wrap justify-between items-center">
        <p className="text-sm text-muted-foreground"> &copy; {new Date().getFullYear()} Kishore Kumar H, All rights reserved</p>
        <a href="#hero" className="rounded-full p-2 bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
            <ArrowUp className="h-5 w-5"/>
        </a>
        </footer>
    );
}