import React from 'react';
import {Alert, Text} from 'react-native';

const data = [
  {
    title: 'Invalid Username !',
    msg: 'Must be atleast 5 characters long and You can use uppercase, lowercase, numbers, special-character(&), underscore(_)',
  },
  {
    title: 'Invalid E-mail Address !',
    msg: 'Should be like: example@gmail.com',
  },
  {
    title: 'Invalid Phone Number !',
    msg: 'Must be a Ten Digit Number',
  },
  {
    title: 'Invalid Password',
    msg: 'Must be atleast 8 characters long and contain atleast 1-uppercase, 1-lowercase, 1-numbers, 1-special-character(like: @,_,#, ....)',
  },
  {
    title: 'Password Mismatch !',
    msg: 'Password should be same',
  },
];

const alertz = val => {
  Alert.alert(val.title, val.msg, [
    {
      text: 'OK',
      style: 'cancel',
    },
  ]);
};

export const customAlert = state => {
  const regUsername = /^[\w]{5,20}$/;
  const regMail = /^([a-z 0-9 \. -]+)@([a-z 0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
  const regPhone = /^[0-9]{10}$/;
  const regPassword = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/; //If this is true means password is not correct!

  if (!regUsername.test(state.username)) {
    alertz(data[0]);
    return false;
  } else if (!regMail.test(state.email)) {
    alertz(data[1]);
    return false;
  } else if (!regPhone.test(state.phone)) {
    alertz(data[2]);
    return false;
  } else if (regPassword.test(state.password)) {
    alertz(data[3]);
    return false;
  } else if (state.password !== state.confirmPassword) {
    alertz(data[4]);
    return false;
  } else {
    return true;
  }
};
