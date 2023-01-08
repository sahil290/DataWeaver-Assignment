import React from "react";

const EditModal = ({RxCross1, brandCategory, brandName, cancelModal}) => {
  return (
    <>
      <div id="modal-main">
        <div id="modal">
          <span id="edit-text">
            {"Edit Brand"}
            <RxCross1 onClick={() => cancelModal()} />
          </span>
          <span id="divider-1"></span>
          <div id="inputs-container">
            <span id="ist">
              {"Brand Name"}
              <input
                type="text"
                placeholder={brandName !== "" || brandName !== undefined ? brandName : ""}
              />
            </span>
            <span id="ist">
              {"Brand Category"}
              <input
                type="text"
                placeholder={
                  brandCategory !== "" || brandCategory !== undefined ? brandCategory : ""
                }
              />
            </span>
          </div>
          <span id="divider-2"></span>
          <div id="buttons-wrapper">
            <button onClick={() => cancelModal()}>Close</button>
            <button onClick={() => cancelModal()}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;
