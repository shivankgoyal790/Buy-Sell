import React, { Fragment } from "react";
import "./Feedback.css";
function Feedback() {
  return (
    <Fragment>
      <div className="col-xl-7 col-md-1 col-12 mx-auto">
        <div className="box feedback ">
          <form
            action="https://formspree.io/f/xjvlbyly"
            method="POST"
            id="survey-form"
          >
            <div className="questions">
              <label for="name">Name</label>
              <br />
              <input
                type="text"
                id="name-label"
                className="py-3 form-control"
                name="name"
                placeholder="Enter your name"
              />
              <br />
            </div>
            <div className="questions">
              <label for="email">Email</label>
              <br />
              <input
                type="email"
                id="email-label"
                className="py-3 form-control"
                name="email"
                placeholder="Enter your Email"
              />
              <br />
            </div>
            <div className="questions">
              <label for="age">Age</label>
              <br />
              <input
                type="number"
                id="age-label"
                className="py-3 form-control"
                name="age"
                placeholder="Enter your Age"
              />
              <br />

              <p className="almostlabel">
                Would you recommend Project: Arin to your friends?
              </p>
              <div className="radiocontainer">
                <label for="definitely">
                  <input
                    className="input-radio"
                    type="radio"
                    id="definitely"
                    name="enjoyment"
                    value="definitely"
                  />
                  Definitely
                </label>
                <br />

                <label for="maybe">
                  <input
                    type="radio"
                    className="input-radio"
                    id="maybe"
                    name="enjoyment"
                    value="maybe"
                  />
                  Maybe
                </label>
                <br />

                <label for="nope">
                  <input
                    type="radio"
                    className="input-radio"
                    id="Nope"
                    name="enjoyment"
                    value="nope"
                  />
                  Nope
                </label>
                <br />
              </div>
              <div className="dropdowncontainer">
                <label for="features" className="almostlabel">
                  Choose your favourite feature
                </label>
                <br />
                <select
                  className="form-select form-select-lg"
                  aria-label=".form-select-lg example"
                  name="selecttype"
                  id="dropdown"
                  style={{ fontSize: "16px" }}
                >
                  <option value="BuyItem">Buy Item</option>
                  <option value="SellItem">Sell Item</option>
                  <option value="Chat">Chat</option>
                </select>
              </div>
              <div className="checkboxcontainer">
                <br />
              </div>
              <div className="textareacontainer">
                <label for="openfeedback" className="almostlabel">
                  Open Feedback:
                </label>
                <br />
                <textarea
                  id="openfeedback"
                  name="feedback"
                  placeholder="Enter your comment here..."
                ></textarea>
              </div>
              <div className="submitcontainer">
                <button
                  type="submit"
                  id="submitid"
                  className="submit-button btn"
                  onclick="submitHandler()"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Feedback;
