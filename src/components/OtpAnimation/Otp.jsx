import React from "react";

const Otp = () => {
  const inputs = document.querySelectorAll("#otp");
  inputs.forEach((input, index) => {
    input.CDATA_SECTION_NODE.index = index;
  });
  return (
    <div className="flex ">
      <input id="otp" type="text" maxLength="1" />
      <input id="otp" type="text" maxLength="1" />
      <input id="otp" type="text" maxLength="1" />
      <input id="otp" type="text" maxLength="1" />
      <input id="otp" type="text" maxLength="1" />
      <input id="otp" type="text" maxLength="1" />
    </div>
  );
};

export default Otp;
