import React from 'react';

function Header(props) {
  return (
    <header>
      <h1>Заголовок сайту</h1>
      <nav>
        <ul>
          <li><a href="/">Header link 1</a></li>
          <li><a href="/">Header link 2</a></li>
          <li><a href="/">Header link 3</a></li>
          {props.loggedIn && (
            <li><a href="#">Logged-in link</a></li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
