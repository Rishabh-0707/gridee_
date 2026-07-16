import { InfoPage } from "../info-page";

export default function AboutPage() {
  return <InfoPage title="Smart parking and cashless check-ins." intro="Book parking, scan to enter or exit, and manage your wallet from one app." sections={[
    { title: "What We Do", paragraphs: ["Gridee provides smart parking management for drivers and operators, streamlined entry and exit using QR and number-plate scans, and cashless payments with wallet top-ups."] },
    { title: "Core Features", items: [
      <><strong>Book & Manage:</strong> Find and reserve parking with live availability.</>,
      <><strong>Secure Sign-in:</strong> Account access through email, Google, and supported identity providers.</>,
      <><strong>Wallet & Payments:</strong> Payments are processed through Razorpay without storing card details.</>,
      <><strong>Smart Scanning:</strong> QR and number-plate scanning supports quick check-in and check-out.</>,
      <><strong>Operator Tools:</strong> Parking operators can manage vehicle access and occupancy.</>,
      <><strong>Privacy Controls:</strong> Users can control relevant data, analytics, and communication preferences.</>,
    ] },
    { title: "How It Works", items: ["Sign in to the Gridee app.", "Choose a parking location and reserve a space.", "Pay and scan at the gate to enter."] },
    { title: "Technology", paragraphs: ["Gridee combines native mobile development, QR scanning, optical character recognition, reliable cloud APIs, and secure payment integrations to make arrival simpler."] },
    { title: "Built in India", paragraphs: ["Gridee is built in India for universities, apartments, hospitals, offices, malls, transit networks, and cities."] },
  ]} />;
}
