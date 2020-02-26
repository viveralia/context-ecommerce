import React from "react";

const Footer = () => {
  return (
    <footer className="container-fluid mt-auto pt-2 pb-2 border-top">
      <div className="row pt-1 pb-1">
        <div className="col-12 text-center small">
          &copy; {new Date().getFullYear()} Lorem Store
        </div>
      </div>
    </footer>
  );
};

export default Footer;
