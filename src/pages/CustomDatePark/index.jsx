import React, { useState } from "react";
import StepsNavigation, {
  Tabs,
} from "components/CustomDatePark/StepsNavigation";
import CustomTouringPlan from "components/CustomDatePark/CustomTouringPlan";
import CustomTouringPlanAttraction from "components/CustomDateParkAttraction/CustomTouringPlan";
import CustomTouringPlanMeals from "components/CustomDateParkMeals";

const CustomDatePark = () => {
  const [activeTab, setActiveTab] = useState(Tabs.Meals);
  return (
    <>
      <StepsNavigation
        handleChangeTab={(tab) => {
          setActiveTab(tab);
        }}
      />

      {activeTab === Tabs.DatePark && <CustomTouringPlan />}
      {activeTab === Tabs.Attractions && <CustomTouringPlanAttraction />}
      {activeTab === Tabs.Meals && <CustomTouringPlanMeals />}
      {activeTab === Tabs.Breaks && <>{Tabs.Breaks}</>}
      {activeTab === Tabs.ViewShare && <>{Tabs.ViewShare}</>}
    </>
  );
};

export default CustomDatePark;
