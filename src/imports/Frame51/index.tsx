import svgPaths from "./svg-eej4zet7ko";

function FlagOfRussia() {
  return (
    <div className="absolute inset-[0_-8.23%_-0.11%_-41.94%]" data-name="Flag_of_Russia 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.655 93.1035">
        <g clipPath="url(#clip0_2065_53)" id="Flag_of_Russia 1">
          <path d={svgPaths.p2629a300} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p22c7fe00} fill="var(--fill-0, #D52B1E)" id="Vector_2" />
          <path d={svgPaths.pc6fdc00} fill="var(--fill-0, #0039A6)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_2065_53">
            <rect fill="white" height="93.1035" width="139.655" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Frame51() {
  return (
    <div className="bg-white overflow-clip relative rounded-[100px] size-full">
      <FlagOfRussia />
    </div>
  );
}