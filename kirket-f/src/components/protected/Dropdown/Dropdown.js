import React from "react";
import { useNavigate } from "react-router-dom";

function Dropdown() {
  let navigate = useNavigate();

  function ClickHandler() {
    console.log("clicked");
    localStorage.removeItem("token");
    navigate("/login");
  }

  const name = localStorage.getItem("kirket.name");
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          Logout /Setting
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
          <li>
            <a className="dropdown-item active" href="#">
              Hi!!! {name}
            </a>
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <li>
              <a class="dropdown-item" href="#" onClick={ClickHandler}>
                Logout link
              </a>
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
