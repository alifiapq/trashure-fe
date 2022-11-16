import React from "react";
import { Container } from "react-bootstrap";
import profilepic from "../image/profile-pic.svg";
import profilelogo from "../image/profile-logo.svg";
import arrowright from "../image/arrow-right.svg";

export default function Setting() {
  const borderBtm = "3rem";
  return (
    <Container className="setting-trashure p-0">
      <div
        className="px-4 pt-3 pb-4"
        style={{
          backgroundColor: "#5db932",
          borderBottomRightRadius: borderBtm,
          borderBottomLeftRadius: borderBtm,
        }}
      >
        <h2 className="text-center">Setting</h2>
        <div className="d-flex gap-3">
          <img src={profilepic} alt="" />
          {/* namanya kalo panjang gmn */}
          <div className="d-flex flex-column justify-content-center text-nowrap overflow-hidden text-white fs-7">
            <p>Uvuvwevwevwe Onyetenvewve Ugwemubwem Ossas</p>
            <p>+62 81122334455</p>
          </div>
        </div>
      </div>
      <Container className="py-3">
        <div className="d-flex">
          <img src={profilelogo} alt="" />
          <h3>My Account</h3>
          <img src={arrowright} alt="" />
        </div>
      </Container>
    </Container>
  );
}
