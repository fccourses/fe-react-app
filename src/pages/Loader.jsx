import React, { Component } from 'react';
import DataProvider from '../components/DataProvider';

class LoaderPage extends Component {
  loadPhones = () => fetch('/phones.json').then(res => res.json());
  loadUsers = () => fetch('/users.json').then(res => res.json());

  render () {
    return (
      <div>
        <DataProvider loadData={this.loadUsers}>
          {state => (
            <ol>
              {state.data.map(u => (
                <li key={u.id}>{u.name}</li>
              ))}
            </ol>
          )}
        </DataProvider>

        <DataProvider loadData={this.loadPhones}>
          {state => (
            <ul>
              {state.data.map(phone => (
                <li key={phone.id}>{phone.name}</li>
              ))}
            </ul>
          )}
        </DataProvider>
      </div>
    );
  }
}

export default LoaderPage;
