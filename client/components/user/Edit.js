import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DatetimeInput } from 'react-datetime-inputs';
import moment from "moment";
import { connect } from 'react-redux'
import { fetchUser, updateUser } from "../../store/actions/userActions";
import TextField from 'material-ui/TextField';
import RaisedButton from "material-ui/RaisedButton";
import {
  pink500,
  grey500,
  grey200,
  green400,
  white
} from "material-ui/styles/colors";

@connect((state) => {
  return {
    user: state.user.user,
    fetching: state.user.fetching,
    fetched: state.user.fetched,
    updated: state.user.updated,
    updating: state.user.updating,
    errors: state.user.errors
  }
})
class Edit extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDateTimeChange = this.onDateTimeChange.bind(this);
  }


  componentDidMount() {
    this.props.dispatch(fetchUser(this.props.match.params.id));
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
    this.props.dispatch(updateUser(this.state.user))
  }

  onDateTimeChange = (date) => {
    let user = Object.assign({}, this.state.user);
    user.date = String(moment(date).format("YYYY-MM-DD HH:mm"));
    this.setState({ user });

    if (!!this.props.errors['date']) {
      delete this.props.errors['date'];
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!!nextProps.user) {
      const user = nextProps.user;
      this.setState({ user });
    }
  }


  render() {
    const { user, fetching, errors } = this.props;

    if (fetching && !user.length) {
      return (
        <div>Loading</div>
      )
    }

    const { firstName, lastName, email, date } = this.state.user;

    return (
      <div>
        <h1>Edit User</h1>
        <div>
          <Link to='/'>
            <RaisedButton
              label="All"
              type="submit"
              backgroundColor={grey200}
              style={{ margin: '4em 0em 0em 0em' }}
            />
          </Link>
          <Link to={`/show/${this.state.user._id}`}>
            <RaisedButton
              label="show"
              type="show"
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

export default Edit;