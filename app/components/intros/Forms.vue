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
        <text x="102"
              y="84"
              fill="var(--content-neutral-regular-default)"
              font-family="sans-serif"
              font-size="13"
              font-weight="600"
              letter-spacing=".1em">Email</text>
        <g transform="translate(100 92)">
            <rect width="196"
                  height="52"
                  rx="10"
                  x="2"
                  y="2"
                  fill="var(--background-neutral-strong-default)"
                  stroke="var(--border-neutral-strong-default)"
                  stroke-width="2" />
            <g transform="translate(16 22)">
                <rect width="60"
                      height="12"
                      rx="2"
                      fill="var(--background-neutral-regular-default)" />
                <path fill="var(--content-primary-regular-default)"
                      d="M64 0h2v12h-2z">
                    <animate attributeName="opacity"
                             values="1;0;1"
                             dur="1s"
                             repeatCount="indefinite" />
                </path>
            </g>
        </g>
    </svg>
</template>