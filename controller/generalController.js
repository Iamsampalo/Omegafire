var express = require('express')
const { Router } = require('express')
const path = require("path")
const router = express.Router();

const homepage =(req,res)=>{
    res.send("homepage")
}

const login =(req,res)=>{
    res.send("welcome to login")
}

const registerpage =(req,res)=>{
    
    const Username = req.body.username
    const Email = req.body.email
    const Phonenumber = req.body.Phonenumber
    const Address = req.body.Address
  
  const td =`<table>
  <tr><td><label>Username</label></td><td><label>${Username}</label></td></tr>
  <tr><td><label>Email</label></td><td><label>${Email}</label></td></tr>
  <tr><td><label>Phone number</label></td><td><label>${Phonenumber}</label></td></tr>
  <tr><td><label>Address</label></td><td><label>${Address}</label></td></tr>
  </table>
  `;
  
  res.send(td)
  
}



module.exports = {
    homepage,
    login,
    registerpage,
}