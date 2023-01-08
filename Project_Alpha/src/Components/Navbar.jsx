import React, {useState} from "react";
import {IoIosArrowDropupCircle, IoIosArrowDropdownCircle} from "react-icons/io";
const Navbar = ({RxCross1, handleNavbar}) => {
  const [listSection, setListSection] = useState(true);
  return (
    <>
      <nav id="nav">
        <div id="nav-top">
          <span>
            <img src="../../media/image1.png" alt="Navbar Logo" />
          </span>
          <span id="icon-span" onClick={() => handleNavbar("close")}>
            <RxCross1 id="cross" />
          </span>
        </div>
        <span id="nav-mid">Dashboard</span>
        <span id="divider"></span>
        <div id="nav-bottom">
          <span id="masters" onClick={() => setListSection(!listSection)}>
            {"Masters"}
            {listSection == true ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </span>
          {listSection && (
            <ul id="masters-list">
              <li>country master</li>
              <li>state master</li>
              <li>region master</li>
              <li>district master</li>
              <li>city master</li>
              <li>area master</li>
              <li>brand master</li>
              <li>category master</li>
              <li>family master</li>
              <li>product master</li>
              <li>hq master</li>
              <li>distributor master</li>
              <li>user master</li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
