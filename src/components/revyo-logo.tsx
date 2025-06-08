export function RevyoLogo({ className = "", width = 200, height = 40 }: { 
  className?: string; 
  width?: number; 
  height?: number; 
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Revyo Software Logo"
    >
      <title>Revyo Software Logo</title>
    
      {/* Revyo text */}
      <text
        x="42"
        y="25"
        fontSize="24"
        fontWeight="600"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        letterSpacing="-0.025em"
      >
        Revyo
      </text>
      
      {/* Software text */}
      <text
        x="110"
        y="25"
        fontSize="24"
        fontWeight="400"
        fill="currentColor"
        fillOpacity="0.7"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        letterSpacing="-0.01em"
      >
        Software
      </text>
    </svg>
  )
} 