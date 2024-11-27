"use client";

import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

function Faqs() {
  const faqData = [
    {
      question: "Can I sign up as an individual?",
      answer:
        "Yes, Essay9ja is open for individuals to sign up and start using our services.",
    },
    {
      question: "What is Essay9ja's pricing?",
      answer:
        "Our pricing depends on the type of service you choose. Visit our pricing page for detailed information.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can reach out to our support team via the Contact Us page or by emailing support@essay9ja.com.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, refunds are available based on our refund policy. Please review the terms on our website.",
    },
    {
      question: "Can I collaborate as a writer?",
      answer:
        "Yes, we welcome professional writers to join our platform. Contact us for more details.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="hero-container">
        <div className="grid-2">
          <div className="grid-2-cols">
            <h2 className="secondary-header faq-header">
              Check Our FAQ&apos;s
            </h2>
            <div className="faq-paragraph">
              <p className="text-description hero-description ">
                Have a question about Essay9ja? Our FAQ section has <br /> got
                you covered with helpful information on all of <br /> our
                offerings.
              </p>
              <p className="text-description hero-description">
                Do you have any questions or could not find what you <br /> are
                looking for?
              </p>
            </div>
            <div className="contact-button">
              <button className="cta-btn contact-btn">Contact Us</button>
            </div>
          </div>

          <div className="grid-2-cols">
            <Accordion>
              {faqData.map((faq, index) => (
                <Accordion.Item eventKey={index} key={index}>
                  <Accordion.Header className=" hero-description">
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body className="text-description hero-description">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faqs;
