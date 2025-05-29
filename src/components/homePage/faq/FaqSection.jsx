import React, { useState } from "react";
import Container from "../../commonlayout/Container";
import AccordianItem from "./AccordianItem";
import Button from "../../commonlayout/Button";

const FaqSection = () => {
  let [openIndex, setOpenIndex] = useState(null);
  let accordiandata = [
    {
      title: "What payment methods do you accept?",
      content:
        "I don't handle payments myself, but if you're asking about Microsoft products or services, Microsoft generally accepts various payment methods, including credit and debit cards, PayPal, and more, depending on your region. If you're looking for specific payment options, I recommend checking the official Microsoft Store or support page for details. Are you looking to purchase something specific?",
    },
    {
      title: "How long does the product shipping take?",
      content:
        "Shipping times for Microsoft products can vary based on location and shipping method. According to Microsoft's support page, delivery times depend on the shipping option selected. For example, expedited shipping typically takes 2-3 business days, while express shipping can take 1-2 business days. However, availability and delivery times may differ for Bangladesh, so I recommend checking the official Microsoft Store or local retailers for more precise details.",
    },
    {
      title: "Do you offer international shipping?",
      content:
        "es, Microsoft does offer international shipping, but availability depends on the country. The Microsoft Store ships to select countries, and delivery times vary based on location and shipping method. Some products may have restrictions due to export regulations.",
    },
    {
      title: "Can I track my order?",
      content:
        "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order bylogging into your account and viewing your order history.",
    },
  ];
  return (
    <>
      <div className="mt-[80px] py-[64px] bg-[#f4f4f4] mb-20">
        <Container>
          <div className="flex gap-[112px] items-end relative " >
            <div className="w-[902px] flex flex-col gap-6">
              {accordiandata.map((item, index) => (
                <AccordianItem
                  key={index}
                  title={item.title}
                  content={item.content}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  isOpen={openIndex === index}
                />
              ))}
            </div>
            <div  >
              <img className="absolute top-0 right-0 " src="images/faq_dot_box.png" alt="" />
              <div className="">
                <h4 className='max-w-[306px] font-["Poppins"] text-[36px] normal font-semibold leading-[46px]  '>
                Frequently Asked Questions
              </h4>
              <p className='max-w-[392px] font-["Montserrat"] text-5 normal font-normal leading-[30px] mt-6 '>
                Questions that get asked the most by our clients. Get any
                burning questions?
              </p>
              <div className=" mt-[64px]">
                <Button text={"Ask A Question"} />
              </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default FaqSection;
