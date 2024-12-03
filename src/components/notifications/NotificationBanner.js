import { useEffect } from "react";
import "./NotificationBanner.css";

const NotificationBanner = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`notification-banner ${type}`}>
      <span>{message}</span>
    </div>
  );
};

export default NotificationBanner;
