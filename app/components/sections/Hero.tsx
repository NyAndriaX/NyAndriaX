"use client";

import Image from "next/image";
import { Button, Col, Row, Space, Typography } from "antd";
import { HERO_CONTENT } from "../../lib/constants";
import { socialLinksData } from "../../lib/data";
import { scrollToSection } from "../../lib/utils";

const HERO_CONTAINER_STYLE = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
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
  sizes: "(max-width: 640px) 280px, 350px",
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

  @media (max-width: 991px) {
    .hero-text-col {
      text-align: center;
    }

    .hero-action-group {
      justify-content: center;
    }
  }

  @media (min-width: 992px) {
    .hero-content-row {
      column-gap: 72px;
    }
  }

  @media (max-width: 640px) {
    .profile-stage {
      transform: scale(0.86);
      transform-origin: top center;
      margin-top: -8px;
      margin-bottom: -22px;
    }

    .profile-image-wrapper {
      width: 280px;
      height: 280px;
    }

    .shape-1 {
      width: 160px;
      height: 160px;
      top: -28px;
      left: -35px;
    }

    .shape-2 {
      width: 125px;
      height: 125px;
      right: -24px;
      bottom: -24px;
    }

    .shape-3 {
      width: 140px;
      height: 140px;
      left: -58px;
    }
  }
`;

export default function Hero() {
  const { className, src, alt, fill, priority, sizes } = HERO_IMAGE_PROPS;
  const githubLink = socialLinksData.find((link) => link.label.toLowerCase() === "github")?.href ?? "#";
  const { Title, Paragraph, Text } = Typography;

  return (
    <section
      id="home"
      style={HERO_CONTAINER_STYLE}
      className="!px-4 !pb-12 !pt-24 sm:!px-6 md:!px-10 lg:!px-12 xl:!px-16"
    >
      <style>{HERO_ANIMATION_STYLES}</style>

      <div className="!mx-auto !w-full !max-w-7xl">
        <Row
          gutter={[56, 36]}
          align="middle"
          justify="space-between"
          style={{ marginInline: 0 }}
          className="hero-content-row !min-h-[calc(100vh-7rem)] !w-full"
        >
          <Col xs={{ span: 24, order: 2 }} lg={{ span: 12, order: 1 }} className="hero-text-col">
            <Space direction="vertical" size={20} className="!w-full">
              <Text style={{ color: "#64748b", fontSize: 16, fontWeight: 500 }}>Bonjour, je suis</Text>
              

              <Title
                level={1}
                style={{
                  color: "#5d64d6",
                  margin: 0,
                  fontSize: "clamp(2.7rem, 5.8vw, 4.5rem)",
                  lineHeight: 1.1,
                }}
              >
                {HERO_CONTENT.name}
              </Title>

              <Title level={2} style={{ color: "#0f172a", margin: 0, fontSize: "clamp(1.85rem, 3.6vw, 2.45rem)" }}>
                Software Engineer Full Stack
              </Title>

              <Paragraph
                style={{ maxWidth: 700, color: "#475569", fontSize: 19, lineHeight: 1.8, marginBottom: 0 }}
              >
                Ingénieur en génie logiciel passionné par la tech, avec plus de 6 ans d&apos;expérience dans le
                développement d&apos;applications web performantes et innovantes.
              </Paragraph>

              <Space wrap size={12} style={{ paddingTop: 8 }} className="hero-action-group">
                <Button
                  type="primary"
                  size="large"
                  onClick={() => scrollToSection("contact")}
                  style={{
                    borderRadius: 999,
                    backgroundColor: "#5d64d6",
                    borderColor: "#5d64d6",
                    fontWeight: 600,
                    fontSize: 17,
                    height: 50,
                    paddingInline: 24,
                  }}
                  aria-label="Aller à la section contact"
                >
                  Me contacter
                </Button>

                <a href="/cv.pdf" download>
                  <Button
                    size="large"
                    style={{
                      borderRadius: 999,
                      borderColor: "#9ca3ff",
                      color: "#5d64d6",
                      fontWeight: 600,
                      fontSize: 17,
                      height: 50,
                      paddingInline: 24,
                    }}
                  >
                    Télécharger CV
                  </Button>
                </a>

                <Button
                  size="large"
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    borderRadius: 999,
                    borderColor: "#9ca3ff",
                    color: "#5d64d6",
                    fontWeight: 600,
                    fontSize: 17,
                    height: 50,
                    paddingInline: 24,
                  }}
                >
                  GitHub
                </Button>
            </Space>
            </Space>
          </Col>

          <Col xs={{ span: 24, order: 1 }} lg={{ span: 10, order: 2 }}>
            <div className="!mx-auto !flex !w-full !max-w-sm !items-center !justify-center lg:!justify-end">
              <div style={PROFILE_CONTAINER_STYLE} className="profile-stage">
                <div className="floating-shapes">
                  <div className="shape shape-1" />
                  <div className="shape shape-2" />
                  <div className="shape shape-3" />
                </div>

                <div className="profile-image-wrapper">
                  <Image className={className} src={src} alt={alt} fill={fill} priority={priority} sizes={sizes} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

