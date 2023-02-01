import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <p className="text-muted">
          <a href="https://dave-314land.github.io/portfolio/" target="_blank" rel="noreferrer">Powered By Piland&copy; {year}</a> | Inspired by&nbsp;
          <a href="https://www.thefantasyfootballers.com/" target="_blank" rel="noreferrer">The Fantasy Footballers Podcast</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
