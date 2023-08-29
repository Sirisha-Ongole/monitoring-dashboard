import React from "react";

export const PortfolioView = ({ data }) => {
  return (
    <div className="sectionBorder">
      <div className="row">
        <div className="col portfolioHeader">
          <p>Portfolio View</p>
        </div>
      </div>
      <div className="row">
        {/* Display items in a flexbox */}
        {data.map((item) => {
          return (
            <div
              className={"col-5 portfolioItem " + item.status}
              key={item.name}
            >
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
