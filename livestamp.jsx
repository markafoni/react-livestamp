import React, { Component, PropTypes } from 'react';

export default class Livestamp extends Component {
  constructor(props) {
    super(props);

    // STATE
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: false
    };

    this._second = 1000;
    this._minute = this._second * 60;
    this._hour = this._minute * 60;
    this._day = this._hour * 24;

    // end date
    this.end_date = new Date(this.props.end);

    // binding live method.
    this.stamp = this.stamp.bind(this);
  }

  componentDidMount() {

    // Mount initialize second before.
    this.stamp();

    // interval live.
    this.timer = setInterval(this.stamp, this.props.interval);
  }

  stamp() {
    const now = new Date();
    const distance = this.end_date - now;

    if (distance < 0) {

      // Clear interval
      clearInterval(this.timer);

      // distance then expired.
      return this.setState({
        expired: true
      });
    }

    this.setState({
      days: Math.floor(distance / this._day),
      hours: Math.floor((distance % this._day) / this._hour),
      minutes: Math.floor((distance % this._hour) / this._minute),
      seconds: Math.floor((distance % this._minute) / this._second)
    });
  }

  componentWillUnmount() {

    // Clear distance interval
    clearInterval(this.timer);
  }

  render() {
    const { renderStamp, renderExpired } = this.props;

    // if end date expired then render expiredRender.
    if (this.state.expired) {
      return expiredRender();
    }

    return stampRender(this.state);
  }
}

Livestamp.propTypes = {
  end: React.PropTypes.any.isRequired,
  interval: PropTypes.number,
  renderStamp: React.PropTypes.func,
  renderExpired: React.PropTypes.func
};

Livestamp.defaultProps = {
  interval: 1000, // 1 second
  renderStamp({ days, hours, minutes, seconds }) {
    return (
      <div className="react-livestamp">
        <b>{days} g {hours} s { minutes } dk {seconds} sn</b>
      </div>
    )
  },
  renderExpired() {
    return (
      <div className="react-livestamp">
        Expired Datetime.
      </div>
    )
  }
};
