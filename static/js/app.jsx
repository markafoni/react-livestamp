import React from 'react';
import { render } from 'react-dom';
import Livestamp from 'react-livestamp';

class App extends React.Component {
  render() {
    // Dummy date
    const end_date = new Date();

    // add 5 hours.
    end_date.setHours(end_date.getHours()+30);

    return (
      <div>
        <h1>React Livestamp</h1>

        <Livestamp
          end={end_date}
          stampRender={({ days, hours, minutes, seconds }) => (
            <div className="livestamp">
              <div>
                <span className="days">{days}</span>
                <div className="smalltext">Days</div>
              </div>
              <div>
                <span className="hours">{hours}</span>
                <div className="smalltext">Hours</div>
              </div>
              <div>
                <span className="minutes">{minutes}</span>
                <div className="smalltext">Minutes</div>
              </div>
              <div>
                <span className="seconds">{seconds}</span>
                <div className="smalltext">Seconds</div>
              </div>
            </div>
          )}
        />
      </div>
    )
  }
}

render(<App />, document.getElementById('Surface'));
