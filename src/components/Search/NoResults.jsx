import React from 'react';
import { ListHeading, ListItem } from "components/Search/elements/SearchResults"

const NoResults = () => {
  return (
    <div className='mb-[58px]'>
      <div className='font-normal text-18 text-black mb-[50px]'>Hmmm... we couldn’t find anything</div>
      <ListHeading title="Try Searching SOMETHING ELSE" />
      <ListItem title="Personalized Touring Plans" />
      <ListItem title="Genie+" />
      <ListItem title="Crowd Calendar" />
      <ListItem title="Len Testa" />
    </div>
  );
};

export default NoResults;