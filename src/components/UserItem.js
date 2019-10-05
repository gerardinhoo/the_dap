import React from "react";

const UserItem = () => {
  const { fullName, title, image_url } = this.props.user;

  return (
    <div className="card text-center">
      <img
        src={image_url}
        alt="profile"
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{fullName}</h3>
      <h3>{title}</h3>
    </div>
  );
};

export default UserItem;
