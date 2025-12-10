"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion@1.2.3";
import { ChevronDownIcon } from "lucide-react@0.487.0";

import { cn } from "./utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "border border-orange-600/10 rounded-2xl px-6 bg-orange-50/50 hover:bg-orange-100/50 transition-colors",
        className
      )}
      {...props}
    />
  );
}

interface AccordionTriggerProps
  extends Omit<
    React.ComponentProps<typeof AccordionPrimitive.Trigger>,
    "children"
  > {
  icon?: React.ComponentType<{ className?: string }>;
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

function AccordionTrigger({
  className,
  children,
  icon: Icon,
  title,
  ...props
}: AccordionTriggerProps) {
  const content =
    Icon && title ? (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-orange-600" />
        </div>
        <span className="text-xl">{title}</span>
      </div>
    ) : (
      children
    );

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-6 text-left text-sm font-medium transition-all outline-none hover:no-underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 [&>svg]:shrink-0",
          className
        )}
        {...props}
      >
        {content}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-5 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div
        className={cn(
          "text-gray-500 leading-relaxed pb-6 pl-[52px] pt-0",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
