import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* 
  1. Подгружать данные (Передавать как грузить)
  2. Данными делится
  3. Рендер приходит в пропсах
*/
class DataProvider extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      isFetching: false,
      error: null,
    };
  }

  componentDidMount () {
    this.load();
  }

  load = () => {
    const { loadData } = this.props;

    this.setState({
      isFetching: true,
    });

    loadData()
      .then(data => this.setState({ data, isFetching: false }))
      .catch(error => this.setState({ error, isFetching: false }));
  };

  render () {
    const { children } = this.props;

    return children(this.state);
  }
}

DataProvider.propTypes = {
  render: PropTypes.func.isRequired,
};

export default DataProvider;
