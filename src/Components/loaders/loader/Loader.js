import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styled from "styled-components";
import React from "react";
import Loader from "react-loader-spinner";

export default class App extends React.Component {
  render() {
    return (
      <LoaderWrapper>
        <Loader
          type="Puff"
          color="#ec8712"
          height={200}
          width={200}
          timeout={3000} //3 secs
        />
      </LoaderWrapper>
    );
  }
}
const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
`;
