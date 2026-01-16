"use client";

import { Row, Col, Card, Typography, Avatar } from "antd";
import { 
  MessageOutlined, 
  LinkedinOutlined, 
  InstagramOutlined, 
  GithubOutlined 
} from "@ant-design/icons";
import Image from "next/image";

const { Title, Text, Paragraph } = Typography;

/**
 * Contact section component displaying contact information and testimonials
 * Provides ways for visitors to get in touch and showcases client testimonials
 */
export default function Contact() {
  const socialLinks = [
    { 
      label: "Messenger", 
      icon: <MessageOutlined className="text-white text-lg" />,
      href: "#" 
    },
    { 
      label: "LinkedIn", 
      icon: <LinkedinOutlined className="text-white text-lg" />,
      href: "#" 
    },
    { 
      label: "Instagram", 
      icon: <InstagramOutlined className="text-white text-lg" />,
      href: "#" 
    },
    { 
      label: "Github", 
      icon: <GithubOutlined className="text-white text-lg" />,
      href: "#" 
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Since 2018 Tamal has been responsible for the development of our website which has been instrumental to the growth of our company. Even while working remotely he's been highly responsive, organized and strategic in his thinking. In addition to staying on top of day-to-day site changes and builds, he's provided us with great advice to stay on top of the current changes in web technologies. He's also implemented effective project management and Q&A processes. As a result Tamal has been an highly valued and impactful member of our team.",
      name: "Mark Greenspan",
      title: "Founder at influenceTHIS Canada",
      avatar: "/tamalsen-home-cover.jpg", // Placeholder - replace with actual avatar
      bgColor: "#bc60fb", // Purple
    },
    {
      id: 2,
      quote: "Tamal is AMAZING! If you have any doubt about hiring him, ask me - I am really impressed by this guy!",
      name: "Wilfried Hajek",
      title: "Agile Coach | Speaker | Trainer",
      avatar: "/tamalsen-home-cover.jpg", // Placeholder - replace with actual avatar
      bgColor: "#0067dc", // Blue
    },
    {
      id: 3,
      quote: "Tamal is one of the best professionals that we have known in web development skills. Between his skills you can find good communication and accuracy with the planning in complex projects.",
      name: "Jonathan Castro",
      title: "CEO & Founder at The Cliff",
      avatar: "/tamalsen-home-cover.jpg", // Placeholder - replace with actual avatar
      bgColor: "#923fe6", // Purple
    },
  ];

  return (
    <section
      id="contact"
      className="flex flex-col justify-center relative z-10 snap-start"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="max-w-7xl !mx-auto w-full !px-4 sm:!px-6">
        <Row gutter={[32, 32]} className="items-start">
          {/* Left Column - Contact Information */}
          <Col xs={24} lg={10}>
            <div className="h-full flex flex-col justify-center !p-4">
              <Title 
                level={1} 
                className="!text-white !text-4xl md:!text-5xl !font-bold !mb-6 !leading-tight"
              >
                Available for select freelance opportunities
              </Title>
              
              <Paragraph className="!text-white !text-base sm:!text-lg !mb-8 !leading-relaxed">
                Have an exciting project you need help with? Send me an email or contact me via instant message!
              </Paragraph>

              {/* Email */}
              <a 
                href="mailto:tsilavinaandriamahafaly01@gmail.com"
                className="!text-white !text-lg sm:!text-xl !mb-8 inline-block group"
                style={{
                  textDecoration: "none",
                }}
              >
                <span className="relative inline-block" style={{ paddingBottom: "4px" }}>
                  <span className="relative z-10 inline-block font-bold !px-2">
                    tsilavinaandriamahafaly01@gmail.com
                  </span>
                  <span 
                    className="absolute left-0 h-1 bg-purple-500 transition-all duration-300 group-hover:h-4 z-0"
                    style={{
                      background: "linear-gradient(90deg, #8b5cf6, #a855f7)",
                      width: "100%",
                      bottom: "10px",
                    }}
                  />
                </span>
              </a>

              {/* Social Links */}
              <div className="flex flex-col gap-4 sm:gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="!text-white hover:!text-purple-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="!text-white !text-base font-bold">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </Col>

          {/* Right Column - Testimonials */}
          <Col xs={24} lg={14}>
            <Row gutter={0}>
              {/* Left Column - First Testimonial */}
              <Col xs={24} lg={12}>
                <Card
                  className="!border-none !rounded-none"
                  style={{
                    backgroundColor: testimonials[0].bgColor,
                    height: "100%",
                  }}
                  bodyStyle={{
                    position: "relative",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Header with Quote Icon and Avatar */}
                  <div className="flex items-start justify-between !pb-4">
                    {/* Quote Icon */}
                    <div className="text-white text-6xl sm:text-7xl font-bold opacity-30">
                      &quot;
                    </div>

                    {/* Avatar */}
                    <div>
                      <Avatar
                        size={64}
                        src={
                          <Image
                            src={testimonials[0].avatar}
                            alt={testimonials[0].name}
                            width={64}
                            height={64}
                            className="object-cover"
                          />
                        }
                        className="!border-2 !border-white/30"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 pb-6">
                    <Paragraph className="!text-white !text-sm sm:!text-base !leading-relaxed !mb-4">
                      {testimonials[0].quote}
                    </Paragraph>
                    
                    <div className="mt-4">
                      <Text className="!text-white !font-bold !text-base sm:!text-lg">
                        - {testimonials[0].name}
                      </Text>
                      <br />
                      <Text className="!text-white !text-sm sm:!text-base !opacity-90">
                        {testimonials[0].title}
                      </Text>
                    </div>
                  </div>
                </Card>
              </Col>

              {/* Right Column - Other Two Testimonials */}
              <Col xs={24} lg={12} className="flex flex-col" style={{ height: "100%" }}>
                <div className="flex flex-col h-full">
                  {testimonials.slice(1).map((testimonial) => (
                    <Card
                      key={testimonial.id}
                      className="!border-none !rounded-none flex-1"
                      style={{
                        backgroundColor: testimonial.bgColor,
                      }}
                      bodyStyle={{
                        position: "relative",
                      }}
                    >
                      {/* Header with Quote Icon and Avatar */}
                      <div className="flex items-start justify-between p-6 pb-4">
                        {/* Quote Icon */}
                        <div className="text-white text-6xl sm:text-7xl font-bold opacity-30">
                          &quot;
                        </div>

                        {/* Avatar */}
                        <div>
                          <Avatar
                            size={64}
                            src={
                              <Image
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                width={64}
                                height={64}
                                className="object-cover"
                              />
                            }
                            className="!border-2 !border-white/30"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="px-6 pb-6">
                        <Paragraph className="!text-white !text-sm sm:!text-base !leading-relaxed !mb-4">
                          {testimonial.quote}
                        </Paragraph>
                        
                        <div className="mt-4">
                          <Text className="!text-white !font-bold !text-base sm:!text-lg">
                            - {testimonial.name}
                          </Text>
                          <br />
                          <Text className="!text-white !text-sm sm:!text-base !opacity-90">
                            {testimonial.title}
                          </Text>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
}
