"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Row, Col, Card, Typography, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { 
  socialLinksData, 
  testimonialsData, 
  contactEmail, 
  contactTitle, 
  contactDescription 
} from "../../lib/data";

const { Title, Text, Paragraph } = Typography;

/**
 * Contact section component displaying contact information and testimonials
 * Provides ways for visitors to get in touch and showcases client testimonials
 */
export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.15 + 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2 + 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      id="contact"
      className="flex flex-col justify-center relative z-10"
      style={{ backgroundColor: "#000000" }}
    >
      <div ref={ref} className="max-w-7xl !mx-auto w-full !px-4 sm:!px-5 md:!px-6 lg:!px-8">
        <Row gutter={[16, 24]} className="items-start">
          {/* Left Column - Contact Information */}
          <Col xs={24} sm={24} md={24} lg={10}>
            <div className="h-full flex flex-col justify-center !p-5 sm:!p-6 md:!p-8 !pb-10 sm:!pb-12 md:!pb-16">
              <motion.div
                variants={titleVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <Title 
                  level={1} 
                  className="!text-white !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl !font-bold !mb-4 sm:!mb-5 md:!mb-6 !leading-tight"
                >
                  {contactTitle}
                </Title>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                custom={0}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <Paragraph className="!text-white !text-sm sm:!text-base md:!text-lg !mb-6 sm:!mb-7 md:!mb-8 !leading-relaxed">
                  {contactDescription}
                </Paragraph>
              </motion.div>

              {/* Email */}
              <motion.a
                variants={itemVariants}
                custom={1}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                href={`mailto:${contactEmail}`}
                className="!text-white !text-sm sm:!text-base md:!text-lg lg:!text-xl !mb-6 sm:!mb-7 md:!mb-8 inline-block group break-all"
                style={{
                  textDecoration: "none",
                }}
              >
                <span className="relative inline-block" style={{ paddingBottom: "4px" }}>
                  <span className="relative z-10 inline-block font-bold !px-1 sm:!px-2">
                    {contactEmail}
                  </span>
                  <span 
                    className="absolute left-0 h-1 bg-purple-500 transition-all duration-300 group-hover:h-3 sm:group-hover:h-4 z-0"
                    style={{
                      background: "linear-gradient(90deg, #8b5cf6, #a855f7)",
                      width: "100%",
                      bottom: "8px",
                    }}
                  />
                </span>
              </motion.a>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                custom={2}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6"
              >
                {socialLinksData.map((social, index) => (
                  <motion.a
                    key={social.label}
                    variants={itemVariants}
                    custom={index + 3}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    href={social.href}
                    className="!text-white hover:!text-purple-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="!text-white !text-sm sm:!text-base font-bold">{social.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </Col>

          {/* Right Column - Testimonials */}
          <Col xs={24} sm={24} md={24} lg={14}>
            <div className="!mb-6 sm:!mb-8 md:!mb-0 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0">
              {/* Left Column - First Testimonial */}
              <div className="row-span-2">
                <motion.div
                  variants={cardVariants}
                  custom={0}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="h-full"
                >
                  <Card
                  className="!border-none !rounded-none contact-card-responsive w-full h-full"
                  style={{
                    backgroundColor: testimonialsData[0].bgColor,
                  }}
                  bodyStyle={{
                    position: "relative",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    padding: "16px",
                  }}
                >
                  {/* Header with Quote Icon and Avatar */}
                  <div className="flex items-start justify-between !pb-3 sm:!pb-4">
                    {/* Quote Icon */}
                    <div className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold opacity-30">
                      &quot;
                    </div>

                    {/* Avatar */}
                    <div>
                      <Avatar
                        size={48}
                        icon={<UserOutlined />}
                        className="!border-2 !border-white/30 sm:!w-14 sm:!h-14 md:!w-16 md:!h-16 !bg-white/20"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-2 sm:px-4 md:px-6 pb-4 sm:pb-5 md:pb-6 flex-1 flex flex-col">
                    <Paragraph className="!text-white !text-xs sm:!text-sm md:!text-base !leading-relaxed !mb-3 sm:!mb-4">
                      {testimonialsData[0].quote}
                    </Paragraph>
                    
                    <div className="mt-3 sm:mt-4">
                      <Text className="!text-white !font-bold !text-sm sm:!text-base md:!text-lg">
                        - {testimonialsData[0].name}
                      </Text>
                      <br />
                      <Text className="!text-white !text-xs sm:!text-sm md:!text-base !opacity-90">
                        {testimonialsData[0].title}
                      </Text>
                    </div>
                  </div>
                </Card>
                </motion.div>
              </div>

              {/* Right Column - Other Two Testimonials */}
              {testimonialsData.slice(1).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  variants={cardVariants}
                  custom={index + 1}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="row-span-1"
                >
                  <Card
                    key={testimonial.id}
                    className="!border-none !rounded-none contact-card-responsive w-full h-full"
                    style={{
                      backgroundColor: testimonial.bgColor,
                    }}
                    bodyStyle={{
                      position: "relative",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      padding: "16px",
                    }}
                  >
                    {/* Header with Quote Icon and Avatar */}
                    <div className="flex items-start justify-between p-2 sm:p-4 md:p-6 pb-3 sm:pb-4">
                      {/* Quote Icon */}
                      <div className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold opacity-30">
                        &quot;
                      </div>

                      {/* Avatar */}
                      <div>
                        <Avatar
                          size={48}
                          icon={<UserOutlined />}
                          className="!border-2 !border-white/30 sm:!w-14 sm:!h-14 md:!w-16 md:!h-16 !bg-white/20"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-2 sm:px-4 md:px-6 pb-4 sm:pb-5 md:pb-6 flex-1 flex flex-col">
                      <Paragraph className="!text-white !text-xs sm:!text-sm md:!text-base !leading-relaxed !mb-3 sm:!mb-4">
                        {testimonial.quote}
                      </Paragraph>
                      
                      <div className="mt-3 sm:mt-4">
                        <Text className="!text-white !font-bold !text-sm sm:!text-base md:!text-lg">
                          - {testimonial.name}
                        </Text>
                        <br />
                        <Text className="!text-white !text-xs sm:!text-sm md:!text-base !opacity-90">
                          {testimonial.title}
                        </Text>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
