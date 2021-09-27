import React from "react";

// pattern
// const someComponent = () => {
//   ...
// };
// export default someComponent;

export default (props) => {
  return (
    <div>
      <h1>Im a header</h1>
      {props.children}
      <h1>Im a footer</h1>
    </div>
  );
};
