import React from "react";
import SearchModal from "./SearchModal";


function Nav() {
  return (
    <>
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="logo.svg" alt="Logo" className="h-32 w-32 mt-2 ml-6" />
        </div>
      </nav>
      <SearchModal />
    </>
  );
}

export default Nav;
