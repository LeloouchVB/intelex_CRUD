import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from "moment/moment";
import { connect } from 'react-redux';
import { fetchUser, deleteUser, resetUserState } from "../../store/actions/userActions";
import RaisedButton from "material-ui/RaisedButton";
import {
  pink500,
  grey500,
  grey200,
  green400,
  white
} from "material-ui/styles/colors";
import FloatingActionButton from "material-ui/FloatingActionButton";


@connect((state) => {
  return {
    user: state.user.user,
    fetching: state.user.fetching,
    fetched: state.user.fetched,
    deleting: state.user.deleting,
    deleted: state.user.deleted
  }
})
class Show extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  componentWillMount() {
    this.props.dispatch(fetchUser(this.props.match.params.id))
  }

  delete(id) {
    this.props.dispatch(deleteUser(id));
  }

  componentWillReceiveProps(nextProps) {
    if (!!nextProps.user) {
      const user = nextProps.user;
      this.setState({ user });
    }
  }


  render() {
    const { user, fetching } = this.props;

    if (fetching && !user.length) {
      return (
        <div>Loading</div>
      )
    }
    return (
      <div>
        <h1>User Profile</h1>

        <Link to='/'>
          <RaisedButton
            label="All"
            type="submit"
            backgroundColor={grey200}
            style={{ margin: '4em 0em 0em 0em' }}
          />
        </Link>
        <Link to={`/edit/${this.state.user._id}`}>
          <RaisedButton
            label="edit"
            type="edit"
            backgroundColor={grey200}
            style={{ margin: '4em 0em 0em 0em' }}
          />
        </Link>

        <RaisedButton
          label="delete"
          type="delete"
          onClick={this.delete.bind(this, this.state.user._id)}
          backgroundColor={grey200}
          style={{ margin: '4em 0em 0em 0em' }}
        />


        <div>
          <p>{`You ${this.state.user.firstName} ${this.state.user.lastName}`}</p>
          <p>{`Mail ${this.state.user.email}`}</p>
          <p>{`${moment(this.state.user.date).format("YYYY-MM-DD HH:mm")}`}</p>
          <p></p>
          </div>
      </div>
    );
  }
}

export default Show;