import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { RiMailSendLine } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import InfoCard from "../Card/Card";
import ContactForm from "../Form/ContactForm";
import Subcribtion from "../Subscribtion/Subscribtion";
import "./ContactUsStyle.css";

const ContactUsSection = () => {
  return (
    <div className="contact-us">
      <h7>CONTACT US</h7>
      <h1>
        We're Here to Help <br />
        with All Your Needs
      </h1>
      <p style={{ fontSize: "10px", lineHeight: "2.3", color: "#b0b0b0" }}>
        Have questions or need assistance? Our dedicated team is ready to
        provide support and <br />
        answer any inquiries you may have. Whether you're looking for
        information, need assistance with a service, or want to discuss
        <br />
        a potential project, don't hesitate to reach out. We're committed to
        ensuring your experience with us is seamless <br />
        and satisfactory. Contact us today, and we'll get back to you promptly.
      </p>
      <div className="info-box">
        <InfoCard
          icon={<HiOutlinePhone />}
          title="Phone"
          titleColor="#ffff"
          content="+61 234 4783 432"
        />
        <InfoCard
          icon={<RiMailSendLine />}
          title="Email"
          titleColor="#ffff"
          content="info@adadigital.com.au"
        />
        <InfoCard
          icon={<HiOutlineLocationMarker />}
          title="Location"
          titleColor="#ffff"
          content="NSW, Sydney, AU"
        />
      </div>
      <div style={{ margin: "16px" , padding: "18px"}}>
        <ContactForm />
      </div>
      {/* <div>
        <Subcribtion />
      </div> */}
    </div>
  );
};

export default ContactUsSection;
