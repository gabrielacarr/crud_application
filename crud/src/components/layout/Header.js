import React from "react";
import { FaBlackTie } from "react-icons/fa/";
// https://react-icons.github.io/

export const Header = () => {
  const x = 1;

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todo" />
        </div>
        <div className="settings">
          <ul>
            <li> + </li>
            <li>
              <FaBlackTie />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
