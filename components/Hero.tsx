import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-subtitle">Email Hosting</h2>
          
          <h1 className="hero-title">
            <span className="text-white">Professional</span>
            <span className="text-accent">.</span>
            <span className="text-white"> Secure</span>
            <span className="text-accent">.</span>
            <span className="text-white"> Scalable</span>
            <span className="text-accent">.</span>
          </h1>
          
          <p className="hero-description">
            Your email is the front door to your business. With Byteshifted, you get branded, secure, and reliable email hosting designed to grow with you — whether you&apos;re a freelancer, a startup, or an enterprise.
          </p>
          
          <button className="hero-button">
            Get Started Today
          </button>
        </div>
      </div>

      <div className="icons-container">
        <Image
          src="/images/hero/hero-icons.png"
          alt="Email hosting services illustration"
          width={1481}
          height={784}
          priority
          className="hero-image"
        />
      </div>
    </section>
  );
}
