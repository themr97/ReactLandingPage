import React from 'react'
import { FooterContainer, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElement';
import { FaGithub } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/'>Discover</FooterLink>
                            <FooterLink to='/'>Services</FooterLink>
                            <FooterLink to='/'>Sign Up</FooterLink>
                            <FooterLink to='/'>Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/'>Facebook</FooterLink>
                            <FooterLink to='/'>Twitter</FooterLink>
                            <FooterLink to='/'>Youtube</FooterLink>
                            <FooterLink to='/'>Instagram</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Lorem</FooterLinkTitle>
                            <FooterLink to='/'>Lorem</FooterLink>
                            <FooterLink to='/'>Lorem</FooterLink>
                            <FooterLink to='/'>Lorem</FooterLink>
                            <FooterLink to='/'>Lorem</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/'>Facebook</FooterLink>
                            <FooterLink to='/'>Twitter</FooterLink>
                            <FooterLink to='/'>Youtube</FooterLink>
                            <FooterLink to='/'>Instagram</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            themr
                        </SocialLogo>
                        <WebsiteRights>
                            <SocialIconLink href='//www.themr.me' target='_blank'>Mahesh Ranpise</SocialIconLink> © {new Date().getFullYear()} All Rights Reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://github.com/themr97' target="_blank" aria-label="Github"><FaGithub /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
