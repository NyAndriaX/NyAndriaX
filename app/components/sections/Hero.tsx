"use client";

import Image from "next/image";

const HERO_CONTAINER_STYLE = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  perspective: "1000px",
} as const;

const PROFILE_CONTAINER_STYLE = {
  position: "relative",
  width: 350,
  height: 500,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
} as const;

const HERO_IMAGE_PROPS = {
  className: "profile-image",
  src: "/profil.jpeg",
  alt: "Profile",
  fill: true,
  priority: true,
  sizes: "350px",
} as const;

const HERO_ANIMATION_STYLES = `
  @keyframes morph {
    0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
    25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
    50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
    75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
  }

  @keyframes float {
    0%, 100% {
      transform: perspective(1000px) rotateY(-15deg) rotateX(5deg) translateY(0px);
    }
    50% {
      transform: perspective(1000px) rotateY(-15deg) rotateX(5deg) translateY(-20px);
    }
  }

  @keyframes shapeFloat {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-30px) rotate(120deg); }
    66% { transform: translateY(15px) rotate(240deg); }
  }

  .profile-image-wrapper {
    position: relative;
    width: 350px;
    height: 350px;
    transform-style: preserve-3d;
    transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);
    transition: transform 0.3s ease;
    animation: float 6s ease-in-out infinite;
  }

  .profile-image-wrapper:hover {
    transform: perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.05);
  }

  .profile-image-wrapper::before {
    content: "";
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(
      135deg,
      rgba(102, 126, 234, 0.4) 0%,
      rgba(118, 75, 162, 0.4) 50%,
      rgba(240, 147, 251, 0.4) 100%
    );
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    filter: blur(25px);
    z-index: 1;
    animation: morph 8s ease-in-out infinite;
    opacity: 0.8;
  }

  .profile-image-wrapper::after {
    content: "";
    position: absolute;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 60%);
    border-radius: inherit;
    z-index: 3;
    pointer-events: none;
    mix-blend-mode: overlay;
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    position: relative;
    z-index: 2;
    box-shadow:
      0 0 0 15px rgba(102, 126, 234, 0.1),
      0 0 0 30px rgba(118, 75, 162, 0.08),
      0 0 60px rgba(102, 126, 234, 0.3),
      0 20px 80px rgba(0, 0, 0, 0.2),
      inset 0 0 50px rgba(255, 255, 255, 0.1);
    filter: contrast(1.1) brightness(1.05);
    animation: morph 8s ease-in-out infinite;
  }

  .floating-shapes {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    top: 0;
    left: 0;
  }

  .shape {
    position: absolute;
    background: linear-gradient(
      135deg,
      rgba(102, 126, 234, 0.15) 0%,
      rgba(240, 147, 251, 0.15) 100%
    );
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    filter: blur(20px);
    animation: shapeFloat 8s ease-in-out infinite;
  }

  .shape-1 {
    width: 200px;
    height: 200px;
    top: -50px;
    left: -50px;
    animation-delay: 0s;
  }

  .shape-2 {
    width: 150px;
    height: 150px;
    bottom: -30px;
    right: -30px;
    animation-delay: 2s;
  }

  .shape-3 {
    width: 180px;
    height: 180px;
    top: 50%;
    left: -80px;
    transform: translateY(-50%);
    animation-delay: 4s;
  }
`;

export default function Hero() {
  const { className, src, alt, fill, priority, sizes } = HERO_IMAGE_PROPS;

  return (
    <section id="home" style={HERO_CONTAINER_STYLE}>
      <style>{HERO_ANIMATION_STYLES}</style>

      <div style={PROFILE_CONTAINER_STYLE}>
        <div className="floating-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
        </div>

        <div className="profile-image-wrapper">
          <Image className={className} src={src} alt={alt} fill={fill} priority={priority} sizes={sizes} />
        </div>
      </div>
    </section>
  );
}

