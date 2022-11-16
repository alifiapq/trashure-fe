import React from "react";
import { Container } from "react-bootstrap";
import Logo from "./Logo";

export default function SplashScreen() {
  return (
    <Container
      className="splash-screen d-flex flex-column justify-content-center  align-items-center"
      style={{ height: "100vh" }}
    >
      <Logo />
      <p className="fs-1 fw-bold text-white">Trashure</p>
    </Container>
  );
}
