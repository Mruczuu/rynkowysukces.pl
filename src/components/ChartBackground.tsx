export function ChartBackground() {
  const candles = [
    { x: 40, o: 140, c: 100, h: 85, l: 155 },
    { x: 72, o: 100, c: 115, h: 80, l: 130 },
    { x: 104, o: 118, c: 88, h: 75, l: 132 },
    { x: 136, o: 85, c: 70, h: 55, l: 95 },
    { x: 168, o: 72, c: 90, h: 60, l: 105 },
    { x: 200, o: 92, c: 110, h: 78, l: 118 },
    { x: 232, o: 108, c: 125, h: 95, l: 130 },
    { x: 264, o: 122, c: 95, h: 82, l: 135 },
    { x: 296, o: 98, c: 78, h: 65, l: 110 },
    { x: 328, o: 80, c: 60, h: 48, l: 92 },
    { x: 360, o: 62, c: 85, h: 50, l: 98 },
    { x: 392, o: 88, c: 105, h: 72, l: 112 },
    { x: 424, o: 102, c: 120, h: 88, l: 128 },
    { x: 456, o: 118, c: 135, h: 100, l: 142 },
    { x: 488, o: 132, c: 115, h: 98, l: 145 },
    { x: 520, o: 118, c: 100, h: 88, l: 128 },
    { x: 552, o: 102, c: 80, h: 68, l: 115 },
    { x: 584, o: 82, c: 95, h: 70, l: 108 },
    { x: 616, o: 98, c: 115, h: 82, l: 120 },
    { x: 648, o: 112, c: 130, h: 95, l: 138 },
    { x: 680, o: 128, c: 145, h: 110, l: 150 },
    { x: 712, o: 142, c: 125, h: 112, l: 155 },
    { x: 744, o: 128, c: 108, h: 95, l: 140 },
    { x: 776, o: 110, c: 90, h: 78, l: 120 },
    { x: 808, o: 92, c: 75, h: 62, l: 105 },
    { x: 840, o: 78, c: 95, h: 65, l: 102 },
    { x: 872, o: 92, c: 110, h: 78, l: 118 },
    { x: 904, o: 108, c: 125, h: 92, l: 132 },
    { x: 936, o: 122, c: 140, h: 105, l: 148 },
    { x: 968, o: 138, c: 120, h: 108, l: 152 },
    { x: 1000, o: 122, c: 105, h: 90, l: 135 },
    { x: 1032, o: 108, c: 90, h: 78, l: 118 },
    { x: 1064, o: 92, c: 110, h: 80, l: 120 },
    { x: 1096, o: 108, c: 128, h: 95, l: 135 },
    { x: 1128, o: 125, c: 142, h: 110, l: 150 },
    { x: 1160, o: 140, c: 155, h: 125, l: 162 },
    { x: 1192, o: 152, c: 135, h: 120, l: 165 },
    { x: 1224, o: 138, c: 118, h: 105, l: 148 },
    { x: 1256, o: 120, c: 100, h: 88, l: 132 },
    { x: 1288, o: 102, c: 85, h: 72, l: 115 },
    { x: 1320, o: 88, c: 105, h: 75, l: 112 },
    { x: 1352, o: 102, c: 118, h: 88, l: 125 },
    { x: 1384, o: 115, c: 98, h: 85, l: 128 },
    { x: 1416, o: 100, c: 82, h: 70, l: 112 },
  ];

  const closePrices = candles.map((c) => ({ x: c.x, y: c.c }));
  const linePath =
    "M " +
    closePrices
      .map((p, i) => {
        if (i === 0) return `${p.x} ${p.y}`;
        const prev = closePrices[i - 1];
        const cpx = (prev.x + p.x) / 2;
        return `C ${cpx} ${prev.y}, ${cpx} ${p.y}, ${p.x} ${p.y}`;
      })
      .join(" ");

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Bear — left side */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/bear.png"
        alt=""
        className="absolute left-0 bottom-[10%] w-[clamp(220px,28vw,450px)] opacity-[0.05] md:left-4 lg:left-8"
      />

      {/* Bull — right side */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/bull.png"
        alt=""
        className="absolute right-0 bottom-[10%] w-[clamp(260px,32vw,500px)] opacity-[0.05] md:right-4 lg:right-8"
      />

      {/* Chart */}
      <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        style={{ minHeight: "100vh" }}
      >
        {/* price line */}
        <path
          d={linePath}
          fill="none"
          stroke="rgba(201,168,76,0.06)"
          strokeWidth="1.5"
        />

        {/* area fill under line */}
        <path
          d={`${linePath} L 1416 200 L 40 200 Z`}
          fill="url(#areaGrad)"
        />

        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(201,168,76,0.03)" />
            <stop offset="100%" stopColor="rgba(201,168,76,0)" />
          </linearGradient>
        </defs>

        {/* candles */}
        {candles.map((c, i) => {
          const bullish = c.c < c.o;
          const color = bullish
            ? "rgba(34,197,94,0.08)"
            : "rgba(239,68,68,0.08)";
          const wickColor = bullish
            ? "rgba(34,197,94,0.05)"
            : "rgba(239,68,68,0.05)";
          const top = Math.min(c.o, c.c);
          const height = Math.abs(c.o - c.c);

          return (
            <g key={i}>
              <line
                x1={c.x}
                y1={c.h}
                x2={c.x}
                y2={c.l}
                stroke={wickColor}
                strokeWidth="1"
              />
              <rect
                x={c.x - 6}
                y={top}
                width="12"
                height={Math.max(height, 2)}
                fill={color}
                rx="1"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
