import "./Profile.scss";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext/UserState";
import { Button, Modal } from "antd";

const Profile = () => {
  const { user, getUserLogged, OrdersNamed } = useContext(UserContext);

  const YourOrdersButton = () => {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
      setVisible(true);
    };

    const handleOk = () => {
      setVisible(false);
    };

    const handleCancel = () => {
      setVisible(false);
    };

    return (
      <>
        <Button type="primary" onClick={showModal}>
          Your Orders
        </Button>
        <Modal
          title="Your Orders"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}>
          {user.Orders?.map((order) =>
            order.Products?.map((product) => <p>{product.name}</p>)
          )}
        </Modal>
      </>
    );
  };

  useEffect(() => {
    getUserLogged();
  }, []);

  const imageUrl = "http://localhost:3000/images/users/" + user.image;

  return (
    <div>
      <h2>Your Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <img src={imageUrl} className="userimg" alt="userimg"></img>
      <div>Address: {user.address}</div>
      <div>Phone: {user.phone}</div>
      <spa>Role: {user.role}</spa>
      <div>
        <YourOrdersButton />
      </div>
    </div>
  );
};

export default Profile;
