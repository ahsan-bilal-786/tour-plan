import React from 'react';
import { ListHeading, ListItem } from "components/Search/elements/SearchResults"

const TopSearch = ({ isLight }) => {
  return (
    <div className={`${isLight && 'opacity-50'} mb-50`}>
      <ListHeading title="Top Search" />
      <ListItem title="Personalized Touring Plans" />
      <ListItem title="Genie+" />
      <ListItem title="Crowd Calendar" />
      <ListItem title="Len Testa" />
    </div>
  );
};

export default TopSearch;