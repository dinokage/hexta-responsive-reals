import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "./animated-shiny-text";

export function ShinyText() {
  return (
    <div className="z-10 flex items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/10 bg-black/20 px-4 py-1.5 text-sm text-black transition-all ease-in hover:cursor-pointer hover:bg-black/30 dark:border-white/10 dark:bg-white/10 dark:text-black dark:text-white dark:hover:bg-white/20"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center gap-1 text-sm font-medium transition ease-out group-hover:text-black/80 dark:group-hover:text-black dark:text-white/80">
          <span>✨ Get Started with Hextasphere</span>
          <ArrowRightIcon className="size-4 transition-transform duration-200 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  );
}
