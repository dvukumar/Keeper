import React from "react";
var date = new Date();
var currentYear = date.currentYear;
function Header() {
  return (
    <div>
      <header>
        <h1>Keeper</h1>
      </header>
    </div>
  );
}

export default Header;
