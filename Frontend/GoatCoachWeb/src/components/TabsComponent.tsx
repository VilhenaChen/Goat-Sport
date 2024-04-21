import { Tab, Tabs } from "@mui/material";
import { memo, useCallback } from "react";

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const TabsComponent = memo(({ tabs, activeTab, onTabClick }: TabsProps) => {
  const handleProfileTabChange = useCallback(
    (tab: string) => {
      onTabClick(tab);
    },
    [onTabClick]
  );
  return (
    <Tabs
      value={activeTab}
      onChange={(e, value) => handleProfileTabChange(value)}
      variant="scrollable"
      sx={{
        position: "fixed",
        backgroundColor: "#FFFFFF",
        zIndex: 2,
        paddingTop: 0,
      }}
    >
      {tabs.map((tab) => (
        <Tab label={tab} value={tab} key={tab} />
      ))}
    </Tabs>
  );
});

export default TabsComponent;
