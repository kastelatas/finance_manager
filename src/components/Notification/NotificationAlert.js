import React, { useContext, useEffect } from "react";
import UIkit from "uikit";
import { NotificationContext } from "@/contexts/NotificationContext/NotificationContext";
import "./Notification.module.scss";

const Notification = () => {
  const { notifications } = useContext(NotificationContext);

  useEffect(() => {
    if (notifications.length) {
      showNotification(notifications[notifications.length - 1].message);
    }
  }, [notifications]);

  const showNotification = message => {
    UIkit.notification({
      message: message,
      pos: "bottom-right",
      timeout: 10000,
    });
  };

  return <div></div>;
};

export default Notification;
