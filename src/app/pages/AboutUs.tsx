import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ContactUsCta } from "../components/ContactUsCta";
import Grainient from "../components/Grainient";
import { motion } from "motion/react";
import { Users, Settings, Lightbulb, Code2, Shield, Target } from "lucide-react";

export function AboutUs() {
  const stats = [
    { value: "2016", label: "Founded Year" },
    { value: "50+", label: "Global Markets" },
    { value: "100+", label: "Local Payment Methods" },
    { value: "99.9%", label: "System Uptime" }
  ];

  const teamSupports = [
    {
      title: "Business Integration",
      desc: "Dedicated personnel will deeply understand and support your business demands, efficiently transmit requirements, and serve as a seamless bridge between you and our payment team.",
      icon: <Users size={32} strokeWidth={1.5} />
    },
    {
      title: "Business Operations",
      desc: "We provide one-stop strategic advice ranging from user research and payment operations to store policy analysis, effectively solving various operational difficulties.",
      icon: <Settings size={32} strokeWidth={1.5} />
    },
    {
      title: "Product Insights",
      desc: "We deliver the latest industry product insights and provide high-quality solutions, seamlessly handling all your business requests in one place.",
      icon: <Lightbulb size={32} strokeWidth={1.5} />
    },
    {
      title: "R&D and Testing",
      desc: "Our professional and efficient team of R&D engineers ensures high-quality product delivery and conducts precise monitoring to guarantee highly stable operations.",
      icon: <Code2 size={32} strokeWidth={1.5} />
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-[#01CD86] selection:text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-[180px] pb-[160px] lg:pt-[240px] lg:pb-[200px] overflow-hidden bg-[#F8F9FA] flex flex-col justify-center">
        <div className="absolute inset-0 z-0 opacity-80">
          <Grainient
            color1="#7fffb1"
            color2="#c6ffea"
            color3="#97cacf"
            timeSpeed={1.05}
            colorBalance={0.02}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col items-center gap-[12px] text-center"
          >
            <h1 className="text-[56px] md:text-[80px] lg:text-[110px] font-bold text-[#1B1D21] leading-[1.05] tracking-tight flex flex-col gap-[8px] uppercase">
              <span className="text-[36px] md:text-[48px] md:text-[72px] lg:text-[80px] lowercase tracking-normal">The global payment engine</span>
              <span className="text-[36px] md:text-[48px] md:text-[72px] lg:text-[80px] lowercase tracking-normal text-[#1B1D21]">Empowering E-commerce expansion</span>
            </h1>
            <p className="text-[#606872] mt-6 leading-relaxed text-[18px] max-w-[800px]">
              A one-stop local payment solution tailored for E-commerce enterprises expanding overseas.<br />Seamlessly connecting global cash flows to fuel your continuous and efficient business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="bg-white py-[60px] lg:py-[100px] relative z-10 w-full overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start border-l-4 border-[#01CD86] pl-6"
            >
              <div className="text-[36px] lg:text-[48px] font-bold text-[#1B1D21] leading-none tracking-tighter mb-4">
                {stat.value}
              </div>
              <div className="text-[#606872] text-[14px] lg:text-[16px] uppercase tracking-widest font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bold Content Modules */}
      <section className="bg-white py-[80px] lg:py-[120px] relative z-10 w-full">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full flex flex-col gap-24 lg:gap-32 relative z-10">
          
          {/* Module 1: Our Story */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start"
          >
            <div className="md:col-span-4 md:sticky md:top-32">
              <h2 className="text-[36px] lg:text-[48px] font-bold text-[#1B1D21] leading-tight tracking-tight">
                Our Story.
              </h2>
            </div>
            <div className="md:col-span-8 pt-2">
              <p className="text-[#606872] text-[16px] lg:text-[18px] leading-relaxed text-left md:text-justify">
                Founded in 2016, EasyPay is a one-stop global local payment solution provider focusing on global expansion. We deeply understand the myriad of challenges enterprises face in global payments, and we are dedicated to providing professional services that perfectly align with industry needs.
              </p>
            </div>
          </motion.div>

          {/* Module 2: Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start"
          >
            <div className="md:col-span-4 md:sticky md:top-32">
              <h2 className="text-[36px] lg:text-[48px] font-bold text-[#1B1D21] leading-tight tracking-tight">
                Our Mission.
              </h2>
            </div>
            <div className="md:col-span-8 pt-2">
              <p className="text-[#606872] text-[16px] lg:text-[18px] leading-relaxed text-left md:text-justify">
                Through EasyPay, developers can quickly integrate multiple local payment methods worldwide without the need to handle complex localization and compliance issues. Our mission is to help businesses efficiently expand into overseas markets, lower the barrier to payment integration, effectively improve user payment conversion rates, and ultimately achieve sustainable business growth.
              </p>
            </div>
          </motion.div>

          {/* Module 3: The Industry's Trusted Choice */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start"
          >
            <div className="md:col-span-4 md:sticky md:top-32">
              <h2 className="text-[36px] lg:text-[48px] font-bold text-[#1B1D21] leading-tight tracking-tight">
                Trusted Choice.
              </h2>
            </div>
            <div className="md:col-span-8 pt-2">
              <p className="text-[#606872] text-[16px] lg:text-[18px] leading-relaxed text-left md:text-justify">
                Relying on our professional technical strength and profound understanding of the industry, EasyPay has become the trusted choice for many top-tier global developers. Whether navigating emerging or mature markets, we provide robust support and act as a solid backing for your global business expansion.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Team Support - Bold Cards */}
      <section className="bg-[#F8F9FA] py-[80px] lg:py-[120px] relative z-10 w-full">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 w-full max-w-4xl"
          >
            <h2 className="text-[36px] lg:text-[48px] font-bold text-[#1B1D21] leading-tight tracking-tight mb-4">
              Comprehensive Team Support
            </h2>
            <p className="text-[#606872] text-[16px] lg:text-[18px] leading-relaxed">
              We provide dedicated, full-lifecycle service to ensure your success from day one to global scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
            {teamSupports.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-[#E4E5E6] rounded-[16px] p-8 lg:p-10 flex flex-col items-start gap-6 relative overflow-hidden"
              >
                <div className="text-[#01CD86]">
                  {item.icon}
                </div>
                <div className="flex flex-col w-full z-10">
                  <h3 className="text-[20px] lg:text-[24px] font-bold text-[#1B1D21] mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#606872] text-[16px] leading-relaxed text-left md:text-justify">
                    {item.desc}
                  </p>
                </div>
                {/* Decorative large background number */}
                <div className="absolute -bottom-6 right-2 text-[120px] font-black text-black/[0.03] pointer-events-none select-none">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactUsCta />

      <Footer />
    </div>
  );
}
