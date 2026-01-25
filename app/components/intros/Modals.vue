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
                  <path d="M80 20v200M320 20v200" />
                  <path d="M20 40h360M20 200h360" />
            </g>
            <rect y="0"
                  x="0"
                  width="100%"
                  height="100%"
                  fill="var(--alpha-black-10)" />
            <g transform="translate(80 40)">
                  <rect width="240"
                        height="160"
                        rx="12"
                        fill="var(--background-neutral-strong-default)"
                        stroke="var(--border-neutral-strong-default)"
                        stroke-width="2" />
                  <path stroke="var(--border-neutral-regular-default)"
                        d="M0 40h240" />
                  <text x="16"
                        y="26"
                        fill="var(--content-neutral-regular-default)"
                        font-family="sans-serif"
                        font-size="10"
                        font-weight="600"
                        letter-spacing=".05em">Apply changes?</text>
                  <rect x="212"
                        y="12"
                        width="16"
                        height="16"
                        rx="4"
                        stroke="var(--border-neutral-regular-default)"
                        stroke-width="1.5" />
                  <path d="m216 16 8 8m0-8-8 8"
                        stroke="var(--border-neutral-regular-default)"
                        stroke-width="1.5" />
                  <g transform="translate(16 60)"
                     fill="var(--background-neutral-regular-default)">
                        <rect width="208"
                              height="8"
                              rx="4" />
                        <rect y="16"
                              width="160"
                              height="8"
                              rx="4" />
                        <rect y="32"
                              width="180"
                              height="8"
                              rx="4" />
                  </g>
                  <g transform="translate(144 120)">
                        <text x="-15"
                              y="18"
                              fill="var(--content-neutral-regular-default)"
                              font-family="sans-serif"
                              font-size="9"
                              font-weight="600"
                              text-anchor="end">Cancel</text>
                        <rect width="80"
                              height="28"
                              rx="6"
                              fill="var(--background-neutral-regular-default)" />
                        <text x="40"
                              y="18"
                              fill="var(--content-neutral-regular-default)"
                              font-family="sans-serif"
                              font-size="9"
                              font-weight="600"
                              text-anchor="middle">Save</text>
                  </g>
            </g>
      </svg>
</template>
