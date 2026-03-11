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
      period: "Depuis octobre 2023",
      role: "Software Engineer",
      company: "Giraffes Studio - Full remote",
      highlights: [
        "Recherche, conception et gestion de programmes logiciels.",
        "Test et évaluation de nouveaux programmes.",
        "Modification de logiciels pour corriger les erreurs et améliorer les performances.",
        "Déploiement d'outils logiciels, de processus et de métriques.",
        "Direction de la programmation logicielle et du développement de la documentation.",
        "Rédaction et implémentation de code.",
        "Préparation de rapports sur les spécifications de projets de programmation, les activités ou le statut.",
        "Consultation avec le personnel d'ingénierie pour évaluer les interfaces logiciel-matériel et développer des spécifications et exigences de performance.",
      ],
      skills: ["ReactJS", "NextJs", "Python", "Shopify", "OpenAI", "NodeJs", "Javascript", "Typescript", "MongoDB", "Bubble.io", "webflow", "zapier"],
    },
    {
      period: "D'août 2025 à septembre 2025",
      role: "Software Developer",
      company: "AutoDashboard - Full remote",
      highlights: [
        "Développement logiciel pour la solution SaaS AutoDashboard, spécialisée dans la simplification de la gestion après-vente automobile.",
        "Conception et implémentation de fonctionnalités pour optimiser les processus des concessions automobiles, en remplaçant les tableurs Excel par une plateforme tout-en-un.",
        "Gestion de programmes logiciels adaptés à la gestion des stocks, des réparations et du service client dans le secteur automobile.",
        "Test et évaluation des fonctionnalités pour assurer une performance optimale et une intégration fluide.",
        "Modification et optimisation du code pour corriger les erreurs et améliorer l'efficacité du logiciel.",
        "Collaboration à la rédaction de documentation technique et à la définition des spécifications du projet.",
      ],
      skills: ["ReactJs", "Django", "Figma"],
    },
    {
      period: "De juin 2023 à novembre 2023",
      role: "Software Developer",
      company: "Club de ceos - Full remote",
      highlights: [
        "Conception et développement d'un site web responsive pour un club de leadership, créant une plateforme engageante dédiée aux membres pour favoriser les interactions, le networking et le développement personnel.",
        "Leadership d'une équipe de développeurs pour la réalisation du projet, assurant une coordination efficace et une livraison dans les délais.",
        "Développement full stack avec React et Next.js pour une interface utilisateur dynamique, rapide et SEO-friendly, intégré à une base de données MySQL pour une gestion sécurisée et efficace des profils membres, événements, ressources et contenus.",
        "Optimisation pour la responsivité sur tous les appareils (mobile, tablette, desktop), améliorant l'accessibilité et l'expérience utilisateur globale.",
        "Mise en place de fonctionnalités interactives telles que forums, calendriers d'événements et outils de collaboration pour renforcer l'engagement communautaire.",
      ],
      skills: ["ReactJs", "NextJS", "GCP", "Mysql"],
    },
    {
      period: "De mars 2022 à février 2023",
      role: "Web Developer",
      company: "WevComFactory - Full remote",
      highlights: [
        "Conception et développement d'une landing page responsive pour un événement technologique au sein d'un projet SaaS, visant à promouvoir l'événement de manière impactante et à attirer un public ciblé.",
        "Collaboration étroite avec l'équipe sur l'UI/UX pour concevoir un design attrayant, moderne et fonctionnel avec React et Material UI, intégrant des éléments visuels engageants et une structure intuitive.",
        "Mise en œuvre de fonctionnalités interactives pour une expérience utilisateur fluide, incluant des sections dédiées aux inscriptions, à l'agenda, aux speakers et aux partenaires, avec une présentation claire et persuasive des contenus.",
        "Optimisation pour la responsivité sur tous les appareils (mobile, tablette, desktop), garantissant une accessibilité optimale, une charge rapide et une compatibilité cross-browser.",
        "Tests rigoureux et itérations basées sur des retours pour améliorer l'engagement utilisateur et maximiser les conversions liées à l'événement.",
      ],
      skills: ["React", "Material UI"],
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
          Expériences professionnelles
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
                      <Tag
                        key={`${index}-${skill}`}
                        bordered={false}
                        className="!rounded-full !bg-[#edf1ff] !px-3 !py-1 !text-[12px] !font-semibold !text-[#5a64d1]"
                      >
                        {skill}
                      </Tag>
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
