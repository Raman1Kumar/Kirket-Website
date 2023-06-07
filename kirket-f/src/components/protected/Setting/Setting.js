import React from "react";
import Active_matches from "../Active_matches/Active_matches";
import Upcoming_matches from "../Upcoming_matches/Upcoming_matches";

import "./Setting.css";
import Phone_Number from "../Phone_Number/Phone_Number";

function Setting() {
  return (
    <div>
      <div class="row">
        {/* Left side of setting for choosing different setting */}
        <div class="col-4">
          <div class="list-group" id="list-tab" role="tablist">
            <a
              class="list-group-item list-group-item-action active"
              id="list-home-list"
              data-bs-toggle="list"
              href="#list-home"
              role="tab"
              aria-controls="list-home">
              Active Matches
            </a>

            <a
              class="list-group-item list-group-item-action"
              id="list-profile-list"
              data-bs-toggle="list"
              href="#list-profile"
              role="tab"
              aria-controls="list-profile">
              Upcoming Matches
            </a>

            <a
              class="list-group-item list-group-item-action"
              id="list-messages-list"
              data-bs-toggle="list"
              href="#list-messages"
              role="tab"
              aria-controls="list-messages">
              Messages
            </a>

            <a
              class="list-group-item list-group-item-action"
              id="list-settings-list"
              data-bs-toggle="list"
              href="#list-settings"
              role="tab"
              aria-controls="list-settings">
              Settings
            </a>
          </div>
        </div>
        {/* Right side of Setting for accessing setting values */}
        <div class="col-8">
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="list-home"
              role="tabpanel"
              aria-labelledby="list-home-list">
              <div>
                <Active_matches />
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="list-profile"
              role="tabpanel"
              aria-labelledby="list-profile-list">
              <Upcoming_matches />
            </div>

            <div
              class="tab-pane fade"
              id="list-messages"
              role="tabpanel"
              aria-labelledby="list-messages-list">
              No message Currently
            </div>

            <div
              class="tab-pane fade"
              id="list-settings"
              role="tabpanel"
              aria-labelledby="list-settings-list">
              <Phone_Number />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
