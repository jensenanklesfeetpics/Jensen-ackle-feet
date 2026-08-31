export default function TwitchIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M4.25 3 3 6.35v13.4h4.6V22h2.55l2.25-2.25h3.45L21 14.6V3H4.25Zm14.5 10.55-2.9 2.9H11.8l-2.25 2.25v-2.25H6.1V5.25h12.65v8.3Zm-2.25-5.1v4.25h-2.25V8.45h2.25Zm-6.15 0v4.25H8.1V8.45h2.25Z" />
    </svg>
  );
}
