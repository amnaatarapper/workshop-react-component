import React from "react";
import withRedColor from "../../HOC/withRedColor";

const Name = (props) => (
  <h1
    {...props}
    style={{ ...props.style, fontSize: "4em" }}
  >{`${props.lastName} ${props.firstName} - ${props.age} - ${props.job}`}</h1>
);

const StyledName = withRedColor(Name);

const FullName = () => {
  return (
    <div align="center">
      <div className="col-sm-4">
        <StyledName firstName="Malek" lastName="Sehili" age="21" />
      </div>
    </div>
  );
};

export default FullName;
