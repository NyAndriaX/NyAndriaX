"use client";

import { Button, Card, Col, Row, Typography } from "antd";
import SectionLayout from "../layout/SectionLayout";

/**
 * Personal projects section with project cards.
 */
export default function Work() {
  const { Title, Paragraph, Text, Link } = Typography;
  const projects = [
    {
      icon: "🚀",
      title: "MPHP",
      description:
        "Framework PHP open source permettant de développer des applications web rapidement. Architecture MVC claire et léger (2,8.4MB).",
      linkLabel: "Voir sur GitHub",
      href: "https://github.com/",
    },
    {
      icon: "⚛️",
      title: "ReactTS Starter",
      description:
        "Projet React avec TypeScript et SCSS, pré-configuré avec PrimeReact et d'autres librairies UI essentielles.",
      linkLabel: "Voir sur NPM",
      href: "https://www.npmjs.com/",
    },
    {
      icon: "🛠️",
      title: "Devutils",
      description:
        "Projet Python pour configurer Apache sur Linux et simplifier la gestion des environnements de développement.",
      linkLabel: "Voir sur GitHub",
      href: "https://github.com/",
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

        <Row gutter={[24, 24]}>
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
            href="https://github.com/"
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
