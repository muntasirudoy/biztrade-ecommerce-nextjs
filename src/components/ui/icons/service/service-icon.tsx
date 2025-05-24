import type React from "react";
import styles from "./service.icons.module.css";

export const B2BMatchmakingIcon: React.FC = () => (
  <div className={`${styles.iconWrapper} ${styles.b2bIcon}`}>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.icon}
    >
      <circle cx="12" cy="12" r="10" fill="#FFC0CB" />
      <path
        d="M8 12C8 10.9 8.9 10 10 10H14C15.1 10 16 10.9 16 12V16H8V12Z"
        fill="#4169E1"
      />
      <circle cx="12" cy="8" r="2" fill="#FF6347" />
    </svg>
  </div>
);

export const LicensingIcon: React.FC = () => (
  <div className={`${styles.iconWrapper} ${styles.licensingIcon}`}>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.icon}
    >
      <circle cx="12" cy="12" r="10" fill="#006400" />
      <path d="M12 7L16 12H8L12 7Z" fill="#FFD700" />
      <rect x="8" y="13" width="8" height="4" fill="#FFD700" />
    </svg>
  </div>
);

export const DigitalMarketingIcon: React.FC = () => (
  <div className={`${styles.iconWrapper} ${styles.marketingIcon}`}>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.icon}
    >
      <circle cx="12" cy="12" r="10" fill="#4169E1" />
      <path d="M12 7L16 14H8L12 7Z" fill="#FF8C00" />
    </svg>
  </div>
);

export const WebDesignIcon: React.FC = () => (
  <div className={`${styles.iconWrapper} ${styles.webDesignIcon}`}>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.icon}
    >
      <circle cx="12" cy="12" r="10" fill="#ADD8E6" />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="#0000FF"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  </div>
);
