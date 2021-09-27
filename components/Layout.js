import React from "react";
import Header from "./Header";
import { Container } from "semantic-ui-react";

// pattern
// const someComponent = () => {
//   ...
// };
// export default someComponent;

export default (props) => {
  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  );
};
