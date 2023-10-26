import React from "react";

function Home({ color, username, city }) {
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {username} Liza is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
