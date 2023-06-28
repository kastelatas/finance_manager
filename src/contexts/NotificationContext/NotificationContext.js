import React, { createContext, useState } from "react";

const NotificationContext = createContext();

const NotificationContextProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = message => {
    const newNotification = {
      id: Date.now().toLocaleString(),
      message: message,
    };

    setNotifications(prevNotifications => [
      ...prevNotifications,
      newNotification,
    ]);
  };

  const removeNotification = id => {
    setNotifications(prevNotifications =>
      prevNotifications.filter(notification => notification.id !== id)
    );
  };

  const contextValue = {
    notifications,
    addNotification,
    removeNotification,
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationContextProvider };
