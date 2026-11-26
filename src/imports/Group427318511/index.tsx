function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-medium font-medium leading-[19.5px] not-italic relative shrink-0 text-[#01CD86] text-[13px] tracking-[2.6px] uppercase whitespace-nowrap">{`Licensed & Compliant`}</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[156px] max-w-[896px] relative shrink-0 w-[827.078px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pt-[36px] relative size-full">
        <div className="[word-break:break-word] font-medium font-medium leading-[0] not-italic relative shrink-0 text-[#1F2225] text-[48px] whitespace-nowrap">
          <p className="leading-[60px] mb-0 whitespace-pre">{`Global Compliance & `}</p>
          <p className="whitespace-pre">
            <span className="leading-[60px] text-[#01CD86]">Bank-Level</span>
            <span className="leading-[60px]">{` Security You Can Trust.`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[70px] max-w-[672px] relative shrink-0 w-[672px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pt-[44px] relative size-full">
        <p className="[word-break:break-word] font-normal font-normal leading-[26px] not-italic relative shrink-0 text-[#606872] text-[16px] whitespace-nowrap">Building a Fortified Foundation for Your Global Funds.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-[827.078px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text />
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[310px] items-start left-0 pb-[64px] pl-[64px] pr-[48px] top-0 w-[1400px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-medium font-medium leading-[37.333px] not-italic relative shrink-0 text-[#1F2225] text-[28px] whitespace-nowrap">Hong Kong MSO License</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-normal font-normal leading-[26px] not-italic relative shrink-0 text-[#606872] text-[16px] w-[534px]">Holding a formal Money Service Operator license issued by Hong Kong Customs, granting legal qualifications for cross-border fund operations to achieve highly efficient collection, exchange, and global payouts.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[534px]">
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-medium font-medium leading-[37.333px] not-italic relative shrink-0 text-[#1F2225] text-[28px] whitespace-nowrap">PCI DSS Certification</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-normal font-normal leading-[26px] not-italic relative shrink-0 text-[#606872] text-[16px] w-[534px]">Strictly adhering to Payment Card Industry Data Security Standards. Utilizing dual protection with end-to-end encryption and Tokenization technology to safeguard funds and privacy comprehensively.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
        <Paragraph2 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-0 w-[554px]">
      <Heading2 />
      <Frame1 />
    </div>
  );
}

export default function Group() {
  return (
    <div className="contents relative size-full">
      <Container />
      <Frame />
      <Frame2 />
      <div className="absolute h-[180px] left-0 top-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 180">
            <path d="M0.5 0V180" id="Vector 1" stroke="var(--stroke-0, #01CD86)" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[180px] left-0 top-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 180">
            <path d="M0.5 0V180" id="Vector 1" stroke="var(--stroke-0, #01CD86)" />
          </svg>
        </div>
      </div>
    </div>
  );
}