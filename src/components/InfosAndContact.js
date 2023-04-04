import React from "react";
import DescriptionText from "./DescriptionText";
import PhoneAndMail from "./PhoneAndMail";

const InfosAndContact = () => {
  return (
    <div className="infos_contact">
      <DescriptionText />
      <div className="contacts_container">
        <PhoneAndMail />
      </div>
    </div>
  );
};

export default InfosAndContact;
