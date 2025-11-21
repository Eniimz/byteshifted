import Image from "next/image";

interface FeatureCard {
  title: string;
  description: string;
  image: string;
  imagePosition: "top" | "bottom";
  gradientBg: string;
  decoration?: string;
}

export default function Whyus() {
  const features: FeatureCard[] = [
    {
      title: "Professional Branding:",
      description:
        "A branded domain email instantly elevates your business image. Instead of blending in with personal accounts, your communication looks polished and reliable.",
      image: "/images/whyus/branding-image-6fe690.png",
      imagePosition: "bottom",
      gradientBg:
        "linear-gradient(180deg, rgba(8, 19, 30, 1) 0%, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 0) 100%)",
    },
    {
      title: "Seamless Collaboration:",
      description:
        "Byteshifted turns email into a productivity hub. Share calendars, manage contacts, and align teams effortlessly within your inbox.",
      image: "/images/whyus/collaboration-image-43369e.png",
      imagePosition: "bottom",
      gradientBg:
        "linear-gradient(180deg, rgba(5, 13, 20, 1) 7%, rgba(14, 15, 15, 1) 25%, rgba(5, 5, 5, 1) 41%, rgba(4, 5, 7, 1) 100%)",
      decoration: "/images/whyus/collaboration-decoration.svg",
    },
    {
      title: "Strong Privacy & Security:",
      description:
        "Cybersecurity is non-negotiable. With advanced spam filters, malware protection, and enterprise-grade encryption, your data stays safe from threats.",
      image: "/images/whyus/security-image-1.png",
      imagePosition: "bottom",
      gradientBg: "linear-gradient(180deg, rgba(0, 0, 0, 1) 7%)",
    },
    {
      title: "Strong Privacy & Security:",
      description:
        "Cybersecurity is non-negotiable. With advanced spam filters, malware protection, and enterprise-grade encryption, your data stays safe from threats.",
      image: "/images/whyus/security-image-2-2a999d.png",
      imagePosition: "bottom",
      gradientBg:
        "linear-gradient(180deg, rgba(12, 30, 26, 1) 0%, rgba(0, 0, 0, 1) 45%)",
    },
  ];

  return (
    <section className="whyus-section">
      <div className="whyus-content-left">
        <h2 className="whyus-heading">
          Why Choose Byteshifted Email Hosting?
        </h2>
        <p className="whyus-description">
          At Byteshifted, we believe business email should do more than just
          send and receive messages, it should help you build trust, protect
          sensitive data, and keep your team connected. Our hosting solutions
          are designed with modern businesses in mind, giving you a platform
          that scales as you grow.
        </p>
        <button className="whyus-button">Upgrade Your Email Now !</button>
      </div>
      <div className="whyus-cards-container">
        {features.map((feature, index) => (
          <div key={index} className={`whyus-card ${index === 1 ? 'whyus-card-2' : ''} ${index === 2 ? 'whyus-card-3' : ''}`}>
            <div
              className="whyus-card-gradient"
              style={{ background: feature.gradientBg }}
            />
            {feature.decoration && (
              <Image
                src={feature.decoration}
                alt=""
                width={505}
                height={400}
                className="whyus-card-decoration"
              />
            )}
            <div className="whyus-card-text">
              <h3 className="whyus-card-title">{feature.title}</h3>
              <p className="whyus-card-description">{feature.description}</p>
            </div>
            <Image
              src={feature.image}
              alt={feature.title}
              width={505}
              height={400}
              className="whyus-card-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}