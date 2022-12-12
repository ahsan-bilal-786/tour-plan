import React from 'react';
import SearchResult, { ListHeading, Heading, Tagline, TaglineHeading } from "components/Search/elements/SearchResults"

const SearchResults = () => {
  return (
    <>
      <div className='mb-50'>
        <ListHeading title="Top Result" />
        <SearchResult>
          <Heading title="Adventureland" />
          <Tagline><TaglineHeading title="MAGIC KINGDOM" /> LANDS</Tagline>
        </SearchResult>
      </div>
      <div className='mb-50'>
        <ListHeading title="38 Results" />
        <SearchResult date="SEP 16, 2021">
          <p>Then and Now: 50 Years of Magic Kingdom’s <Heading title="Adventureland" /></p>
        </SearchResult>
        <SearchResult>
          <Heading title="Adventureland" />
          <Tagline><TaglineHeading title="MAGIC KINGDOM" /> LANDS</Tagline>
        </SearchResult>
        <SearchResult date="SEP 14, 2021">
          <p>Urban Design: Magic Kingdom’s <Heading title="Adventureland" /> Part 2</p>
        </SearchResult>
        <SearchResult date="SEP 18, 2021">
          <p>Then and Now: 50 Years of Magic Kingdom’s <Heading title="Adventureland" /></p>
        </SearchResult>
      </div>
    </>
  );
};

export default SearchResults;