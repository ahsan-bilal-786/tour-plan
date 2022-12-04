import React, { useState } from 'react';
import Container from 'components/Search/elements/Container';
import HeaderComponent from "components/Search/elements/Header"
import TopSearch from "components/Search/TopSearch"
import SearchResults from "components/Search/SearchResults"
import NoResults from "components/Search/NoResults"
import InputField from 'components/Search/elements/InputField';

const Search = () => {
  const [isActiveSearch, setActiveSearch] = useState(false);
  const [keyword, setKeword] = useState(false);
  return (
    <>
      <HeaderComponent handleSearch={() => setActiveSearch(!isActiveSearch)} />
      <Container bg="bg-white" className="xs:pt-[51px] md:pt-[100px] xs:pb-[69px] md:pb-[117px]">
        <div className='md:max-w-[792px] mx-auto'>
          <InputField handleChange={setKeword} value={keyword} type={keyword.length > 3 ? "outlined" : "filled"} />
          <TopSearch />
          <NoResults />
          <SearchResults />
        </div>
      </Container>
    </>
  );
};

export default Search;