<template>
      <svg width="400"
           height="240"
           viewBox="0 0 400 240"
           fill="none"
           xmlns="http://www.w3.org/2000/svg">
            <defs>
                  <pattern id="a"
                           x="0"
                           y="0"
                           width="20"
                           height="20"
                           patternUnits="userSpaceOnUse">
                        <circle cx="1"
                                cy="1"
                                r="1"
                                fill="var(--border-neutral-regular-default)" />
                  </pattern>
            </defs>
            <path fill="url(#a)"
                  d="M0 0h400v240H0z" />
            <g stroke="var(--border-neutral-regular-default)"
               stroke-dasharray="4 4">
                  <path d="M100 20v200M300 20v200" />
                  <path d="M20 92h360M20 148h360" />
            </g>
            <g transform="translate(100 92)">
                  <rect y="2"
                        x="2"
                        width="196"
                        height="52"
                        rx="10"
                        fill="var(--background-neutral-weak-default)" />
                  <text x="100"
                        y="35"
                        fill="white"
                        font-family="inherit"
                        font-size="20"
                        font-weight="600"
                        letter-spacing=".1em"
                        text-anchor="middle">Submit</text>
            </g>
      </svg>
</template>
