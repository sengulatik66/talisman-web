import * as React from 'react'
import { Ref, SVGProps, forwardRef } from 'react'
const SvgPieChart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path
      d="M21.21 15.89A10 10 0 1 1 8 2.83"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 12A10 10 0 0 0 12 2v10h10Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPieChart)
export default ForwardRef
