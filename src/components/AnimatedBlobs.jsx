export default function AnimatedBlobs() {
  return (
    <svg className="absolute -z-10 top-0 left-0 w-full h-full" viewBox="0 0 800 600" fill="none">
      <g filter="url(#blur)">
        <ellipse cx="200" cy="200" rx="180" ry="120" fill="#a5b4fc" fillOpacity="0.3">
          <animate attributeName="cx" values="200;600;200" dur="12s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="600" cy="400" rx="160" ry="100" fill="#fca5a5" fillOpacity="0.3">
          <animate attributeName="cy" values="400;200;400" dur="10s" repeatCount="indefinite" />
        </ellipse>
      </g>
      <defs>
        <filter id="blur" x="0" y="0" width="800" height="600">
          <feGaussianBlur stdDeviation="80" />
        </filter>
      </defs>
    </svg>
  );
}
