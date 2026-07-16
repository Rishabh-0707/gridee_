import { InfoPage } from "../info-page";

export default function PrivacyPage() {
  return <InfoPage eyebrow="Gridee Privacy" title="Privacy Policy" intro="This policy explains how Gridee collects, uses, protects, and handles information when you use our smart-parking services." updated="Last updated: December 11, 2025" sections={[
    { title: "Our Promise", paragraphs: ["We will not sell your personal data. We collect only the information needed to provide, protect, and improve the Gridee parking experience."] },
    { title: "Information We Collect", items: [
      <><strong>Identity & Account:</strong> Name, email address, phone number, and encrypted password information.</>,
      <><strong>Vehicle Data:</strong> Vehicle number plates and vehicle type.</>,
      <><strong>Parking Activity:</strong> Locations, bookings, entry records, and QR activity.</>,
      <><strong>Financial Data:</strong> Wallet balance, transaction history, and payment status.</>,
      <><strong>Technical Data:</strong> Authentication tokens and device information required for app functionality.</>,
      <><strong>Camera Data:</strong> QR codes and number-plate images used for recognition.</>,
    ] },
    { title: "Third-Party Services", items: [
      <><strong>Razorpay:</strong> Processes payments. Gridee does not store card or banking details.</>,
      <><strong>Google or Apple Sign-in:</strong> Provides authentication tokens used to verify identity.</>,
      <><strong>Google ML Kit:</strong> Supports on-device text recognition for number plates.</>,
      <><strong>Google AdMob:</strong> May process device and usage information when rewarded advertising is used.</>,
    ] },
    { title: "Permissions", items: ["Location permission is requested before location-based features are used.", "Camera access is used for QR scanning and number-plate recognition.", "Local storage is used for session tokens and app preferences."] },
    { title: "Your Rights", items: ["Request deletion of your account and associated information.", "Request a copy of your booking and transaction history.", "Manage advertising and communication preferences through available settings."] },
  ]} />;
}
