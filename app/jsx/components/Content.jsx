/* @jsx React.DOM */

var React = require('react');
var Banner = require('./Banner.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <Banner />
        <div>
          <h1>Openstar</h1>
        </div>
      </div>
    );
  }
});