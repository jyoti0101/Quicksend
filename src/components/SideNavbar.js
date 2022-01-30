import React from "react";
import MainContainer from "./MainContainer";

function SideNavbar() {
  const SIDEBAR_NAV_OPTIONS = [
    {
      id:"1",
      title: "HOME",
      icon: <i className="fa fa-home" aria-hidden="true"></i>,
    },

    {
      id:"2",
      title: "DESIGN",
      icon: <i className="fa fa-paint-brush" aria-hidden="true"></i>,
    },

    {
      id:"3",
      title: "SHARE",
      icon: <i className="fa fa-share" aria-hidden="true"></i>,
    },
    {
      id:"4",
      title: "PAYMENTS",
      icon: <i className="fa fa-credit-card" aria-hidden="true"></i>,
      selected:true
    },
    {
      id:"5",
      title: "SETTINGS",
      icon: <i className="fa fa-cog" aria-hidden="true"></i>,
    },
  ];
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-logo">QuickSend</div>
        <ul className="sidebar-navigation">
          {SIDEBAR_NAV_OPTIONS &&
            SIDEBAR_NAV_OPTIONS.map((nav) => {
              return (
                <li key={nav.id} className={nav.selected && "header"}>
                  <a href="#">
                    {nav.icon} {nav.title}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>

      <div className="content-container">
        <MainContainer />
      </div>
    </>
  );
}

export default SideNavbar;
