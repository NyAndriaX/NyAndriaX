"use client";

import { Card, Col, Row, Tag, Typography } from "antd";
import SectionLayout from "../layout/SectionLayout";

/**
 * Technical skills section with grouped categories.
 */
export default function Expertise() {
  const { Title } = Typography;
  const skillGroups = [
    {
      title: "Développement Frontend",
      skills: ["React", "Vue.js", "Next.js", "Remix", "TypeScript", "JavaScript", "HTML/CSS", "Sass", "Redux"],
    },
    {
      title: "Développement Backend",
      skills: ["Node.js", "NestJS", "Express", "Python", "PHP", "Laravel"],
    },
    {
      title: "Bases de données",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Oracle", "TypeORM", "Prisma"],
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "AWS", "GCP", "Git", "Apache", "Nginx", "Kafka"],
    },
    {
      title: "Tests & Qualité",
      skills: ["Jest", "Cypress", "Playwright"],
    },
    {
      title: "Développement Mobile",
      skills: ["React Native", "Flutter", "Android", "iOS"],
    },
    {
      title: "Technologies Avancées",
      skills: ["Shopify", "OpenAI", "Microservices", "Agile"],
    },
  ];

  return (
    <SectionLayout
      id="expertise"
      backgroundColor="#f7fafc"
      fullHeight={false}
      autoHeight={false}
      className="!relative !z-10 !h-auto !min-h-[78vh] !py-16 md:!py-20 lg:!py-24"
    >
      <div className="!mx-auto !w-full !max-w-7xl">
        <Title level={2} className="!mb-12 !text-center !text-3xl !font-extrabold !text-[#5d64d6] sm:!text-4xl">
          Compétences techniques
        </Title>

        <Row gutter={[28, 28]}>
          {skillGroups.map((group) => (
            <Col xs={24} md={12} xl={8} key={group.title}>
              <Card
                bordered={false}
                className="!h-full !rounded-2xl !bg-white !shadow-[0_10px_28px_rgba(15,23,42,0.08)]"
                styles={{ body: { padding: 28, minHeight: 265 } }}
              >
                <Title level={3} className="!mb-5 !text-[30px] !font-extrabold !leading-tight !text-slate-800 sm:!text-[32px]">
                  {group.title}
                </Title>
                <div className="!flex !flex-wrap !gap-2.5">
                  {group.skills.map((skill) => (
                    <Tag
                      key={skill}
                      bordered={false}
                      className="!m-0 !rounded-full !bg-gradient-to-r !from-[#5f72e7] !to-[#7b4fd9] !px-4 !py-2 !text-[15px] !font-semibold !text-white"
                    >
                      {skill}
                    </Tag>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </SectionLayout>
  );
}
