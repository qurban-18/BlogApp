import React from "react";
import "./contact.css";
import Nav from "../Navbar/Nav";
import ContactCard from "./ContactCard";

export default function Contact() {
  const contactData = [
    {
      name: "akif nadeem",
      linkedin: "#",
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
  fuga eum pariatur corporis quasi quibusdam beatae totam asperiores iste
  aut!`,
    },
    {
      name: "qurban hussain",
      linkedin: "#",
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
  fuga eum pariatur corporis quasi quibusdam beatae totam asperiores iste
  aut!`,
    },
  ];
  return (
    <>
      <Nav />
      <div className="container-fluid Contact">
        <div className="container h-100 g-0">
          <div className="row h-100 g-0">
            {contactData.map((e, i) => (
              <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                <ContactCard name={e.name} desc={e.desc} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
