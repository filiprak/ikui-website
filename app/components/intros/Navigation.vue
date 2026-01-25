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
            <path d="M120 20v200" />
            <path opacity=".3"
                  d="M20 120h360" />
        </g>
        <g transform="translate(30 30)">
            <rect width="80"
                  height="180"
                  rx="6"
                  fill="var(--background-neutral-strong-default)"
                  stroke="var(--border-neutral-strong-default)"
                  stroke-width="2" />
            <rect x="12"
                  y="12"
                  width="16"
                  height="16"
                  rx="4"
                  fill="var(--background-neutral-weak-default)" />
            <g transform="translate(10 48)">
                <rect x="0"
                      y="8"
                      width="44"
                      height="8"
                      rx="4"
                      fill="var(--background-neutral-regular-default)" />
                <rect x="0"
                      y="24"
                      width="44"
                      height="8"
                      rx="4"
                      fill="var(--background-neutral-regular-default)" />
                <rect x="0"
                      y="40"
                      width="44"
                      height="8"
                      rx="4"
                      fill="var(--background-neutral-regular-default)" />
                <rect x="0"
                      y="56"
                      width="44"
                      height="8"
                      rx="4"
                      fill="var(--background-neutral-regular-default)" />
            </g>
            <circle cx="20"
                    cy="164"
                    r="8"
                    fill="var(--background-neutral-regular-default)" />
        </g>
        <g transform="translate(130 30)"
           stroke="var(--border-neutral-regular-default)">
            <rect width="240"
                  height="180"
                  rx="6"
                  stroke-width="1.5"
                  stroke-dasharray="4 4" />
            <rect x="20"
                  y="20"
                  width="60"
                  height="40"
                  rx="4"
                  fill="var(--background-neutral-strong-default)" />
            <rect x="90"
                  y="20"
                  width="130"
                  height="40"
                  rx="4"
                  fill="var(--background-neutral-strong-default)" />
            <rect x="20"
                  y="75"
                  width="200"
                  height="85"
                  rx="4"
                  fill="var(--background-neutral-strong-default)" />
        </g>
    </svg>
</template>
