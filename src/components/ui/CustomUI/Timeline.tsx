import React from "react";
import { Building2, Briefcase } from "lucide-react";

interface TimelineItem {
  icon: string; // file path
  company: string;
  role: string;
  year: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative ">
      <div className="space-y-2 ">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-2 bg-white-100 p-4 rounded-md"
          >
            {/* icon bubble */}
            <div className="w-12 h-12 rounded-md flex items-center justify-center">
              <img
                src={item.icon}
                alt={item.company}
                className="w-12 h-12 shadow rounded-md object-contain"
              />
            </div>

            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-semibold text-gray-900">{item.company}</h3>
                <span className="text-sm text-gray-500">{item.year}</span>
              </div>
              <p className="text-sm text-gray-600">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
