import Image from "next/image";

export default function Header() {
  return (
    <header className="header-nav">
      <div className="logo">
        <Image
          src="/images/logo.svg"
          alt="ByteShifted"
          width={146.67}
          height={36.45}
          priority
        />
      </div>
      <nav>
        <span className="nav-link">EMAIL HOSTING</span>
      </nav>
    </header>
  );
}
