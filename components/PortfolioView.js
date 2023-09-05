import React from "react";

export const PortfolioView = ({ data = [], setShowRfbPortfolioView }) => {
  return (
    <div className="sectionBorder darkmode-background">
      <div className="row">
        <div className="col portfolioHeader">
          <p>Portfolios</p>
        </div>
      </div>
      <div className="row">
        {/* Display items in a flexbox */}
        {data.map((item) => {
          return (
            <div
              className="col-6"
              key={item.name}
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                if (item.clickable) setShowRfbPortfolioView(true);
              }}
            >
              <p className={"portfolioItem " + item.status}>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
