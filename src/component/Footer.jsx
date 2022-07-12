import React from "react";

function footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>copyright© {currentYear}</p>
      </footer>
    </div>
  );
}

export default footer;
