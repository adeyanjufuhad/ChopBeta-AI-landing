// Every outbound call-to-action lives here so launch day is a one-line change.

export const WAITLIST_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfgNgr5MbyVDZqE8zoGV8Jnn7FUeehyUjxKeEE92zAdMsGMHg/viewform";

export const WAITLIST_EMBED_URL = `${WAITLIST_FORM_URL}?embedded=true`;

// Until the app is in the stores, the download buttons send people to the waitlist.
// Swap these for the Play Store / App Store / APK links when the app ships.
export const DOWNLOAD_LINKS = {
  android: WAITLIST_FORM_URL,
  ios: WAITLIST_FORM_URL,
};

export const APP_IS_LIVE = false;
