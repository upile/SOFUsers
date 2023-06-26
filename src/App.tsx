import React from 'react';
import logo from './logo.svg';
import './App.css';
import StackOverFlowUsersView from './components/StackOverFlowUsers/View/StackOverFlowUsers';
import { Provider } from 'react-redux';
import store from './redux/Store/Store';


const Top20StackOverFlowUsers = () => (
  <Provider store = { store }>
  <StackOverFlowUsersView />
</Provider>
)

export default function App() {
  return (<Top20StackOverFlowUsers />);
}
