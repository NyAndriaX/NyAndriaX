"use client";

import { LinkedinOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Typography } from "antd";
import SectionLayout from "../layout/SectionLayout";

/**
 * Personal projects section with project cards.
 */
export default function Work() {
  const { Title, Paragraph, Text, Link } = Typography;
  const projects = [
    {
      icon: <LinkedinOutlined className="!text-[#0A66C2]" />,
      title: "linkedIn-prospect-helpers",
      description:
        "Outil d'aide a la prospection LinkedIn pour organiser les prospects et optimiser le workflow de prospection.",
      linkLabel: "Voir la démo",
      href: "https://linked-in-prospects-helper--tsilavinaandria.replit.app/",
    },
    {
      icon: <img src="/cartes.png" alt="Tsabo9 cards icon" className="!h-12 !w-auto" />,
      title: "tsabo9",
      description:
        "Tsabo9 - Le jeu de cartes ultime en ligne. Deploie ta strategie et mise sur la chance pour affronter des joueurs du monde entier, totaliser tes cartes et decrocher la victoire.",
      linkLabel: "Voir sur GitHub",
      href: "https://github.com/NyAndriaX/tsabo9",
    },
    {
      icon: "🥤",
      title: "Distributeur Virtuel",
      description: "Application web moderne pour la gestion d'un distributeur de boissons virtuel.",
      linkLabel: "Voir sur GitHub",
      href: "https://github.com/NyAndriaX/boisson-distributeur",
    },
  ];

  return (
    <SectionLayout
      id="work"
      backgroundColor="#f7fafc"
      fullHeight={false}
      autoHeight={false}
      className="!relative !z-10 !h-auto !min-h-[72vh] !py-16 md:!py-20 lg:!py-24"
    >
      <div className="!mx-auto !w-full !max-w-7xl">
        <Title level={2} className="!mb-12 !text-center !text-3xl !font-extrabold !text-[#5d64d6] sm:!text-4xl">
          Projets personnels
        </Title>

        <Row gutter={[24, 24]} justify="center">
          {projects.map((project) => (
            <Col xs={24} md={12} xl={8} key={project.title}>
              <Card
                bordered={false}
                className="!h-full !rounded-2xl !bg-white !shadow-[0_10px_26px_rgba(15,23,42,0.08)]"
                styles={{ body: { padding: 24, minHeight: 290 } }}
              >
                <Text className="!mb-4 !block !text-4xl !leading-none">{project.icon}</Text>

                <Title level={3} className="!mb-3 !text-[30px] !font-extrabold !text-slate-800">
                  {project.title}
                </Title>

                <Paragraph className="!mb-6 !text-[16px] !leading-7 !text-slate-500">{project.description}</Paragraph>

                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!text-[15px] !font-semibold !text-[#5d64d6]"
                >
                  {project.linkLabel} →
                </Link>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="!mt-10 !text-center">
          <Button
            href="https://github.com/NyAndriaX"
            target="_blank"
            rel="noopener noreferrer"
            size="large"
            className="!h-[48px] !rounded-full !border-[#94a3ff] !px-9 !text-[16px] !font-semibold !text-[#5d64d6]"
          >
            Voir plus de projets sur GitHub
          </Button>
        </div>
      </div>
    </SectionLayout>
  );
}
