import React, { useRef, useState, useEffect } from 'react';
import './ProfileCard.css';

export interface ProfileCardProps {
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  avatarUrl?: string;
  showUserInfo?: boolean;
  showAvatar?: boolean;
  showIcon?: boolean;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  onContactClick?: () => void;
  behindGlowColor?: string;
  behindGlowEnabled?: boolean;
  innerGradient?: string;
  className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name = "John Lexer",
  title = "Software Engineer",
  handle = "@lexer",
  // status = "Online",
  contactText = "Contact Me",
  avatarUrl = "",
  showUserInfo = true,
  showAvatar = false,
  showIcon = false,
  enableTilt = true,
  enableMobileTilt = false,
  onContactClick,
  behindGlowColor = "rgba(125, 190, 255, 0.67)",
  behindGlowEnabled = true,
  className = "",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -12; // 12 deg tilt max
    const rotY = ((x - centerX) / centerX) * 12;

    setRotateX(rotX);
    setRotateY(rotY);

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    setMousePos({ x: percentX, y: percentY });
  };

  const handleMouseEnter = () => {
    if (enableTilt) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setMousePos({ x: 50, y: 50 });
  };

  useEffect(() => {
    if (!enableMobileTilt) return;

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        const rotY = Math.max(-10, Math.min(10, (e.gamma / 45) * 10));
        const rotX = Math.max(-10, Math.min(10, ((e.beta - 45) / 45) * -10));
        setRotateX(rotX);
        setRotateY(rotY);
      }
    };

    window.addEventListener('deviceorientation', handleOrientation, true);
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation, true);
    };
  }, [enableMobileTilt]);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onContactClick) {
      onContactClick();
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`profile-card-wrapper ${className}`}>
      {/* Ambient Behind Glow */}
      {behindGlowEnabled && (
        <div
          className="profile-card-behind-glow"
          style={{
            background: behindGlowColor,
            opacity: isHovered ? 0.85 : 0.55,
          }}
        />
      )}

      {/* Main Interactive 3D Card */}
      <div
        ref={cardRef}
        className="profile-card-container"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
            : `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          '--mouse-x': `${mousePos.x}%`,
          '--mouse-y': `${mousePos.y}%`,
        } as React.CSSProperties}
      >
        <div className="profile-card-inner">
          {/* Main Full-Size Background Photo */}
          <img
            src={avatarUrl}
            alt={name}
            className="profile-card-bg-photo"
            loading="eager"
          />

          {/* Dark / Gradient Overlay */}
          <div className="profile-card-gradient-overlay" />

          {/* Holographic Sheen Layer */}
          <div className="profile-card-shine" />

          {/* Top Info Header */}
          {showUserInfo && (
            <div className="profile-card-top-info">
              <h3 className="profile-card-top-name">{name}</h3>
              {title && <p className="profile-card-top-title">{title}</p>}
            </div>
          )}

          {/* Spacer if no top info */}
          {!showUserInfo && <div />}

          {/* Bottom Floating Glass Pill Bar */}
          <div className="profile-card-bottom-bar">
            <div className="profile-card-user-meta">
              {(showAvatar || showIcon) && (
                <img
                  src={avatarUrl}
                  alt={name}
                  className="profile-card-mini-avatar"
                />
              )}
              <div className="profile-card-meta-text">
                <span className="profile-card-meta-handle">{handle}</span>
                {status && (
                  <span className="profile-card-meta-status">
                    <span className="profile-card-status-dot" />
                    {status}
                  </span>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={handleButtonClick}
              className="profile-card-action-btn"
            >
              {contactText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
