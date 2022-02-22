import React from 'react';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let message = (this.props.body.user)
      ? `Hi, ${this.props.body.user.preferred_username}! ${JSON.stringify(this.props.body.user.preferred_username)} ${JSON.stringify(this.props.body.user.sub)}`
      : `You're not logged in. ${JSON.stringify(this.props.body)}`;

    return (
      <span> {message} </span>
    );
  }
}