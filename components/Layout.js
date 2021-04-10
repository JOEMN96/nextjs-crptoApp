import React from "react";

function Layout({ children }) {
  return (
    <main>
      <h1 style={{ textAlign: "center", margin: "10px 0", color: "#d0cae5" }}>
        Milton's Personal Tracker
      </h1>
      {children}
    </main>
  );
}

export default Layout;
