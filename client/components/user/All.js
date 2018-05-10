import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchUsers } from "../../store/actions/userActions";
import moment from "moment";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentCreate from "material-ui/svg-icons/content/create";
import ActionDelete from "material-ui/svg-icons/action/delete";
import ContentAdd from "material-ui/svg-icons/content/add";
import ContentDetail from "material-ui/svg-icons/action/list";
import {
  pink500,
  grey500,
  green400,
  white
} from "material-ui/styles/colors";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";



const styles = {
  fab: {
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
    marginRight: 20
  },
  columns: {
    id: {
      width: "10%"
    },
    name: {
      width: "40%"
    },
    price: {
      width: "20%"
    },
    category: {
      width: "15%"
    },
    edit: {
      width: "20%"
    }
  }
};

class All extends Component {

  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }


  render() {
    const { users, fetching } = this.props;

    if (fetching && !users.length) {
      return (
        <div>Loading</div>
      )
    }


    return (
      <div>
        <div>
          <Link to='/create'>
            <FloatingActionButton
              style={styles.fab}
              backgroundColor={pink500}
            >
              <ContentAdd />
            </ FloatingActionButton>
          </Link>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn style={styles.columns.price}>
                  Id
                  </TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.price}>
                  FIRST NAME
                </TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.price}>
                  LAST NAME
                </TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.id}>
                  EMAIL
                </TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.category}>
                  DATE
                </TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.category}>
                  ACTIONS
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users ? users.map(user => (
                <TableRow key={user._id}>
                  <TableRowColumn style={styles.columns.price}>
                    <Link to={`/show/${user._id}`}>{user._id}</Link>
                  </TableRowColumn>
                  <TableRowColumn style={styles.columns.price}>
                    {user.firstName}
                  </TableRowColumn>
                  <TableRowColumn style={styles.columns.price}>
                    {user.lastName}
                  </TableRowColumn>
                  <TableRowColumn style={styles.columns.id}>
                    {user.email}
                  </TableRowColumn>
                  <TableRowColumn style={styles.columns.category}>
                    {moment(user.date).format("YYYY-MM-DD HH:mm")}
                  </TableRowColumn>
                  <TableRowColumn style={styles.columns.category}>
                    <Link to={`/show/${user._id}`}>
                      <FloatingActionButton
                        mini={true}
                        backgroundColor={grey500}
                      >
                        <ContentDetail />
                      </FloatingActionButton>
                    </Link>
                    <Link to={`/edit/${user._id}`}>
                      <FloatingActionButton
                        mini={true}
                        backgroundColor={green400}
                      >
                        <ContentCreate />
                      </FloatingActionButton>
                    </Link>
                  </TableRowColumn>
                </TableRow>
              )) : undefined}
            </TableBody>
          </Table>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    fetching: state.user.fetching,
    fetched: state.user.fetched
  }
};

export default connect(mapStateToProps)(All);
export { All as PureAll };
