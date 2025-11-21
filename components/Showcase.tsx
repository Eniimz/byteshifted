import Image from "next/image";

export default function Showcase() {
  return (
    <section className="showcase-section">
      <div className="showcase-content">
        <div className="showcase-text-section">
          <h2 className="showcase-title">Reimagining Email Hosting</h2>
          <p className="showcase-description">
            We have combined enterprise level security with scalable solutions to give businesses of all sizes a professional edge.
          </p>
          <button className="showcase-button">
            Explore More Packages
          </button>
        </div>

        <div className="showcase-cards-container">
          <Image
            src="/images/showcase/showcase-bg.png"
            alt="Background"
            width={3000}
            height={2100}
            className="showcase-bg-image"
            quality={100}
          />
          
          <div className="showcase-cards-grid">
            {/* Center Avatar Card */}
            <div className="showcase-card card-avatar">
              <Image
                src="/images/showcase/card-icon-1.svg"
                alt="Professional"
                width={294}
                height={380}
                className="card-avatar-image"
                quality={100}
              />
            </div>

            {/* Card 1 - 150+ businesses */}
            <div className="showcase-card card-1">
              <div className="card-text">
                <Image
                  src="/images/showcase/globe.png"
                  alt=""
                  width={200}
                  height={200}
                  className="card-icon-small"
                  quality={100}
                />
                <div className="card-label">150+ businesses supported across industries</div>
              </div>
              <Image
                src="/images/showcase/card-decoration-5.svg"
                alt=""
                width={380}
                height={380}
                className="card-decoration"
                quality={100}
              />
            </div>

            {/* Card 2 - 95% Customer Satisfaction */}
            <div className="showcase-card card-2">
              <div className="card-text">
                <div className="card-stat">95%</div>
                <div className="card-label">Customer Satisfaction Rate</div>
              </div>
              <Image
                src="/images/showcase/2_squre_ring.svg"
                width={200}
                height={200}
                alt=""    
                className="card-decoration"
                quality={100}
              />
            </div>

            {/* Card 3 - 5x Faster Email */}
            <div className="showcase-card card-3">
              <div className="card-text">
                <div className="card-stat">5x</div>
                <div className="card-label">Faster Email Delivery</div>
              </div>
              <Image
                src="/images/showcase/single_ring.svg"
                alt=""
                width={200}
                height={200}
                className="card-decoration"
                quality={100}
              />
            </div>

            {/* Card 4 - Reliable uptime */}
            <div className="showcase-card card-4">
              <div className="card-text">
                <Image
                  src="/images/showcase/plant.png"
                  alt=""
                  width={200}
                  height={200}
                  className="card-icon-small plant"
                  quality={100}
                />
                <div className="card-label">Reliable uptime & fast support</div>
              </div>
              <Image
                src="/images/showcase/card-decoration-4.svg"
                alt=""
                width={380}
                height={380}
                className="card-decoration"
                quality={100}
              />
            </div>

            {/* Card 5 - 99.7% Spam */}
            <div className="showcase-card card-5">
              <div className="card-text">
                <div className="card-stat">99.7%</div>
                <div className="card-label">Spam Detection Rate</div>
              </div>
              <Image
                src="/images/showcase/overlap.png"
                alt=""
                width={200}
                height={200}
                className="card-decoration"
                quality={100}
              />
            </div>

            {/* Card 6 - 100% Encrypted */}
            <div className="showcase-card card-6">
              <div className="card-text">
                <div className="card-stat">100%</div>
                <div className="card-label">Encrypted Connections (SSL/TLS)</div>
              </div>
              <Image
                src="/images/showcase/diamond.svg"
                alt=""
                width={200}
                height={200}
                className="card-decoration"
                quality={100}
              />
            </div>

            {/* Card 7 - Solutions that scale */}
            <div className="showcase-card card-7">
              <div className="card-text">
                <Image
                  src="/images/showcase/energy.svg"
                  alt=""
                  width={100}
                  height={150}
                  className="card-icon-small"
                  quality={100}
                />
                <div className="card-label">Solutions that scale as you grow</div>
              </div>
              <Image
                src="/images/showcase/card-decoration-2.svg"
                alt=""
                width={380}
                height={380}
                className="card-decoration"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
