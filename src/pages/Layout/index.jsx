import React, { useState } from 'react';
import map from "lodash/map";
import { navLinks } from "App";
import { Outlet, Link } from "react-router-dom";
import HeaderComponent from "components/Search/elements/Header"

const Layout = (props) => {
  const [showSidebar, handleSidebar] = useState(false);
  return (
    <div class="flex">
      {showSidebar && (
        <aside class="h-screen sticky top-0 bg-slate-300 w-96">
          {map(navLinks, (link, key) => (
            <div key={key} className="border-b-[1px] border-tp-purple-500 md:pr-2 pl-[20px] flex xs:text-24 md:text-24 font-light font-eucliarLight leading-[80px]">
              <Link to={link.path}>{link.title}</Link>
            </div>
          ))}
        </aside>
      )}

      <main className='grow'>
        <HeaderComponent handleSearch={() => { }} handleSidebar={() => handleSidebar(!showSidebar)} />
        <Outlet {...props} />
      </main>
    </div>
  );
};

export default Layout;