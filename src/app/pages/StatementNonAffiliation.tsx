import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { motion } from "motion/react";

export function StatementNonAffiliation() {
  const companyRows: [string, string][] = [
    ["English Name", "EASY PAY INTERNATIONAL INVESTMENT CO., LIMITED"],
    ["Chinese Name", "易貝國際投資有限公司"],
    ["CR No.", "2375068"],
    ["Date of Incorporation", "11 May 2016"],
    ["Company Type", "Private Company Limited by Shares"],
    ["Registered Address", "Room 1633, 16/F, Radio City, 505 Hennessy Road, Causeway Bay, Hong Kong"],
    ["SWIFT (if applicable)", "EPIIHKK2XXX"],
    ["Business Scope", "General commercial and investment business; not engaged in any virtual currency issuance or crypto-payment operation"],
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="pt-32 lg:pt-40 pb-20 flex-1">
        <article className="px-6 lg:px-12 max-w-[900px] mx-auto text-[#1B1D21]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[32px] md:text-[44px] font-bold tracking-tight leading-tight mb-4">
              STATEMENT OF NON-AFFILIATION
            </h1>
            <div className="flex flex-wrap gap-x-8 gap-y-1 text-[14px] text-[#606872] mb-2">
              <span>Ref: EPII-LEGAL-2026-001</span>
              <span>Date: 28.08.2026</span>
            </div>
            <p className="text-[14px] text-[#606872] mb-12">
              To: All partners, merchants, financial institutions, regulatory authorities and the public
            </p>

            {/* I. Background */}
            <section className="mb-12">
              <h2 className="text-[20px] md:text-[24px] font-bold mb-4">I. Background</h2>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#3A3F45]">
                Recently, we became aware of a market project styled &ldquo;EasyPay&rdquo;, claiming to be a global crypto-payment application and involving an &ldquo;EP token&rdquo;, consumption-subsidy multiples, staking release, multi-tier referral rebates and agency dividends. It claims sponsorship by the &ldquo;American DeepBlue Foundation&rdquo; and &ldquo;Antu Industrial Technology Co., Ltd.&rdquo;, and misuses the VISA / Alipay / WeChat Pay logos while promising 100x token appreciation. Having reviewed it, we note that multiple anti-fraud channels have flagged this model as a Ponzi scheme disguised as cross-border crypto payment, and as a suspected pyramid-selling activity.
              </p>
            </section>

            {/* II. True identity */}
            <section className="mb-12">
              <h2 className="text-[20px] md:text-[24px] font-bold mb-5">
                II. The true identity of our Company
              </h2>
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-[14px] md:text-[15px]">
                  <tbody>
                    {companyRows.map(([label, value], idx) => (
                      <tr
                        key={label}
                        className={idx % 2 === 1 ? "bg-gray-100" : "bg-white"}
                      >
                        <th className="text-left align-middle font-semibold text-[#1B1D21] w-[38%] sm:w-[30%] px-4 md:px-5 py-3.5">
                          {label}
                        </th>
                        <td className="align-middle text-[#3A3F45] px-4 md:px-5 py-3.5">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* III. Solemn declaration */}
            <section className="mb-12">
              <h2 className="text-[20px] md:text-[24px] font-bold mb-5">III. Solemn declaration</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-[16px] md:text-[18px] font-semibold mb-2">
                    Article 1 — Entity separation
                  </h3>
                  <p className="text-[15px] md:text-[16px] leading-relaxed text-[#3A3F45]">
                    We are a private limited company lawfully incorporated in Hong Kong on 11 May 2016 (CR No. 2375068). Any resemblance between our name and the so-called &ldquo;EasyPay / 易支付&rdquo;, &ldquo;EasyPay Global&rdquo; or its &ldquo;EP token&rdquo; is purely coincidental. There is no relationship whatsoever in terms of shareholding, control, authorisation, brand, trademark or business.
                  </p>
                </div>

                <div>
                  <h3 className="text-[16px] md:text-[18px] font-semibold mb-2">
                    Article 2 — No authorisation or cooperation
                  </h3>
                  <div className="space-y-2 text-[15px] md:text-[16px] leading-relaxed text-[#3A3F45]">
                    <p>
                      (1) We have never established, controlled, invested in, held shares of, custodied or operated any platform, APP, miniprogram, smart contract or token styled &ldquo;EasyPay&rdquo;, &ldquo;易支付&rdquo; or &ldquo;EP Pay&rdquo;;
                    </p>
                    <p>
                      (2) We have never authorised any party to use our name, trade name, logo, CR number, address or identity to endorse the same;
                    </p>
                    <p>
                      (3) We have no agreement, co-branding, distribution, clearing or technical relationship with the &ldquo;American DeepBlue Foundation&rdquo;, &ldquo;Antu Industrial Technology Co., Ltd.&rdquo; or VISA / Alipay / WeChat Pay;
                    </p>
                    <p>
                      (4) We have issued no virtual currency or consumption-subsidy instrument, and promised no recharge multiples, static release or referral rebates.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-[16px] md:text-[18px] font-semibold mb-2">
                    Article 3 — Risk separation and disclaimer
                  </h3>
                  <p className="text-[15px] md:text-[16px] leading-relaxed text-[#3A3F45]">
                    Any statement that &ldquo;EasyPay&rdquo; is owned by, affiliated with or authorised by EASY PAY INTERNATIONAL INVESTMENT CO., LIMITED — including descriptions such as &ldquo;under our group&rdquo;, &ldquo;the parent company&rdquo; or &ldquo;a licensed Hong Kong entity&rdquo; — is a false statement and a misuse of our name. We accept no redemption, joint, guarantee or tort liability for such activities. Participants shall assert their rights against the project operator and the relevant judicial authorities.
                  </p>
                </div>

                <div>
                  <h3 className="text-[16px] md:text-[18px] font-semibold mb-2">
                    Article 4 — Reservation of rights
                  </h3>
                  <p className="text-[15px] md:text-[16px] leading-relaxed text-[#3A3F45]">
                    We reserve the right to seek civil injunctions, file trademark oppositions, complain to the Hong Kong Companies Registry and refer evidence to the police. Members of the public who discover any misuse may send evidence to our official email address.
                  </p>
                </div>
              </div>
            </section>

            {/* IV. Public verification */}
            <section className="mb-12">
              <h2 className="text-[20px] md:text-[24px] font-bold mb-4">IV. Public verification</h2>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#3A3F45] mb-4">
                The public may verify our identity via the Hong Kong Companies Registry cyber search centre (icris.cr.gov.hk) by entering CR No. 2375068. Our official contact channels are listed below; any contact detail that does not match is not authorised by us:
              </p>
              <ul className="space-y-2 text-[15px] md:text-[16px] text-[#3A3F45]">
                <li>
                  <span className="font-semibold text-[#1B1D21]">Official email: </span>
                  <a href="mailto:info@easypayx.com" className="text-[#1B1D21] hover:underline">
                    info@easypayx.com
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-[#1B1D21]">Official website: </span>
                  <a
                    href="https://www.easypayx.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1B1D21] hover:underline"
                  >
                    https://www.easypayx.com/
                  </a>
                </li>
              </ul>
            </section>

            {/* V. Closing */}
            <section className="mb-12">
              <h2 className="text-[20px] md:text-[24px] font-bold mb-4">V. Closing</h2>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#3A3F45] mb-6">
                We consistently comply with the laws of Hong Kong and relevant jurisdictions, and have never participated in, nor will we tolerate, any unlawful financial activity. We urge the public to remain vigilant against promises of &ldquo;principal-guaranteed high yields&rdquo;, &ldquo;100x token appreciation&rdquo; or &ldquo;referral rebates&rdquo;, and to protect their own property.
              </p>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-[#3A3F45] mb-8">
                We hereby declare the foregoing.
              </p>
              <div className="text-[15px] md:text-[16px] text-[#1B1D21]">
                <p className="font-semibold">EASY PAY INTERNATIONAL INVESTMENT CO., LIMITED</p>
                <p className="text-[#606872] mt-1">Date: 28 August 2026</p>
              </div>
            </section>

            {/* Disclaimer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-[13px] leading-relaxed text-[#8A9098]">
                Disclaimer: The information in this statement concerning the &ldquo;EasyPay&rdquo; project is based on publicly available information and is solely for the purpose of clarifying name similarity; it does not constitute an evaluation of or accusation against any third party. We reserve the right to amend this statement and take further legal action.
              </p>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
