import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        console.log(advice);
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;

    return (
      <>
        <div id="wrapper">
          <div id="canvas_container" />
          <div className="text">
            <p className="quoteText">
              {advice}
              <br />
              <span
                style={{
                  fontStyle: "italic",
                  fontSize: "1.4rem",
                  color: "#ED760D",
                }}
              >
                ---------------------------------------------
              </span>
            </p>
          </div>

          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </>
    );
  }
}

export default App;
