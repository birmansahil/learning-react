import React from "react";
import Page from "./Page";

const App = () => {
  return(
    <main>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>

      <Page />
    </main>
  );
}

export default App;