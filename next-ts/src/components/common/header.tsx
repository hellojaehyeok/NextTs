import Link from 'next/link';
import React from 'react';

interface IHeaderList {
  path: string;
  name: string;
}

const Header = () => {
  const headerListArr: IHeaderList[] = [
    { path: '/', name: 'Main' },
    { path: '/about', name: 'About' },
  ];

  return (
    <div className="header">
      <ul className="header__list">
        {headerListArr.map((item, index) => (
          <li className="header__list_El" key={index}>
            <Link href={item.path}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
