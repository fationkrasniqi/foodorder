import React from 'react'
import Button from '../../Components/atoms/button'
import './About.scss'

const About = () => {
  return (
    <div className="container">
      <div className="edit-container ">
        <h2> Edit your informations </h2>

        <form action="#">
          <div className="left">
            <div className="edit-info">
              <div className="fields">
                <div className="input-field">
                  <label>Username:</label>
                  <input type="text" required></input>
                </div>
                <div className="input-field">
                  <label>Address:</label>
                  <input type="text" required></input>
                </div>
                <div className="input-field">
                  <label>Mobile number:</label>
                  <input type="number" placeholder="+" required></input>
                </div>
                <div className="input-field">
                  <label>Card number:</label>
                  <input
                    type="text"
                    placeholder="**** **** **** ****"
                    maxLength="16"
                    required></input>
                </div>
                <div className="input-field">
                  <label>Card holder:</label>
                  <input type="text" required></input>
                </div>
                <div className="input-field">
                  <label>Expiration month:</label>
                  <select>
                    <option value=""></option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </div>
                <div className="input-field">
                  <label>Exp. year:</label>
                  <select>
                    <option value=""></option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                  </select>
                </div>
                <div className="input-field">
                  <label>CVV:</label>
                  <input
                    type="text"
                    placeholder="****"
                    maxLength="4"
                    required></input>
                </div>
              </div>

              <div className="buttons">
                {/* <button className="backBtn">
                  <span className="submitBtn">Back</span>
                  <i className="uil-uil-navigator"></i>
                </button>

                <button className="submitBtn">
                  <span className="submitBtn">Submit</span>
                  <i className="uil-uil-navigator"></i>
                </button> */}

                <Button
                  type="submit"
                  text="Back"
                  // onClick={() => navigate('/menu')}
                  className="btn backBtn"></Button>
                <Button
                  type="submit"
                  text="Submit"
                  // onClick={() => navigate('/menu')}
                  className="btn submitBtn"></Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default About
