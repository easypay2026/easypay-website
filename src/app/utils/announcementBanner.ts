// Remembers that the visitor dismissed the non-affiliation announcement, so it
// stays hidden for 7 days. Stored in a cookie (not localStorage) so it expires
// on its own and clears when the visitor clears their browsing data.
const COOKIE_NAME = 'ep_banner_dismissed';
const DISMISS_DAYS = 7;

export function isBannerDismissed(): boolean {
  if (typeof document === 'undefined') return false;
  return document.cookie
    .split('; ')
    .some(entry => entry.split('=')[0] === COOKIE_NAME);
}

export function dismissBanner(): void {
  if (typeof document === 'undefined') return;
  const expires = new Date(Date.now() + DISMISS_DAYS * 24 * 60 * 60 * 1000).toUTCString();
  // SameSite=Lax keeps the cookie out of cross-site requests; it carries no
  // personal data, only the fact that the notice was acknowledged.
  document.cookie = `${COOKIE_NAME}=1; expires=${expires}; path=/; SameSite=Lax`;
}
