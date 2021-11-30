import React from "react";

const Nav = () => {
  return (
    <section class="nav-bar container">
      <div class="nav-bar__search-bar" onkeyup="handleSearch()">
        <div class="nav-bar__search-bar__logo">
          <div class="nav-bar__search-bar__logo__upnext">
            <img src="./img/logo.png" alt="UpNext Logo" />
          </div>

          <div class="nav-bar__search-bar__logo__notification">
            <img src="./img/Group 706.png" alt="" />
          </div>
        </div>
        <div class="nav-bar__search-bar__input">
          <input type="text" id="search" placeholder="חיפוש משימה לפי טקסט" />
        </div>
      </div>
      <div class="nav-bar__chat">
        <a href="08 - chat.html">
          <img src="./img/Group (4).png" alt="" />
        </a>
        <img src="./img/Group (5).png" alt="" />
      </div>
      <nav class="nav-bar__navigation">
        <div class="nav-bar__navigation__client">
          <a id="buttonModalClient">לקוחות</a>
        </div>
        <div class="nav-bar__navigation__project">
          <a id="buttonModalProject">פרויקטים</a>
        </div>
        <div class="nav-bar__navigation__page">
          <a id="buttonModalSetting">הגדרות</a>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
