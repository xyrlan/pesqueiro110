import React from 'react'

const FAQItem = ({ question, answer }: any) => {
  return (
    <details className="group [&_summary::-webkit-details-marker]:hidden" open>
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4">
        <h2 className="font-medium">{question}</h2>
        <svg
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <p className="mt-4 px-4 leading-relaxed text-gray-600 text-sm sm:text-base font-medium">
        {answer}
      </p>
    </details>
  )
}

export default FAQItem