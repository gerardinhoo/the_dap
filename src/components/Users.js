import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        fullName: "Gerard Eklu",
        title: "Software Engineer",
        image_url:
          "https://ca.slack-edge.com/T03PB1F2E-UBM5LRJHH-6fe78522416f-72"
      },
      {
        id: "2",
        fullName: "Todd Stankiewicz",
        title: "Senior Manager IS",
        image_url:
          "https://ca.slack-edge.com/T03PB1F2E-U0EUEJLAW-cac9f38e9c08-72"
      },
      {
        id: "3",
        fullName: "Noosh Prljača",
        title: "Staff User Experience Designer",
        image_url:
          "https://ca.slack-edge.com/T03PB1F2E-U0EDHJH7Y-54d61b105d4a-72"
      },
      {
        id: "4",
        fullName: "Cayce Koehler",
        title: "Sr. Software Engineer",
        image_url:
          "https://ca.slack-edge.com/T03PB1F2E-UDE9N6QSE-b67e917eda42-72"
      },
      {
        id: "5",
        fullName: "Raymond Brown",
        title: "Sr. Software Engineer",
        image_url:
          "https://ca.slack-edge.com/T03PB1F2E-UALEV71N2-185051364f8a-72"
      },
      {
        id: "6",
        fullName: "Irfan Ahmed",
        title: "Sr. Software Engineer",
        image_url:
          "https://ca.slack-edge.com/T03PB1F2E-UBXLD9J75-e79bdf5f0fbb-72"
      },
      {
        id: "7",
        fullName: "Steven Sorensen (nevetsvsx)",
        title: "DAP Product Manager",
        image_url:
          "https://ca.slack-edge.com/T03PB1F2E-U0HLESNHZ-fda15f5e0a22-72"
      },
      {
        id: "8",
        fullName: "Ryan The Sparks",
        title: "Software Engineer",
        image_url:
          "https://ca.slack-edge.com/T03PB1F2E-UC0C83MJB-732c6d05f5d9-72"
      },
      {
        id: "9",
        fullName: "Michael Dillard",
        title: "SOS Reliability Engineer",
        image_url:
          "https://ca.slack-edge.com/T03PB1F2E-U8P1R2ZQQ-0856b487bf17-72"
      },
      {
        id: "10",
        fullName: "Jerald Neumann",
        title: "Sr. Software Engineer",
        image_url:
          "https://ca.slack-edge.com/T03PB1F2E-UDJNM9UAC-90ce88d6f842-72"
      }
    ]
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
  color: "white"
};

export default Users;
