import React from "react";
import withBoldFont from "../../HOC/withBoldFont";
import withRedColor from "../../HOC/withRedColor";

const Name = (props) => {
  return <h1 {...props}>Achraf Amrane</h1>;
};

const StyledName = withBoldFont(withRedColor(Name));

const FullName = () => {
  return (
    <div align="center">
      <div className="col-sm-4">
        <StyledName test="test" />
      </div>
    </div>
  );
};

export default FullName;
