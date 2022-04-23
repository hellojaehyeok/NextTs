import React from "react";

const Header = ({}) => {
  const headerListArr: string[] = ["Main", "About"];

  return (
    <div className="header">
      <ul className="header__list">
        {headerListArr.map((item, index) => (
          <li className="header__list_El" key={index}>
            <a>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
