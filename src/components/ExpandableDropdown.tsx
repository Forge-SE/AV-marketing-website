"use client";

import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { siteContent } from "@/content/siteContent";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string;
  image: string;
  features: string[];
}

const ExpandableDropdown: React.FC = () => {
  const services: ServiceItem[] = siteContent.services.items as unknown as ServiceItem[];

  // Set the first item as default active
  const [activeItem, setActiveItem] = useState<string>(services[0].id);

  const toggleItem = (itemId: string) => {
    setActiveItem(itemId);
  };

  // Get the currently active service for the image display
  const activeService = services.find((service) => service.id === activeItem);

  return (
    <div className="w-full">
      {/* Mobile-first layout */}
      <div className="space-y-8">
        {/* Image Display - Top on mobile, side on desktop */}
        <div className="lg:hidden">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {activeService && (
              <>
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    className="object-cover transition-all duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1 drop-shadow-lg">
                      {activeService.title}
                    </h3>
                    <p className="text-white/90 text-sm drop-shadow">
                      {activeService.description}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Desktop layout - side by side */}
        <div className="hidden lg:flex gap-8">
          {/* Dropdown Items Container */}
          <div className="flex-1 space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-200"
              >
                {/* Clickable Header */}
                <button
                  onClick={() => toggleItem(service.id)}
                  className={`w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between group ${
                    activeItem === service.id
                      ? "bg-orange-50 border-l-4 border-l-orange-500"
                      : ""
                  }`}
                >
                  <div className="flex-grow">
                    <h3
                      className={`text-xl font-semibold mb-1 group-hover:text-orange-600 transition-colors ${
                        activeItem === service.id
                          ? "text-orange-600"
                          : "text-gray-900"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>

                  <div className="ml-4 flex-shrink-0">
                    {activeItem === service.id ? (
                      <ChevronDownIcon className="w-5 h-5 text-orange-600 transition-colors" />
                    ) : (
                      <ChevronRightIcon className="w-5 h-5 text-gray-500 group-hover:text-orange-600 transition-colors" />
                    )}
                  </div>
                </button>

                {/* Expandable Content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeItem === service.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 bg-orange-50 border-t border-orange-200">
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        {service.details}
                      </p>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Key Focus Areas:
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-orange-500 mr-3 mt-1 flex-shrink-0 font-bold">
                                •
                              </span>
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Image Display */}
          <div className="flex-1 max-w-md">
            <div className="sticky top-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {activeService && (
                  <>
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={activeService.image}
                        alt={activeService.title}
                        fill
                        className="object-cover transition-all duration-500 ease-in-out hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg mb-1 drop-shadow-lg">
                          {activeService.title}
                        </h3>
                        <p className="text-white/90 text-sm drop-shadow">
                          {activeService.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-900">
                          Current Focus
                        </h4>
                        <span className="text-orange-600 text-sm font-medium px-3 py-1 bg-orange-100 rounded-full">
                          Active
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {activeService.details.substring(0, 120)}...
                      </p>

                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Key Focus Areas</span>
                          <span className="font-semibold text-gray-900">
                            {activeService.features.length} Areas
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Items */}
        <div className="lg:hidden space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => toggleItem(service.id)}
                className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between group ${
                  activeItem === service.id
                    ? "bg-orange-50 border-l-4 border-l-orange-500"
                    : ""
                }`}
              >
                <div className="flex-grow">
                  <h3
                    className={`text-lg font-semibold mb-1 group-hover:text-orange-600 transition-colors ${
                      activeItem === service.id
                        ? "text-orange-600"
                        : "text-gray-900"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

                <div className="ml-4 flex-shrink-0">
                  {activeItem === service.id ? (
                    <ChevronDownIcon className="w-5 h-5 text-orange-600" />
                  ) : (
                    <ChevronRightIcon className="w-5 h-5 text-gray-500 group-hover:text-orange-600" />
                  )}
                </div>
              </button>

              {activeItem === service.id && (
                <div className="p-4 bg-orange-50 border-t border-orange-200">
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    {service.details}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                      Key Focus Areas:
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <span className="text-orange-500 mr-2 mt-0.5 flex-shrink-0">
                            •
                          </span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpandableDropdown;
