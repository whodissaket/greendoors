import {
  FooterLinkItems,
  FooterWrap,
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLink,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    //  FooterContainer
    //Column 1
    <FooterContainer>
      {/* FooterWrap */}
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink as="a" href="#">
                How it Works
              </FooterLink>
              <FooterLink as="a" href="#">
                Testimonials
              </FooterLink>
              <FooterLink as="a" href="#">
                Careers
              </FooterLink>
              <FooterLink as="a" href="#">
                Investors
              </FooterLink>
              <FooterLink as="a" href="#">
                Terms of Service
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Services</FooterLinkTitle>
              <FooterLink as="a" href="#">
                Exterior Painting
              </FooterLink>
              <FooterLink as="a" href="#">
                Interior Painting
              </FooterLink>
              <FooterLink as="a" href="#">
                Plumbing
              </FooterLink>
              <FooterLink as="a" href="#">
                Price Calculator
              </FooterLink>
              <FooterLink as="a" href="#">
                Color Visualiser
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          {/* Column 2 */}
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Quick Links</FooterLinkTitle>
              <FooterLink as="a" href="#">
                Home
              </FooterLink>
              <FooterLink as="a" href="#">
                Contact Us
              </FooterLink>
              <FooterLink as="a" href="#">
                Support
              </FooterLink>
              <FooterLink as="a" href="#">
                Services
              </FooterLink>
              <FooterLink to="/gallery">Gallery</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Socials</FooterLinkTitle>
              <FooterLink as="a" href="#">
                Facebook
              </FooterLink>
              <FooterLink as="a" href="#">
                Instagram
              </FooterLink>

            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo as="a" href="#">
              Greendoors
            </SocialLogo>
            <WebsiteRights>
              Greendoors &copy; {new Date().getFullYear()}. All Rights Reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="#" target="_blank" aria-label="Facebook">
                <FaFacebook className={classes.footer__social__fb} />
              </SocialIconLink>
              <SocialIconLink href="#" target="_blank" aria-label="Instagram">
                <FaInstagram className={classes.footer__social__insta} />
              </SocialIconLink>
              <SocialIconLink href="#" target="_blank" aria-label="Twitter">
                <FaTwitter className={classes.footer__social__twitter} />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};
export default Footer;
