import React from 'react';
import {
  StyledProfileCard,
  ProfileImageContainer,
  ProfileImg,
  ProfileInfo,
  SocialIcons
} from './AboutUsStyled'; // Adjust the import path as necessary
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const ProfileCard = ({ image, name, title, description, socialLinks }) => {
    return (
        <StyledProfileCard>
            <ProfileImageContainer className="profile-image-container">
                <ProfileImg src={image} alt={name} className="profile-img" />
            </ProfileImageContainer>
            <ProfileInfo className="profile-info">
                <h2>{name}</h2>
                <h3>{title}</h3>
                <p>{description}</p>
                <SocialIcons className="social-icons">
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                            <i className={link.iconClass}></i>
                        </a>
                    ))}
                </SocialIcons>
            </ProfileInfo>
        </StyledProfileCard>
    );
};

export default ProfileCard;

