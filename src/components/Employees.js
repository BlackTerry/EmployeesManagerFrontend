import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './employees.css';

/*
const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);

*/
  
const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
});



class Employees extends Component{
    constructor(){
        super();
        this.state = {
          employees:[]
        }
    
    }
    
    componentDidMount(){
        fetch('http://localhost:8080/employees')
        .then(response => response.json())
        .then(employees => this.setState({employees}, () => console.log('Employees fetched...', employees)));
    }


    render(){
        return(
            <Paper>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Employee ID</TableCell>
                        <TableCell>Employee Name</TableCell>
                        <TableCell>Employee Position</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.employees.map(employee =>(
                        <TableRow key={employee.id}>
                            <TableCell>{ employee.id }</TableCell>
                            <TableCell>{ employee.name }</TableCell>
                            <TableCell>{employee.position}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

Employees.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (Employees);