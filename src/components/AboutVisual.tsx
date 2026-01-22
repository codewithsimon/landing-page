export default function AboutVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      <svg
        className="w-full h-full max-w-md"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="animate-float">
          <circle
            cx="200"
            cy="120"
            r="40"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.6"
            className="animate-glow-pulse"
            style={{ color: 'var(--heading)' }}
          />
          <text
            x="200"
            y="125"
            textAnchor="middle"
            fill="currentColor"
            fontSize="12"
            fontFamily="Space Grotesk"
            fontWeight="500"
            opacity="0.8"
            style={{ color: 'var(--heading)' }}
          >
            AI
          </text>
        </g>

        <g style={{ animationDelay: '0.5s' }} className="animate-float">
          <circle
            cx="140"
            cy="240"
            r="40"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.6"
            className="animate-glow-pulse"
            style={{ color: 'var(--heading)' }}
          />
          <text
            x="140"
            y="245"
            textAnchor="middle"
            fill="currentColor"
            fontSize="12"
            fontFamily="Space Grotesk"
            fontWeight="500"
            opacity="0.8"
            style={{ color: 'var(--heading)' }}
          >
            BLOCKCHAIN
          </text>
        </g>

        <g style={{ animationDelay: '1s' }} className="animate-float">
          <circle
            cx="260"
            cy="240"
            r="40"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.6"
            className="animate-glow-pulse"
            style={{ color: 'var(--heading)' }}
          />
          <text
            x="260"
            y="245"
            textAnchor="middle"
            fill="currentColor"
            fontSize="12"
            fontFamily="Space Grotesk"
            fontWeight="500"
            opacity="0.8"
            style={{ color: 'var(--heading)' }}
          >
            DAO Like
          </text>
        </g>

        <line
          x1="200"
          y1="160"
          x2="150"
          y2="200"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.3"
          strokeDasharray="4 4"
          style={{ color: 'var(--muted)' }}
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="8"
            dur="2s"
            repeatCount="indefinite"
          />
        </line>

        <line
          x1="200"
          y1="160"
          x2="250"
          y2="200"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.3"
          strokeDasharray="4 4"
          style={{ color: 'var(--muted)' }}
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="8"
            dur="2s"
            repeatCount="indefinite"
          />
        </line>

        <line
          x1="180"
          y1="240"
          x2="220"
          y2="240"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.3"
          strokeDasharray="4 4"
          style={{ color: 'var(--muted)' }}
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="8"
            dur="2s"
            repeatCount="indefinite"
          />
        </line>

        <circle
          cx="200"
          cy="180"
          r="4"
          fill="currentColor"
          opacity="0.8"
          style={{ color: 'var(--heading)' }}
        >
          <animate
            attributeName="opacity"
            values="0.3;0.8;0.3"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>

        <circle
          cx="200"
          cy="180"
          r="60"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.1"
          fill="none"
          style={{ color: 'var(--heading)' }}
        >
          <animate
            attributeName="r"
            values="60;80;60"
            dur="4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.1;0.05;0.1"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(circle, transparent, var(--bg))`,
        opacity: 0.5
      }} />
    </div>
  );
}
