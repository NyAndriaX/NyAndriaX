"use client";

import { Col, Divider, Row, Space, Typography } from "antd";
import { contactEmail, socialLinksData } from "../../lib/data";

/**
 * Footer contact section.
 */
export default function Contact() {
  const { Title, Text, Link } = Typography;
  const githubLink = socialLinksData.find((link) => link.label.toLowerCase() === "github")?.href ?? "#";
  const linkedinLink = socialLinksData.find((link) => link.label.toLowerCase() === "linkedin")?.href ?? "#";
  const mapsUrl = "https://maps.app.goo.gl/qgNts2Te3m7s53oY6";
  const gmailComposeUrl =
    "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=tsilavinaandriamahafaly01@gmail.com";
  const whatsappUrl = "https://web.whatsapp.com/send?phone=261341009650&text=Bonjour";

  return (
    <section
      id="contact"
      data-animate-section="true"
      style={{ backgroundColor: "#1a202c", borderTop: "1px solid #2d3748" }}
      className="!relative !z-10 !bg-[#1a202c] !py-12 md:!py-14"
    >
      <div className="!mx-auto !w-full !max-w-7xl !px-4 sm:!px-6 md:!px-10 lg:!px-12 xl:!px-16">
        <Row gutter={[32, 28]}>
          <Col xs={24} md={8}>
            <Space direction="vertical" size={8}>
              <Title level={5} className="!mb-0 !text-white">
                Tsilavina Henintsoa ANDRIAMAHAFALY
              </Title>
              <Text className="!text-slate-300">Software Engineer | Full Stack Developer</Text>
              <Link href={mapsUrl} target="_blank" rel="noopener noreferrer" className="!max-w-xs !text-slate-400 hover:!text-white">
                Bemasoandro Itaosy, 102 Antananarivo, Madagascar
              </Link>
            </Space>
          </Col>

          <Col xs={24} md={8}>
            <Space direction="vertical" size={6}>
              <Title level={5} className="!mb-1 !text-white">
                Liens
              </Title>
              <Link href={githubLink} target="_blank" rel="noopener noreferrer" className="!text-slate-300 hover:!text-white">
                GitHub
              </Link>
              <Link href={linkedinLink} target="_blank" rel="noopener noreferrer" className="!text-slate-300 hover:!text-white">
                LinkedIn
              </Link>
              <Link
                href="https://cvdesignr.com/p/637efe0b7a551"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-slate-300 hover:!text-white"
              >
                Télécharger CV
              </Link>
              <Link href={gmailComposeUrl} target="_blank" rel="noopener noreferrer" className="!text-slate-300 hover:!text-white">
                Email
              </Link>
            </Space>
          </Col>

          <Col xs={24} md={8}>
            <Space direction="vertical" size={6}>
              <Title level={5} className="!mb-1 !text-white">
                Contact
              </Title>
              <Link href={gmailComposeUrl} target="_blank" rel="noopener noreferrer" className="!text-slate-300 hover:!text-white">
                {contactEmail}
              </Link>
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="!text-slate-300 hover:!text-white"
              >
                +261 34 10 09 650
              </Link>
            </Space>
          </Col>
        </Row>

        <Divider className="!my-7 !border-slate-700" />

        <Text className="!block !text-center !text-slate-400">
          © 2026 Tsilavina Henintsoa ANDRIAMAHAFALY. Tous droits réservés.
        </Text>
      </div>
    </section>
  );
}
