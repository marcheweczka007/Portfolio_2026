import React from "react";
import { Check } from "lucide-react";

interface OverviewSectionData {
  overviewTitle: string;
  overviewDescription: string;
  executionTitle?: string;
  executionDescription?: string;
  exectutionBullets?: string[];
  executionEnding?: string;
  overviewYear?: string;
  overviewDuration?: string;
  overviewRole?: string;
  overviewClient?: string;
  detailsTitle?: string;
}

interface OverviewSectionProps {
  data: OverviewSectionData;
  sectionId?: string;
}

export function OverviewSection({ data, sectionId }: OverviewSectionProps) {
  return (
    <div
      className="flex flex-col gap-8 m-4 p-4 sm:p-8 border rounded-xl border-gray-200 pb-10 bg-gray-900 mb-16"
      id={sectionId}
    >
      {/* OVERVIEW DETAILS */}
      <div className="flex flex-col md:flex-row gap-4">
        <h2 className="md:w-40 text-md text-gray-50 uppercase">Detials</h2>
        <div className="flex flex-row gap-4 justify-between flex-1">
          <div className="flex flex-col gap-2">
            <p className="text-md font-bold text-gray-50 leading-7 tracking-wide">
              Role
            </p>
            <p className="flex-1 text-sm text-gray-50 leading-6 ">
              {data.overviewRole}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {" "}
            <p className="text-md font-bold text-gray-50 leading-7 tracking-wide">
              Client
            </p>
            <p className="flex-1 text-sm text-gray-50 leading-6">
              {data.overviewClient}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-md font-bold text-gray-50 leading-7 tracking-wide">
              Duration
            </p>
            <p className="flex-1 text-sm text-gray-50 leading-6 ">
              {data.overviewDuration}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-md font-bold text-gray-50 leading-7 tracking-wide">
              Year
            </p>
            <p className="flex-1 text-sm text-gray-50 leading-6 ">
              {data.overviewYear}
            </p>
          </div>
        </div>
      </div>
      {/* OVERVIEW ROW */}
      <div className="flex flex-col md:flex-row gap-4">
        <h2 className="md:w-40 text-md text-gray-50 uppercase">Overview</h2>
        <p className="flex-1 text-md text-gray-50 leading-6 tracking-wide">
          {data.overviewDescription}
        </p>
      </div>

      {/* EXECUTION ROW */}
      {data.executionTitle && (
        <div className="flex flex-col md:flex-row gap-4">
          <h2 className="md:w-40 text-md text-gray-50 uppercase">Execution</h2>

          <div className="flex-1 flex flex-col gap-3">
            <p className="text-md text-gray-50 leading-6  tracking-wide le">
              {data.executionDescription}
            </p>

            {/* EXECUTION BULLETS */}
            {data.exectutionBullets && (
              <ul className="flex flex-col gap-2 text-md text-gray-50 leading-relaxed">
                {data.exectutionBullets.map((bullet, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 pt-6 border-b border-gray-700 pb-6 text-sm tracking-wide leading-relaxed tracking-wide last:border-b-0 text-gray-200"
                  >
                    <Check className="bg-orange-50/10 rounded-full p-0.5 w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
