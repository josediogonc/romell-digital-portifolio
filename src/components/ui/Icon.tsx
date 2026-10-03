export type IconName = "email" | "instagram" | "linkedin" | "phone" | "vimeo" | "youtube";

type IconProps = {
  className?: string;
  name: IconName;
};

export function Icon({ className, name }: IconProps) {
  const commonProps = {
    "aria-hidden": true,
    className,
    fill: "none",
    focusable: false,
    viewBox: "0 0 24 24",
  } as const;

  switch (name) {
    case "email":
      return (
        <svg {...commonProps}>
          <rect x="2.75" y="4.75" width="18.5" height="14.5" rx="1.75" stroke="currentColor" strokeWidth="1.5" />
          <path d="m4 6 8 6.5L20 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "phone":
      return (
        <svg {...commonProps}>
          <path d="M7.45 3.5 10 8.25 7.9 10.3c1.25 2.65 3.15 4.55 5.8 5.8l2.05-2.1 4.75 2.55-.55 3.25c-.15.8-.85 1.4-1.7 1.4C9.75 21.2 2.8 14.25 2.8 5.75c0-.85.6-1.55 1.4-1.7l3.25-.55Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="17.25" cy="6.75" r="1" fill="currentColor" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...commonProps} fill="currentColor">
          <path d="M6.55 8.1H3.2V20.8h3.35V8.1ZM4.88 3.2A1.95 1.95 0 1 0 4.88 7.1a1.95 1.95 0 0 0 0-3.9ZM13 8.1H9.8V20.8H13v-6.3c0-1.65.3-3.25 2.35-3.25 2 0 2.05 1.9 2.05 3.35v6.2h3.35v-7c0-3.45-.75-6.1-4.8-6.1-1.95 0-3.25 1.05-3.8 2.05H13V8.1Z" />
        </svg>
      );
    case "vimeo":
      return (
        <svg {...commonProps} fill="currentColor">
          <path d="M21.4 7.15c-.1 2.25-1.7 5.35-4.8 9.25-3.2 4.1-5.9 6.15-8.1 6.15-1.4 0-2.55-1.25-3.5-3.8L3.1 11.8C2.4 9.25 1.65 8 .85 8c-.2 0-.8.35-1.85 1.05L-0.1 7.9c1.15-1 2.3-2 3.4-3C4.85 3.6 6 2.9 6.85 2.8c2-.2 3.2 1.15 3.7 4.05.5 3.15.85 5.1 1.05 5.85.55 2.6 1.15 3.9 1.85 3.9.5 0 1.3-.85 2.35-2.55 1.05-1.7 1.6-3 1.7-3.9.15-1.5-.45-2.25-1.7-2.25-.6 0-1.25.15-1.9.4 1.25-4.05 3.65-6 7.15-5.85 2.6.05 3.8 1.6 3.6 4.7h-3.25Z" transform="scale(.9) translate(1.6 0)" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...commonProps}>
          <path d="M21 7.1a2.7 2.7 0 0 0-1.9-1.9C17.4 4.75 12 4.75 12 4.75s-5.4 0-7.1.45A2.7 2.7 0 0 0 3 7.1C2.55 8.8 2.55 12 2.55 12s0 3.2.45 4.9a2.7 2.7 0 0 0 1.9 1.9c1.7.45 7.1.45 7.1.45s5.4 0 7.1-.45a2.7 2.7 0 0 0 1.9-1.9c.45-1.7.45-4.9.45-4.9s0-3.2-.45-4.9Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="m10 9 5 3-5 3V9Z" fill="currentColor" />
        </svg>
      );
  }
}
