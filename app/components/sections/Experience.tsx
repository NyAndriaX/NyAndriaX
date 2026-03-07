"use client";

import { Card, Space, Tag, Timeline, Typography } from "antd";
import SectionLayout from "../layout/SectionLayout";

/**
 * Professional experience section with timeline layout.
 */
export default function Experience() {
  const { Title, Paragraph, Text } = Typography;
  const experiences = [
    {
      period: "Depuis Octobre 2023",
      role: "Lead Développeur",
      company: "Giraffe Studio - Full Remote",
      highlights: [
        "Développement d'une application marketplace pour Shopify",
        "Automatisation de la gestion des boutiques Shopify",
        "Création et optimisation de modèles d'IA",
      ],
      skills: ["React", "Remix", "Vue.js", "Shopify", "OpenAI", "Python", "GCP", "Kafka"],
    },
    {
      period: "Depuis Septembre 2023",
      role: "Développeur Java",
      company: "Egokia - Full Remote",
      highlights: [
        "Maintenance proactive pour une performance optimale",
        "Tests automatisés pour une qualité constante",
        "Collaboration UX/UI et gestion agile de projet",
      ],
      skills: ["Java", "Spring Boot", "Microservices", "Kafka", "Angular", "VueJS"],
    },
  ];

  return (
    <SectionLayout
      id="experience"
      backgroundColor="#fff"
      fullHeight={false}
      autoHeight={false}
      className="!relative !z-10 !h-auto !min-h-[78vh] !py-16 md:!py-20 lg:!py-24"
    >
      <div className="!mx-auto !w-full !max-w-7xl">
        <Title level={2} className="!mb-14 !text-center !text-3xl !font-extrabold !text-[#5d64d6] sm:!text-4xl">
          Expérience professionnelle
        </Title>

        <div className="!mx-auto !max-w-5xl">
          <Timeline
            mode="left"
            className="experience-timeline"
            items={experiences.map((experience, index) => ({
              color: "#6f7be6",
              children: (
                <Card
                  bordered={false}
                  className="!rounded-2xl !bg-white !shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
                  styles={{ body: { padding: 28 } }}
                >
                  <Tag
                    bordered={false}
                    className="!mb-4 !rounded-full !bg-gradient-to-r !from-[#f06aa8] !to-[#a069f2] !px-4 !py-1.5 !text-[13px] !font-semibold !text-white"
                  >
                    {experience.period}
                  </Tag>

                  <Title level={3} className="!mb-2 !text-[28px] !font-extrabold !leading-tight !text-slate-800 sm:!text-[30px]">
                    {experience.role}
                  </Title>
                  <Paragraph className="!mb-4 !text-[17px] !font-medium !text-slate-600">{experience.company}</Paragraph>

                  <ul className="!mb-5 !space-y-2 !pl-4 !text-[16px] !text-slate-600">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="!list-disc">
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <Space size={[8, 8]} wrap>
                    {experience.skills.map((skill) => (
                      <Text key={`${index}-${skill}`} className="!text-[13px] !font-semibold !text-[#6f7be6]">
                        {skill}
                      </Text>
                    ))}
                  </Space>
                </Card>
              ),
            }))}
          />
        </div>
      </div>
    </SectionLayout>
  );
}
