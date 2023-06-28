import React from "react";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import AccountForm from "@/components/Forms/AccountForm";
import SecurityForm from "@/components/Forms/SecurityForm";
import { Tab, TabContent, TabHeader, Tabs } from "@/components/Tabs";
import "./Settings.scss";

export const Settings = () => {
  return (
    <MainLayout>
      <div className="settings">
        <div className="container">
          <Tabs>
            <TabHeader>
              <Tab>Account</Tab>
              <Tab>Security</Tab>
            </TabHeader>
            <TabContent>
              <AccountForm />
              <SecurityForm />
            </TabContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};
