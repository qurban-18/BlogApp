import React from "react";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";

export default function ContactCard({ name, desc }) {
  return (
    <div className="ContactCard w-75 mx-auto">
      <div className="contact_avatar mx-auto rounder-circle">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      </div>
      <h5 className="text-center text-capitalize my-2">{name}</h5>
      <p className="text-center">{desc}</p>
      <div className="container-fluid contact_social_handles d-flex justify-content-around">
        <p href="#" target="_blank">
          <AiFillLinkedin />
        </p>
        <p href="#" target="_blank">
          <AiFillTwitterSquare />
        </p>
        <p href="#" target="_blank">
          <AiFillGithub />
        </p>
      </div>
    </div>
  );
}
