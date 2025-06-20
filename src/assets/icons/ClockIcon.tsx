const ClockIcon = ({ width = "24", height = "24", className = "" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="none"
    />
    <line
      x1="12"
      y1="12"
      x2="12"
      y2="7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="12"
      y1="12"
      x2="16.5"
      y2="14.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
    <line
      x1="12"
      y1="2"
      x2="12"
      y2="4"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <line
      x1="12"
      y1="20"
      x2="12"
      y2="22"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <line
      x1="2"
      y1="12"
      x2="4"
      y2="12"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <line
      x1="20"
      y1="12"
      x2="22"
      y2="12"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

export default ClockIcon;
