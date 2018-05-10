import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser } from "../../store/actions/userActions";
import { DatetimeInput } from 'react-datetime-inputs';
import moment from "moment/moment";
import RaisedButton from "material-ui/RaisedButton";
import TextField from 'material-ui/TextField';
import {
  pink500,
  grey500,
  grey200,
  green400,
  white
} from "material-ui/styles/colors";


@connect((state) => {
  return {
    added: state.user.added,
    adding: state.user.adding,
    errors: state.user.errors
  }
})

class Create extends Component {
  constructor() {
    super();
    //dumb state
    this.state = {
      user: {
        isbn: '',
        firstName: '',
        lastName: '',
        email: '',
        date: ''
      },
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDateTimeChange = this.onDateTimeChange.bind(this);
  }

  onChange(e) {
    const user = Object.assign({}, this.state.user);
    user[e.target.name] = e.target.value;
    this.setState({ user });

    if (!!this.props.errors[e.target.name]) {
      delete this.props.errors[e.target.name];
    }
  }


  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch(addUser(this.state.user));
  }

  onDateTimeChange = (date) => {
    let user = Object.assign({}, this.state.user);
    user.date = String(moment(date).format("YYYY-MM-DD HH:mm"));
    this.setState({ user });

    if (!!this.props.errors['date']) {
      delete this.props.errors['date'];
    }
  }

  render() {
    const { firstName, lastName, email, date } = this.state.user;
    const { errors } = this.props;
    return (
      <div style={{ padding: '5em 0em' }}>
        <div>
          <Link to='/'>
            <RaisedButton
              label="All"
              type="submit"
              backgroundColor={grey200}
              style={{ margin: '4em 0em 0em 0em' }}
            />
          </Link>

          <form onSubmit={this.onSubmit}>

            <TextField
              value={firstName}
              placeholder="First Name"
              name="firstName"
              onChange={this.onChange}
            />

            <TextField
              value={lastName}
              placeholder="Last Name"
              name="lastName"
              onChange={this.onChange}
            />

            <TextField
              value={email}
              placeholder="email"
              name="email"
              onChange={this.onChange}
            />

            <label>Date: {moment(date).isValid() ? moment(date).format('YYYY-MM-DD HH:mm') : 'not chosen'} </label>
            <DatetimeInput
              placeholder={'Choose Date'}
              onChange={this.onDateTimeChange} />

            <RaisedButton
              label="submit"
              type="submit"
              primary={true}
              style={{ margin: '4em 0em 0em 0em' }}
            />

          </form>
        </div>
      </div>

    );
  }
}

export default Create;