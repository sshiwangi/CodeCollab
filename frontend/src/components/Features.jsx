import React from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Project Creation",
    description:
      "Seamlessly bring your ideas to life by initiating an unlimited number of projects. Collaborate effortlessly with fellow enthusiasts, turning every brainstorm into a masterpiece.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Discussion Board",
    description:
      "Engage in insightful discussions with the Discussion Board feature. Share ideas, seek advice, and brainstorm with your team effortlessly. Fuel creativity and foster collaboration in an interactive space designed to inspire innovation.",
    icon: LockClosedIcon,
  },
  {
    name: "WhiteBoard",
    description:
      "Unleash your creativity with the Whiteboard feature Collaborate in real-time, sketch out ideas, and visualize concepts with ease. Whether it's brainstorming sessions or project planning, transform your virtual workspace into a dynamic canvas for innovation.",
    icon: ArrowPathIcon,
  },
  {
    name: "Chat",
    description:
      "Stay connected seamlessly with our chat feature, where you can engage in one-on-one conversations or group chats effortlessly. Whether it's quick messages or in-depth discussions, our platform keeps you connected with your team members anytime, anywhere.",
    icon: FingerPrintIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Build faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Where lines of code transform into symphonies of innovation!
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join us on this coding odyssey where every line of code is a step
            toward innovation, collaboration, and the limitless possibilities of
            tomorrow.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
