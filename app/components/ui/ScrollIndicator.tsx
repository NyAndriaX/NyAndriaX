"use client";

import { scrollToSection } from "../../lib/utils";

/**
 * ScrollIndicator component
 * Displays a downward arrow indicating scrollable content
 * Responsive design with adaptive sizing
 */
export default function ScrollIndicator() {
  const handleScrollDown = () => {
    scrollToSection("expertise");
  };

  return (
    <button
      onClick={handleScrollDown}
      className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
      aria-label="Scroll down"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72 72"
        width="72"
        height="72"
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
        style={{ width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)" }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <clipPath id="__lottie_element_2">
            <rect width="72" height="72" x="0" y="0"></rect>
          </clipPath>
        </defs>
        <g clipPath="url(#__lottie_element_2)">
          <g style={{ display: "none" }} transform="matrix(1,0,0,1,36,36)" opacity="1">
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity="0"
              strokeMiterlimit="4"
              stroke="rgb(207,207,207)"
              strokeOpacity="1"
              strokeWidth="2"
              d=" M18.323999404907227,4.427999973297119 C18.323999404907227,4.427999973297119 18.28700065612793,14.213000297546387 18.28700065612793,14.213000297546387 C18.28700065612793,24.312999725341797 10.100000381469727,32.5 0,32.5 C0,32.5 0,32.5 0,32.5 C-10.100000381469727,32.5 -18.28700065612793,24.312999725341797 -18.28700065612793,14.213000297546387 C-18.28700065612793,14.213000297546387 -18.28700065612793,-14.213000297546387 -18.28700065612793,-14.213000297546387 C-18.28700065612793,-24.312999725341797 -10.100000381469727,-32.5 0,-32.5 C0,-32.5 0,-32.5 0,-32.5 C10.100000381469727,-32.5 18.28700065612793,-24.312999725341797 18.28700065612793,-14.213000297546387 C18.28700065612793,-14.213000297546387 18.28700065612793,7.375999927520752 18.28700065612793,7.375999927520752"
            ></path>
          </g>
          <g style={{ display: "block" }} transform="matrix(1,0,0,1,36,36)" opacity="1">
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity="0"
              strokeMiterlimit="4"
              stroke="rgb(207,207,207)"
              strokeOpacity="1"
              strokeWidth="2"
              d="M0 0"
            ></path>
          </g>
          <g style={{ display: "none" }} transform="matrix(1,0,0,1,36,36)" opacity="1">
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity="0"
              strokeMiterlimit="4"
              stroke="rgb(155,55,255)"
              strokeOpacity="1"
              strokeWidth="2"
              d="M0 0"
            ></path>
          </g>
          <g style={{ display: "block" }} transform="matrix(1,0,0,1,36,36)" opacity="1">
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity="0"
              strokeMiterlimit="4"
              stroke="rgb(155,55,255)"
              strokeOpacity="1"
              strokeWidth="2"
              d="M0 0"
            ></path>
          </g>
          <g style={{ display: "block" }} transform="matrix(1,0,0,1,36,51)" opacity="1">
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity="0"
              strokeMiterlimit="4"
              stroke="rgb(155,55,255)"
              strokeOpacity="1"
              strokeWidth="2"
              d="M0 0"
            ></path>
          </g>
          <g style={{ display: "block" }} transform="matrix(1,0,0,1,54,59.25)" opacity="1">
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity="0"
              strokeMiterlimit="4"
              stroke="rgb(155,55,255)"
              strokeOpacity="1"
              strokeWidth="2"
              d="M0 0"
            ></path>
          </g>
        </g>
      </svg>
    </button>
  );
}

