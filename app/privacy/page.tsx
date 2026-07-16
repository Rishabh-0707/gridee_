import { InfoPage } from "../info-page";

export default function PrivacyPage() {
  return <InfoPage title="Privacy Policy" intro="This policy explains how Gridee collects, uses, protects, and handles information when you use our smart-parking services." updated="Last updated: December 11, 2025" sections={[
    { title: "Our Promise", paragraphs: ["We will not sell your personal data. We collect only the information needed to provide, protect, and improve the Gridee parking experience."] },
    { title: "Information We Collect", items: [
      <><strong>Identity & Account:</strong> Name, email address, phone number, and registered vehicle number.</>,
      <><strong>Parking Activity:</strong> Locations, bookings, entry records, and QR activity.</>,
      <><strong>Financial Data:</strong> Wallet balance, transaction history, and payment status.</>,
      <><strong>Technical Data:</strong> Authentication tokens and device information required for app functionality.</>,
      <><strong>Camera Data:</strong> QR codes and number-plate images used for recognition.</>,
    ] },
    { title: "Your Rights", items: ["Request deletion of your account and associated information.", "Request a copy of your booking and transaction history.", "Manage advertising and communication preferences through available settings."] },
  ]} />;
}
