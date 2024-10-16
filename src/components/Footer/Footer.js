import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logoSiteName.png";
import Subcribtion from "../Subscribtion/Subscribtion";

const FooterContainer = styled.footer`
  background-color: #010101;
  color: white;
  padding: 50px 0;
`;

const FooterWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start; 
`;

const Image = styled.img`
  max-width: 50%;
  height: auto;
`;

const Paragraph = styled.p`
  color: #b0b0b0;
  margin-bottom: 8px;
  line-height: 2;
`;

const Column = styled.div`
  flex: 1;
  margin: 20px;
  min-width: 200px;
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
`;

const ColumnTitle = styled.h3`
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin-bottom: 15px;
`;

const FooterLink = styled.a`
  color: #aaa;
  text-decoration: none;
  font-size: 12px;
  line-height: 2;

  &:hover {
    color: #ff7b54;
  }
`;

const SocialIcons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;

  svg {
    margin: 0 10px;
    font-size: 24px;
    cursor: pointer;

    &:hover {
      color: #ff7b54;
    }
  }
`;

const ContactDetails = styled.div`
  font-size: 14px;
  line-height: 2;
  color: #aaa;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 90px;
  color: #aaa;
  background-color: #000;
`;

const CountryDropdown = styled.select`
  background-color: #1a1a1a;
  color: #fff;
  border: 1px solid #333;
  padding: 5px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;

  option {
    background-color: #000;
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Subcribtion />
      <div style={{ height: "48px" }} />
      <FooterWrapper>
        <Column>
          <Image src={logo} alt="logo" />
          <Paragraph>
            At Adada Digital, we are passionate about crafting innovative<br /> digital
            solutions that help businesses thrive in a rapidly<br /> evolving digital landscape.
          </Paragraph>
          <SocialIcons>
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaTwitter />
            <FaYoutube />
          </SocialIcons>
        </Column>

        <Column>
          <ColumnTitle>Company</ColumnTitle>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">Press</FooterLink>
        </Column>

        <Column>
          <ColumnTitle>Services</ColumnTitle>
          <FooterLink href="#">Branding</FooterLink>
          <FooterLink href="#">UI/UX</FooterLink>
          <FooterLink href="#">Web Development</FooterLink>
          <FooterLink href="#">Software Development</FooterLink>
          <FooterLink href="#">SEO</FooterLink>
          <FooterLink href="#">Social Media Marketing</FooterLink>
          <FooterLink href="#">Web Hosting</FooterLink>
        </Column>

        <Column>
          <ColumnTitle>Support</ColumnTitle>
          <FooterLink href="#">Help Center</FooterLink>
          <FooterLink href="#">FAQs</FooterLink>
          <FooterLink href="#">Contact Support</FooterLink>
        </Column>

        <Column>
          <ColumnTitle>Contact</ColumnTitle>
          <ContactDetails>Email: info@adadadigital.com.au</ContactDetails>
          <ContactDetails>Phone: +61 234 4783 432</ContactDetails>
          <ContactDetails>Address: NSW, Sydney, AU</ContactDetails>
        </Column>
      </FooterWrapper>

      <FooterBottom>
        <p>© 2024 - ADADA DIGITAL. All rights reserved</p>
        <CountryDropdown>
          <option value="AU">Australia</option>
          <option value="LK">Sri Lanka</option>
        </CountryDropdown>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
