"use client";

import * as React from "react";
import { cn } from "./utils";

type AccordionType = "single" | "multiple";

type AccordionContextValue = {
  openItems: string[];
  toggleItem: (value: string) => void;
  type: AccordionType;
  collapsible?: boolean;
};

const AccordionContext = React.createContext<AccordionContextValue | undefined>(
  undefined
);

function useAccordionContext() {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) {
    throw new Error("Accordion components must be used within <Accordion>");
  }
  return ctx;
}

type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: AccordionType;
  collapsible?: boolean;
  defaultValue?: string | string[];
};

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      className,
      type = "single",
      collapsible,
      defaultValue,
      children,
      ...props
    },
    ref
  ) => {
    const [openItems, setOpenItems] = React.useState<string[]>(() => {
      if (!defaultValue) return [];
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    });

    const toggleItem = (value: string) => {
      setOpenItems((current) => {
        if (type === "single") {
          if (current[0] === value) {
            return collapsible ? [] : current;
          }
          return [value];
        }

        // multiple
        if (current.includes(value)) {
          return current.filter((v) => v !== value);
        }
        return [...current, value];
      });
    };

    return (
      <AccordionContext.Provider
        value={{ openItems, toggleItem, type, collapsible }}
      >
        <div ref={ref} className={cn(className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

type AccordionItemContextValue = { value: string };

const AccordionItemContext = React.createContext<
  AccordionItemContextValue | undefined
>(undefined);

function useAccordionItemContext() {
  const ctx = React.useContext(AccordionItemContext);
  if (!ctx) {
    throw new Error(
      "AccordionTrigger and AccordionContent must be used within <AccordionItem>"
    );
  }
  return ctx;
}

type AccordionItemProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
};

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => {
    return (
      <AccordionItemContext.Provider value={{ value }}>
        <div
          ref={ref}
          className={cn(
            "border-b border-slate-200 last:border-b-0 dark:border-slate-700",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  }
);
AccordionItem.displayName = "AccordionItem";

type AccordionTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ className, children, onClick, ...props }, ref) => {
  const { openItems, toggleItem } = useAccordionContext();
  const { value } = useAccordionItemContext();
  const isOpen = openItems.includes(value);

  return (
    <button
      ref={ref}
      type="button"
      data-state={isOpen ? "open" : "closed"}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left text-sm font-medium text-slate-900 transition-all hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:text-slate-50",
        className
      )}
      onClick={(event) => {
        toggleItem(value);
        onClick?.(event);
      }}
      {...props}
    >
      <span className="flex-1">{children}</span>
      <span className="ml-4 flex h-4 w-4 shrink-0 items-center justify-center rounded-md border border-slate-300 text-[10px] text-slate-500 dark:border-slate-600 dark:text-slate-300">
        {isOpen ? "−" : "+"}
      </span>
    </button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

type AccordionContentProps = React.HTMLAttributes<HTMLDivElement>;

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    const { openItems } = useAccordionContext();
    const { value } = useAccordionItemContext();
    const isOpen = openItems.includes(value);

    return (
      <div
        ref={ref}
        data-state={isOpen ? "open" : "closed"}
        className={cn(
          "grid overflow-hidden text-sm text-slate-600 transition-all duration-250 ease-out dark:text-slate-200",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          className
        )}
        {...props}
      >
        <div className="min-h-0 pb-5 pt-1">{children}</div>
      </div>
    );
  }
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
