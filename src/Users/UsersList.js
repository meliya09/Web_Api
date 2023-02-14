import { Container } from "@mui/material";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

//   const getUsers = async () => {
//     let users = await axios.get(`https://jsonplaceholder.typicode.com/users`);

//     setUsers(users.data);
//   }

//   function func() { 
//     //Original string 
//     var str = "Sincere@april.biz";
//     var array = str.split("@");
//    console.log(array); 
// } 
// func(); 

const getUsers = async () => {
  const users = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  const newUserValue = [];

  users.data.forEach((user, index) => {
    let arrEmail = user.email.split("@");
    let obj = {};
    obj.id = user.id;
    obj.name = user.name;
    obj.email = user.email;
    obj.company = user.company;
    obj.address = user.address;
    obj.phone = user.phone;
    obj.website = user.website;
    obj.arrEmail = arrEmail;
    newUserValue.push(obj);
  });
  console.log(newUserValue);

  setUsers(newUserValue);
};

  return (
    <>
      <Container>
        <Paper>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">No</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Username</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="center" colSpan={2}>Split Email</TableCell>
                  <TableCell align="center" colSpan={6}>Address</TableCell>
                  <TableCell align="left">Phone</TableCell>
                  <TableCell align="left">Website</TableCell>
                  <TableCell align="center" colSpan={3}>Company</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right"></TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">split 1</TableCell>
                  <TableCell align="left">split 2</TableCell>
                  <TableCell align="left">Street</TableCell>
                  <TableCell align="left">Suite</TableCell>
                  <TableCell align="left">City</TableCell>
                  <TableCell align="left">Zipcode</TableCell>
                  <TableCell align="left">lat</TableCell>
                  <TableCell align="left">lng</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">CatchPhrase</TableCell>
                  <TableCell align="left">BS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow
                    key={user.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="right">{index + 1}</TableCell>
                    <TableCell align="left">{user.name}</TableCell>
                    <TableCell align="left">{user.username}</TableCell>
                    <TableCell align="left">{user.email}</TableCell>
                    <TableCell align="left">{user.arrEmail[0]}</TableCell>
                    <TableCell align="left">{user.arrEmail[1]}</TableCell>
                    <TableCell align="left">{user.address.street}</TableCell>
                    <TableCell align="left">{user.address.suite}</TableCell>
                    <TableCell align="left">{user.address.city}</TableCell>
                    <TableCell align="left">{user.address.zipcode}</TableCell>
                    <TableCell align="left">{user.address.geo.lat}</TableCell>
                    <TableCell align="left">{user.address.geo.lng}</TableCell>
                    <TableCell align="left">{user.phone}</TableCell>
                    <TableCell align="left">{user.website}</TableCell>
                    <TableCell align="left">{user.company.name}</TableCell>
                    <TableCell align="left">{user.company.catchPhrase}</TableCell>
                    <TableCell align="left">{user.company.bs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </>
  );
}