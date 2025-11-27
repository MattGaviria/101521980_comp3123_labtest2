function KiIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className="ki-icon"
    >
      {/* Outer glow circle */}
      <defs>
        <radialGradient id="kiGlow" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#fffde7" />
          <stop offset="40%" stopColor="#ffeb3b" />
          <stop offset="100%" stopColor="#ff9800" />
        </radialGradient>
      </defs>

      <circle cx="16" cy="16" r="14" fill="url(#kiGlow)" />

      {/* Inner “energy flame” shape */}
      <path
        d="M16 6
           C13 10, 12 12.5, 12 15
           C12 17.5, 13.2 19.3, 14.7 20.4
           C13.8 21.4, 13.3 22.3, 13.3 23.4
           C13.3 25.6, 14.8 27, 16.6 27
           C18.9 27, 20.7 25, 20.7 22.4
           C20.7 20.5, 19.9 18.9, 18.8 17.7
           C20.6 16.4, 21.8 14.2, 21.8 11.8
           C21.8 9.1, 20.3 6.9, 18.2 6
           C17.4 7.3, 16.7 8.6, 16 10Z"
        fill="#ff6f00"
        stroke="#fffde7"
        strokeWidth="0.7"
      />
    </svg>
  );
}

export default KiIcon;