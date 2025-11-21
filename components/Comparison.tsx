import Image from "next/image";

export default function Comparison() {
  const comparisonPoints = [
    {
      title: "Security:",
      description:
        "Free services offer only basic protection. Byteshifted includes advanced spam filters, virus protection, and enterprise-grade encryption.",
    },
    {
      title: "Branding:",
      description:
        "Free emails look generic (yourname@gmail.com). Byteshifted gives you a professional identity (you@yourcompany.com) that builds trust.",
    },
    {
      title: "Storage:",
      description:
        "Free inboxes have tight limits. Byteshifted scales with you — from 5GB to fully customized storage.",
    },
    {
      title: "Collaboration:",
      description:
        "Free tools lack teamwork features. Byteshifted provides shared calendars, contacts, and tasks.",
    },
    {
      title: "Support:",
      description:
        "Free email means self-service only. Byteshifted offers priority and even 24/7 support, depending on your plan.",
    },
  ];

  return (
    <section className="comparison-section">
      <div className="comparison-container">
        <Image
          src="/images/comparison/comparison-image.svg"
          alt="Comparison illustration"
          width={774}
          height={807}
          className="comparison-image"
        />
        <div className="comparison-content">
          <h2 className="comparison-heading">
            Free Email <span className="comparison-vs">vs</span>
            <br />
            Byteshifted Hosting
          </h2>
          <div className="comparison-text-wrapper">
            <p className="comparison-intro">
              Many people start with free providers like Gmail or Yahoo, but the
              difference compared to Byteshifted is clear:
            </p>
            <div className="comparison-points">
              {comparisonPoints.map((point, index) => (
                <p key={index} className="comparison-point">
                  <span className="comparison-point-title">{point.title}</span>{" "}
                  {point.description}
                </p>
              ))}
            </div>
            <p className="comparison-conclusion">
              With Byteshifted, you get credibility, security, and scalability
              that free email services simply can't match.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}