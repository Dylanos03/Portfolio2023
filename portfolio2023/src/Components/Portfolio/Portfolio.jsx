import React from "react";
import PortfolioItem from "./SubComp/PortfolioItem";
import PortfolioImg1 from "../Images/PlaceImage.jpeg";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div>
      <h2 className="Port_Title">Portfolio</h2>
      <PortfolioItem
        portfolioImg={PortfolioImg1}
        portfolioItemTitle={"Item 1"}
        portfolioItemDesc={
          "loremguisndign sdngsdung  sdgjdsbgdjksbgsjkdgbsijbgi seugbsuiegbisuebgu isebgesuigbiseub eubfeubgfiusebgui bugbsub uesbg u bgsiub guis bguiesb iugb besiu bsui bueb egiusb "
        }
      />
      <PortfolioItem
        portfolioImg={PortfolioImg1}
        portfolioItemTitle={"Item 2"}
        portfolioItemDesc={
          "lorem awfbauebfuiabfuiwbf uwfbaiubfuwbfuiabuwifbauiwbfuiawe wabfiuabwufbauwbfauiw wfbauibfuiawbfuawbfiua iwfbfiuabfuia cfuaiwbfaiu ciuwabfiua iufcwbifa"
        }
      />
      <PortfolioItem
        portfolioImg={PortfolioImg1}
        portfolioItemTitle={"Item 3"}
        portfolioItemDesc={
          "ienfeifnsioenfieos iegnisoengiosneg esigbsoi gbiose gfisbfe fsue fj seu fja eufe ajf ua fejbfuesbfusbfj eugs jg eui sgiu "
        }
      />
    </div>
  );
}

export default Portfolio;
