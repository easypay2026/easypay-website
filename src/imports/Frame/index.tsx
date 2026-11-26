import svgPaths from "./svg-jqqugv4au4";
import { imgGroup } from "./svg-9muk6";

function Group() {
  return (
    <div className="absolute inset-[0_0.48%_-0.04%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[130.142px_60px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130.168 60.0265">
        <g id="Group">
          <path d={svgPaths.p33d67400} fill="var(--fill-0, #1F2225)" id="Vector" />
          <path d={svgPaths.p2e1c3700} fill="var(--fill-0, #1F2225)" id="Vector_2" />
          <path d={svgPaths.p39bf900} fill="var(--fill-0, #1F2225)" id="Vector_3" />
          <path d={svgPaths.p2d802b80} fill="var(--fill-0, #1F2225)" id="Vector_4" />
          <path d={svgPaths.p4604580} fill="var(--fill-0, #1F2225)" id="Vector_5" />
          <path d={svgPaths.p19eb6bf0} fill="var(--fill-0, #1F2225)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[0_0.5%_0_0]" data-name="Clip path group">
      <Group />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full" data-name="Frame">
      <ClipPathGroup />
    </div>
  );
}