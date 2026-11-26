import svgPaths from "./svg-mnvt20atex";

function Visa() {
  return (
    <div className="h-[38.357px] relative shrink-0 w-[118.631px]" data-name="visa">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118.631 38.3573">
        <g id="visa">
          <path d={svgPaths.p1faf1a70} fill="var(--fill-0, #1F2225)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Mastercard() {
  return (
    <div className="h-[45.6px] relative shrink-0 w-[58.716px]" data-name="mastercard">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.7164 45.6006">
        <g id="mastercard">
          <path d={svgPaths.p213e3180} fill="var(--fill-0, #1F2225)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

export default function VisaMastercardIcon() {
  return (
    <div className="content-stretch flex gap-[44px] items-center relative size-full" data-name="visa mastercard">
      <Visa />
      <Mastercard />
    </div>
  );
}