import Image from "next/image";

interface PackageFeature {
  icon: string;
  text: string;
  iconSize?: number;
}

interface PackageCardProps {
  decoration: string;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  features: PackageFeature[];
  perfectFor: string[];
  isPopular?: boolean;
}

function PackageCard({
  decoration,
  title,
  subtitle,
  price,
  description,
  features,
  perfectFor,
  isPopular,
}: PackageCardProps) {
  return (
    <div className="package-card-wrapper">
      {isPopular && (
        <div className="popular-badge">
          <Image
            src="/images/packages/ribbon-icon.svg"
            alt="Popular"
            width={38}
            height={38}
          />
          <span>Popular Choice</span>
        </div>
      )}
      <div className="package-card">
        <div className="package-decoration-gradient" />
        <Image
          src={decoration}
          alt="Package decoration"
          width={280}
          height={280}
          className="package-decoration"
        />
        <h3 className="package-title">{title}</h3>
        <p className="package-subtitle">{subtitle}</p>
        <p className="package-price">{price}</p>
        <div className="package-details">
          <p className="package-description">{description}</p>
          <div className="package-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <Image
                  src={feature.icon}
                  alt=""
                  width={feature.iconSize || 24}
                  height={feature.iconSize || 24}
                  className="feature-icon"
                />
                <span className="feature-text">{feature.text}</span>
              </div>
            ))}
          </div>
          <div className="package-divider" />
          <div className="perfect-for">
            <p className="perfect-for-title">Perfect for:</p>
            {perfectFor.map((item, index) => (
              <p key={index} className="perfect-for-item">
                {item}
              </p>
            ))}
          </div>
        </div>
        <button className="package-button">Get Started</button>
      </div>
    </div>
  );
}

export default function Packages() {
  const packages: PackageCardProps[] = [
    {
      decoration: "/images/packages/prime-mail-decoration-new.svg",
      title: "Prime Mail",
      subtitle: "(Basic Package)",
      price: "$200",
      description:
        "For individuals and small teams who need credibility without complexity.\n\nWhat you get:",
      features: [
        { icon: "/images/packages/user-icon.svg", text: "1–10 user" },
        {
          icon: "/images/packages/email-icon.svg",
          text: "Branded domain email (e.g., you@company.com)",
        },
        {
          icon: "/images/packages/protection-icon.svg",
          text: "Basic spam & virus protection",
        },
        {
          icon: "/images/packages/storage-icon.svg",
          text: "5GB storage per inbox",
          iconSize: 25,
        },
      ],
      perfectFor: [
        "Freelancers moving away from Gmail/Yahoo",
        "Startups needing a professional look on a budget",
      ],
    },
    {
      decoration: "/images/packages/velocity-mail-decoration-new.svg",
      title: "Velocity Mail",
      subtitle: "(Basic Package)",
      price: "$200",
      description:
        "For individuals and small teams who need credibility without complexity.\n\nWhat you get:",
      features: [
        { icon: "/images/packages/user-icon.svg", text: "1–10 user" },
        {
          icon: "/images/packages/email-icon.svg",
          text: "Branded domain email (e.g., you@company.com)",
        },
        {
          icon: "/images/packages/protection-icon.svg",
          text: "Basic spam & virus protection",
        },
        {
          icon: "/images/packages/storage-icon.svg",
          text: "5GB storage per inbox",
          iconSize: 25,
        },
      ],
      perfectFor: [
        "Freelancers moving away from Gmail/Yahoo",
        "Startups needing a professional look on a budget",
      ],
    },
    {
      decoration: "/images/packages/fusion-mail-decoration-new.svg",
      title: "Fusion Mail",
      subtitle: "(Basic Package)",
      price: "$200",
      description:
        "For individuals and small teams who need credibility without complexity.\n\nWhat you get:",
      features: [
        { icon: "/images/packages/user-icon.svg", text: "1–10 user" },
        {
          icon: "/images/packages/email-icon.svg",
          text: "Branded domain email (e.g., you@company.com)",
        },
        {
          icon: "/images/packages/protection-icon.svg",
          text: "Basic spam & virus protection",
        },
        {
          icon: "/images/packages/storage-icon.svg",
          text: "5GB storage per inbox",
          iconSize: 25,
        },
      ],
      perfectFor: [
        "Freelancers moving away from Gmail/Yahoo",
        "Startups needing a professional look on a budget",
      ],
      isPopular: true,
    },
  ];

  return (
    <section className="packages-section">
      <h2 className="packages-heading">Our Packages</h2>
      <div className="packages-container">
        {packages.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
    </section>
  );
}