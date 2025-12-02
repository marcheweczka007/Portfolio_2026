import React from "react";

export interface TableOfContentsItem {
  id: string;
  label: string;
  subsections?: Array<{
    id: string;
    label: string;
  }>;
}

interface TableOfContentsProps {
  title?: string;
  items: TableOfContentsItem[];
}

export function TableOfContents({
  title = "Table of Contents",
  items,
}: TableOfContentsProps) {
  const handleScrollTo = (id: string) => {
    if (typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="hidden md:block fixed left-6 top-40 z-30 w-46">
      <div className="rounded-2xl bg-white/30 backdrop-blur shadow-md border border-gray-100 px-5 py-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-semibold text-gray-900">{title}</p>
        </div>

        <div className="space-y-7 text-xs text-gray-900 pl-1">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={index > 0 ? "border-t border-gray-100 pt-4" : ""}
            >
              <button
                type="button"
                onClick={() => handleScrollTo(item.id)}
                className="w-full text-left text-xs font-medium text-gray-800 hover:text-orange-600 cursor-pointer"
              >
                {item.label}
              </button>
              {item.subsections && item.subsections.length > 0 && (
                <div className="mt-2 flex">
                  <div className="ml-0.5 mr-3 w-px bg-gray-200" />
                  <div className="space-y-1.5 text-gray-600">
                    {item.subsections.map((subsection) => (
                      <button
                        key={subsection.id}
                        type="button"
                        onClick={() => handleScrollTo(subsection.id)}
                        className="block w-full rounded-lg pl-1.5 pr-2 py-1 text-left font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                      >
                        {subsection.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
