import React from 'react';
import SearchResult, { ListHeading, Heading, Tagline } from "components/Search/elements/SearchResults"

const SearchResults = () => {
  return (
    <>
      <div className='mb-[50px]'>
        <ListHeading title="Top Result" />
        <SearchResult>
          <Heading title="Adventureland" />
          <Tagline title="MAGIC KINGDOM  LANDS" />
        </SearchResult>
      </div>
      <div className='mb-[50px]'>
        <ListHeading title="38 Results" />
        <SearchResult date="SEP 16, 2021">
          <p>Then and Now: 50 Years of Magic Kingdom’s <Heading title="Adventureland" /></p>
        </SearchResult>
        <SearchResult>
          <Heading title="Adventureland" />
          <Tagline title="MAGIC KINGDOM  LANDS" />
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