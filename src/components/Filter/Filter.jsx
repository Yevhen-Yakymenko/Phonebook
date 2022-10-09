import React, { Component } from 'react';

export default class Filter extends Component {
  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.props.onFilter({ [name]: value });
  };

  render() {
    return (
      <label>
        Find contact by name
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Find contact by name."
          required
          onChange={this.handleChange}
        />
      </label>
    );
  }
}
