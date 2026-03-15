export default function Privacy() {
  const policies = [
    {
      title: "1. Information We Collect",
      content:
        "Velora Studio may collect personal information such as your name, email address, phone number, company details, and project requirements when you contact us or request services."
    },
    {
      title: "2. How We Use Your Information",
      content:
        "We use collected information to communicate with clients, provide services, improve our website, send updates, and respond to inquiries."
    },
    {
      title: "3. Cookies and Tracking Technologies",
      content:
        "Our website may use cookies and similar technologies to enhance user experience, analyze website traffic, and improve our services."
    },
    {
      title: "4. Third-Party Services",
      content:
        "We may use trusted third-party tools such as hosting providers, analytics services, payment gateways, and email platforms. These services may collect information according to their own privacy policies."
    },
    {
      title: "5. Data Protection and Security",
      content:
        "Velora Studio implements reasonable security measures to protect personal information from unauthorized access, disclosure, or misuse."
    },
    {
      title: "6. Information Sharing",
      content:
        "We do not sell, trade, or rent personal information to third parties. Information may only be shared when necessary to provide services or comply with legal obligations."
    },
    {
      title: "7. Data Retention",
      content:
        "We retain personal information only for as long as necessary to fulfill service requirements, legal obligations, or business purposes."
    },
    {
      title: "8. User Rights",
      content:
        "Users may request access, correction, or deletion of their personal data by contacting us. We will respond to such requests within a reasonable timeframe."
    },
    {
      title: "9. External Links",
      content:
        "Our website may contain links to external websites. Velora Studio is not responsible for the privacy practices or content of those websites."
    },
    {
      title: "10. Children's Privacy",
      content:
        "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children."
    },
    {
      title: "11. Updates to This Policy",
      content:
        "Velora Studio may update this Privacy Policy periodically. Any changes will be posted on this page with the updated revision date."
    },
    {
      title: "12. Contact Information",
      content:
        "If you have questions about this Privacy Policy, please contact Velora Studio at officialvelorastudio@gmail.com."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>

      <p className="text-muted-foreground mb-10">
        Last Updated: March 2026
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border border-white/10">
          <thead>
            <tr className="bg-primary/10">
              <th className="text-left p-4 border-b border-white/10 w-1/3">
                Section
              </th>
              <th className="text-left p-4 border-b border-white/10">
                Details
              </th>
            </tr>
          </thead>

          <tbody>
            {policies.map((item, index) => (
              <tr key={index} className="border-b border-white/10">
                <td className="p-4 font-semibold">{item.title}</td>
                <td className="p-4 text-muted-foreground">{item.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}