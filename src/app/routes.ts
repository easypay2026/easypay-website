import { createBrowserRouter } from "react-router";
import { RootLayout } from "./RootLayout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { AboutUs } from "./pages/AboutUs";
import { Acquiring } from "./pages/Acquiring";
import { Payout } from "./pages/Payout";
import { RiskManagement } from "./pages/RiskManagement";
import { CryptoPayment } from "./pages/CryptoPayment";
import { Complaints } from "./pages/Complaints";
import { HelpCenter } from "./pages/HelpCenter";
import { TurkeySolution } from "./pages/solutions/TurkeySolution";
import { PhilippinesSolution } from "./pages/solutions/PhilippinesSolution";
import { EgyptSolution } from "./pages/solutions/EgyptSolution";
import { MiddleEastSolution } from "./pages/solutions/MiddleEastSolution";
import { TermsPrivacy } from "./pages/TermsPrivacy";
import { StatementNonAffiliation } from "./pages/StatementNonAffiliation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "products/acquiring", Component: Acquiring },
      { path: "products/payout", Component: Payout },
      { path: "products/risk-management", Component: RiskManagement },
      { path: "products/crypto-payment", Component: CryptoPayment },
      { path: "support/complaints", Component: Complaints },
      { path: "support/help-center", Component: HelpCenter },
      { path: "about", Component: AboutUs },
      { path: "solutions/turkey", Component: TurkeySolution },
      { path: "solutions/philippines", Component: PhilippinesSolution },
      { path: "solutions/egypt", Component: EgyptSolution },
      { path: "solutions/middle-east", Component: MiddleEastSolution },
      { path: "terms", Component: TermsPrivacy },
      { path: "statement-of-non-affiliation", Component: StatementNonAffiliation },
    ]
  }
]);
