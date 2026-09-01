import svgPaths from "./svg-df2kjspnl4";

function FlagOfTurkey() {
  return (
    <div className="absolute inset-[-1.92%_-47.17%_-1.92%_-8.6%]" data-name="Flag_of_Turkey 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144.865 96.5768">
        <g clipPath="url(#clip0_2065_80)" id="Flag_of_Turkey 1">
          <path d={svgPaths.p2dc34200} fill="var(--fill-0, #E30A17)" id="Vector" />
          <path d={svgPaths.p2b199300} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2065_80">
            <rect fill="white" height="96.5768" width="144.865" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Frame50() {
  return (
    <div className="bg-white overflow-clip relative rounded-[100px] size-full">
      <FlagOfTurkey />
    </div>
  );
}