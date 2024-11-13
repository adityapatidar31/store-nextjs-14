type PropType = {
  children: React.ReactNode;
  className?: string;
};

import { cn } from "@/lib/utils";

function Container({ children, className }: PropType) {
  return (
    <div className={cn("mx-auto max-w-6xl xl:max-w-7xl px-8", className)}>
      {children}
    </div>
  );
}

export default Container;
