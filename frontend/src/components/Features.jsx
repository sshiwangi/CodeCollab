import React from 'react'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Fueling Collaboration',
    description:
      'Step into the beating heart of our coding universe! Here, we have curated a vibrant space where developers converge, breathing life into a kaleidoscope of skills and ideas. Real-time collaboration is not merely a feature; it is the rhythm that fuels our existence.',
    icon: CloudArrowUpIcon,
  },
  {
    name: ' Innovate Together',
    description:
      'Innovation knows no bounds when minds collide. With a powerful integrated code editor, version control, and project management tools, we empower you to innovate without limits. Your code is the canvas, and the possibilities are endless.',
    icon: LockClosedIcon,
  },
  {
    name: 'Connect, Communicate, Create:',
    description:
      'Seamlessly connect with fellow coders, communicate in real-time, and create something extraordinary. Discussion boards, chat rooms, and project-specific forums are the stages for your coding symphony.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Project Management',
    description:
      'Efficient project management is critical for successful collaboration. This feature ensures clarity in project goals, roles, and responsibilities, promoting a structured and organized development process.',
    icon: ArrowPathIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32" id='features'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Build faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Where lines of code transform into symphonies of innovation!
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join us on this coding odyssey where every line of code is a step toward innovation, collaboration, and the limitless possibilities of tomorrow.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
