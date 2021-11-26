import React, { Fragment } from "react";
import "./Feedback.css";
function Feedback() {
  return (
    <Fragment>
      <div>
        <div class="box feedback">
          <form action="https://formspree.io/f/xjvlbyly" method="POST"  id="survey-form">
            <div class="questions">
              <label for="name">Name</label>
              <br />
              <input
                type="text"
                id="name-label"
                class="inputcontainer"
                name="name"
                placeholder="Enter your name"
              />
              <br />
            </div>
            <div class="questions">
              <label for="email">Email</label>
              <br />
              <input
                type="email"
                id="email-label"
                class="inputcontainer"
                name="email"
                placeholder="Enter your Email"
              />
              <br />
            </div>
            <div class="questions">
              <label for="age">Age</label>
              <br />
              <input
                type="number"
                id="age-label"
                class="inputcontainer"
                name="age"
                placeholder="Enter your Age"
              />
              <br />

              <p class="almostlabel">
                Would you recommend Project: Arin to your friends?
              </p>
              <div class="radiocontainer">
                <label for="definitely">
                  <input
                    class="input-radio"
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
                    class="input-radio"
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
                    class="input-radio"
                    id="Nope"
                    name="enjoyment"
                    value="nope"
                  />
                  Nope
                </label>
                <br />
              </div>
              <div class="dropdowncontainer">
                <label for="features" class="almostlabel">
                  Choose your favourite feature
                </label>
                <br />
                <select name="features" id="dropdown">
                  <option value="puzzles">Buy Item</option>
                  <option value="gameplay">Sell Item</option>
                  <option value="aesthetics">Chat</option>
                </select>
              </div>
              <div class="checkboxcontainer">
                
                <br />
              </div>
              <div class="textareacontainer">
                <label for="openfeedback" class="almostlabel">
                  Open Feedback:
                </label>
                <br />
                <textarea
                  id="openfeedback"
                  name="feedback"
                  placeholder="Enter your comment here..."
                ></textarea>
              </div>
              <div class="submitcontainer">
                <button
                  type="submit"
                  id="submitid"
                  class="submit-button"
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
