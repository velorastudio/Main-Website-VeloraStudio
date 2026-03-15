export default function Terms() {
  const terms = [
    {
      title: "1. About Velora Studio",
      content:
        "Velora Studio is a digital agency providing website design, development, e-commerce solutions, website maintenance, and digital consulting services."
    },
    {
      title: "2. Acceptance of Terms",
      content:
        "By accessing our website or using our services, you confirm that you have read, understood, and agreed to these Terms and Conditions."
    },
    {
      title: "3. Client Responsibilities",
      content:
        "Clients must provide accurate requirements, project materials, branding assets, and timely responses. Delays may affect the project timeline."
    },
    {
      title: "4. Project Agreement",
      content:
        "Each project includes a proposal or quotation defining scope, deliverables, timeline, and pricing. Approval or advance payment confirms the project."
    },
    {
      title: "5. Payment Terms",
      content:
        "Projects require a 30–50% advance payment before work begins. Remaining payment is due before final delivery or website launch."
    },
    {
      title: "6. Revisions Policy",
      content:
        "Standard projects include 2–3 revisions. Additional revisions or major scope changes may incur additional charges."
    },
    {
      title: "7. Project Timeline",
      content:
        "Timelines depend on project complexity, client response time, and availability of project materials."
    },
    {
      title: "8. Intellectual Property Rights",
      content:
        "After full payment, the client owns the final project. Velora Studio may showcase completed projects in its portfolio."
    },
    {
      title: "9. Third-Party Services",
      content:
        "Projects may include hosting providers, APIs, plugins, and payment gateways. Velora Studio is not responsible for third-party issues."
    },
    {
      title: "10. Cancellation & Refund",
      content:
        "Advance payments are generally non-refundable. If cancelled after work starts, charges may apply for completed work."
    },
    {
      title: "11. Website Maintenance",
      content:
        "Maintenance and support are not included unless specified in a separate maintenance agreement."
    },
    {
      title: "12. Limitation of Liability",
      content:
        "Velora Studio is not liable for damages caused by service interruptions, hosting downtime, or third-party software issues."
    },
    {
      title: "13. Website Usage Restrictions",
      content:
        "Users may not copy content, disrupt the website, or use the site for unlawful purposes."
    },
    {
      title: "14. Changes to Terms",
      content:
        "Velora Studio may update these terms at any time. Continued use of the website means acceptance of the updated terms."
    },
    {
      title: "15. Governing Law",
      content:
        "These terms are governed by the laws of India."
    },
    {
      title: "16. Contact Information",
      content:
        "Velora Studio | Email: officialvelorastudio@gmail.com | Website: velorastudio.in"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>

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
                Description
              </th>
            </tr>
          </thead>

          <tbody>
            {terms.map((item, index) => (
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