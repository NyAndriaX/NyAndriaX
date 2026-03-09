"use client";

import { Card, Col, Row, Space, Typography } from "antd";
import SectionLayout from "../layout/SectionLayout";

/**
 * About section displayed right after hero.
 */
export default function About() {
  const { Title, Paragraph, Text } = Typography;
  const stats = [
    { value: "4+", label: "Années d'expérience" },
    { value: "10", label: "Technologies maîtrisées" },
    { value: "20+", label: "Projets réalisés" },
  ];
  const mapsUrl =
    "https://maps.app.goo.gl/qgNts2Te3m7s53oY6";
  const gmailComposeUrl =
    "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=tsilavinaandriamahafaly01@gmail.com";
  const whatsappUrl = "https://web.whatsapp.com/send?phone=261341009650&text=Bonjour";

  return (
    <SectionLayout
      id="about"
      backgroundColor="#ffffff"
      fullHeight={false}
      autoHeight={false}
      className="!relative !z-10 !h-auto !min-h-[72vh] !py-14 md:!py-18 lg:!py-20"
    >
      <div className="!mx-auto !w-full !max-w-6xl">
        <Title level={2} className="!mb-12 !text-center !text-3xl !font-extrabold !text-[#5d64d6] sm:!text-4xl">
          À propos de moi
        </Title>

        <Row gutter={[48, 32]} className="lg:!items-start">
          <Col xs={24} lg={12}>
            <div className="!max-w-xl">
              <Paragraph className="!mb-6 !text-[17px] !leading-8 !text-slate-600 md:!text-[18px]">
                Une personne passionnée par l&apos;informatique, dynamique dans ce domaine, qui n&apos;hésite pas à
                s&apos;engager car plus on avance ensemble, on gagne ensemble.
              </Paragraph>
              <Paragraph className="!mb-10 !text-[17px] !leading-8 !text-slate-600 md:!text-[18px]">
                Mon parcours témoigne de ma capacité à m&apos;adapter avec agilité à chaque défi, garantissant ainsi des
                performances remarquables dans le domaine du développement logiciel.
              </Paragraph>

              <Space direction="vertical" size={28} className="!text-[17px] !text-slate-600 md:!text-[18px]">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group !block !w-fit !rounded-xl !px-2 !py-2 !italic !text-slate-600 !transition-transform !duration-200 hover:!translate-x-2 hover:!text-[#4d53be]"
                >
                  <Text className="!mb-1 !block !font-semibold !italic !text-slate-800">📍 Localisation</Text>
                  <span className="group-hover:!underline">Bemasoandro Itaosy</span>
                  <br />
                  <span className="group-hover:!underline">102 Antananarivo, Madagascar</span>
                </a>

                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group !block !w-fit !rounded-xl !px-2 !py-2 !italic !text-slate-600 !transition-transform !duration-200 hover:!translate-x-2 hover:!text-[#4d53be]"
                >
                  <Text className="!mb-1 !block !font-semibold !italic !text-slate-800">📧 Email</Text>
                  <span className="group-hover:!underline">tsilavinaandriamahafaly01@gmail.com</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group !block !w-fit !rounded-xl !px-2 !py-2 !italic !text-slate-600 !transition-transform !duration-200 hover:!translate-x-2 hover:!text-[#4d53be]"
                >
                  <Text className="!mb-1 !block !font-semibold !italic !text-slate-800">📱 Téléphone</Text>
                  <span className="group-hover:!underline">+261 34 10 09 650</span>
                </a>
              </Space>
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <Space direction="vertical" size={20} className="!flex !w-full lg:!items-end">
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  bordered={false}
                  className="!w-full !max-w-[360px] !rounded-2xl !bg-gradient-to-r !from-[#5f72e7] !to-[#7b4fd9] !text-center !shadow-[0_8px_24px_rgba(93,100,214,0.25)]"
                  styles={{ body: { padding: "28px 24px" } }}
                >
                  <Text className="!mb-1 !block !text-5xl !font-bold !leading-none !text-white">{stat.value}</Text>
                  <Text className="!text-sm !text-white/90">{stat.label}</Text>
                </Card>
              ))}
            </Space>
          </Col>
        </Row>
      </div>
    </SectionLayout>
  );
}
