import { createBrowserRouter } from "react-router";
import { RootLayout } from "./RootLayout";
import { Home } from "./pages/Home";

// Home ships in the initial bundle so the landing page paints without waiting
// on a second request. Every other route is split out and fetched on demand,
// which keeps heavy dependencies (the WebGL shader, d3-geo globes) out of the
// critical path.
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "products", lazy: async () => ({ Component: (await import("./pages/Products")).Products }) },
      { path: "products/acquiring", lazy: async () => ({ Component: (await import("./pages/Acquiring")).Acquiring }) },
      { path: "products/payout", lazy: async () => ({ Component: (await import("./pages/Payout")).Payout }) },
      { path: "products/risk-management", lazy: async () => ({ Component: (await import("./pages/RiskManagement")).RiskManagement }) },
      { path: "products/crypto-payment", lazy: async () => ({ Component: (await import("./pages/CryptoPayment")).CryptoPayment }) },
      { path: "support/complaints", lazy: async () => ({ Component: (await import("./pages/Complaints")).Complaints }) },
      { path: "support/help-center", lazy: async () => ({ Component: (await import("./pages/HelpCenter")).HelpCenter }) },
      { path: "about", lazy: async () => ({ Component: (await import("./pages/AboutUs")).AboutUs }) },
      { path: "solutions/turkey", lazy: async () => ({ Component: (await import("./pages/solutions/TurkeySolution")).TurkeySolution }) },
      { path: "solutions/philippines", lazy: async () => ({ Component: (await import("./pages/solutions/PhilippinesSolution")).PhilippinesSolution }) },
      { path: "solutions/egypt", lazy: async () => ({ Component: (await import("./pages/solutions/EgyptSolution")).EgyptSolution }) },
      { path: "solutions/middle-east", lazy: async () => ({ Component: (await import("./pages/solutions/MiddleEastSolution")).MiddleEastSolution }) },
      { path: "terms", lazy: async () => ({ Component: (await import("./pages/TermsPrivacy")).TermsPrivacy }) },
      { path: "statement-of-non-affiliation", lazy: async () => ({ Component: (await import("./pages/StatementNonAffiliation")).StatementNonAffiliation }) },
    ]
  }
]);
