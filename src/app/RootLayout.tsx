import { Outlet } from "react-router";
import { ScrollToTop } from "./components/ScrollToTop";
import { CookieConsent } from "./components/CookieConsent";

export function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
      <CookieConsent />
    </>
  );
}
