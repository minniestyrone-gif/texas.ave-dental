import { type SVGProps } from 'react';

export function ToothIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M7 21C7 21 4 21 4 18C4 15 6 13 7 11C8 9 10 8 10 5C10 2 14 2 14 5C14 8 16 9 17 11C18 13 20 15 20 18C20 21 17 21 17 21L12 19.5L7 21Z" />
    </svg>
  );
}
