import { InfoPage } from "../info-page";

export default function DataSafetyPage() {
  return <InfoPage title="Your data, your control." intro="A clear summary of how Gridee uses, protects, and deletes your information." sections={[
    { title: "Data Usage Policy", items: [
      <><strong>No Selling:</strong> We do not sell, rent, or trade personal information.</>,
      <><strong>Service Focus:</strong> Information is used to manage bookings, verify access, process payments, and support customers.</>,
      <><strong>Strict Access:</strong> Only authorized systems and personnel can access information on a need-to-know basis.</>,
    ] },
    { title: "Security Measures", items: [
      <><strong>Encryption:</strong> Data in transit is protected using industry-standard TLS protocols.</>,
      <><strong>Secure Authentication:</strong> Sessions use secure authentication tokens stored locally on the device.</>,
      <><strong>Payment Safety:</strong> Card and banking details are not stored by Gridee; transactions are handled by Razorpay.</>,
    ] },
    { title: "Account Deletion", paragraphs: [<>To permanently delete your account, email <a href="mailto:gridee.business@gmail.com?subject=Account%20Deletion%20Request">gridee.business@gmail.com</a> using your registered address.</>], items: ["Include your registered name, email address, and mobile number.", "Deletion is irreversible and permanently removes account history, balances, and preferences."] },
  ]} />;
}
