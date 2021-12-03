import { faPaperPlane, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Chat = (props) => {
  return (
    <div
      className="w-100 position-fixed top-0 justify-content-center align-items-center"
      style={{
        backgroundColor: "rgba(0,0,0,0.7)",
        height: "100vh",
        zIndex: "99",
        display: props.show ? "flex" : "none",
      }}
    >
      <div className="col-lg-6 bg-dark p-5 position-relative">
        <FontAwesomeIcon
          icon={faTimes}
          onClick={props.onclose}
          className="position-absolute top-25 text-white"
          style={{ right: "30px" }}
        />
        <div className="jumbotron">
          <h1 className="text-white text-center mb-4">Your Messages</h1>
          <div
            id="messages"
            className="overflow-scroll bg-white shadow-lg"
            style={{ height: "300px" }}
          ></div>

          <br />
          <div className="d-flex align-items-end justify-content-center">
            <textarea
              id="message"
              className="form-control rounded-0 d-flex align-items-center"
              rows="2"
              placeholder="Type Something Here"
            ></textarea>
            <br />
            <button id="send" className="btn btn-success px-3 gap-2 rounded-0">
              <FontAwesomeIcon icon={faPaperPlane} /> Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
