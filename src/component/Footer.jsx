import React from "react";

function footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>copyrightÂ© {currentYear}</p>
      </footer>
    </div>
  );
}

export default footer;
