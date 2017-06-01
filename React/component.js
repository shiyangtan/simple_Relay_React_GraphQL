import React from 'react';
import Relay from 'react-relay';

class City extends React.Component {
  render() {
    var {city_name} = this.props.city;

    return (
      <li>{city_name}</li>
    );
  }
}

City = Relay.createContainer(City, {
  fragments: {
    city: () => Relay.QL`
      fragment on City {
        city_name
      }
    `,
  }
});

class Cities extends React.Component {
  render() {
    var {city_list} = this.props.cities;

    return (
      <div>
        <ul>
          {city_list.map(city => <City city={city} />)}
        </ul>
      </div>
    );
  }
}

Cities = Relay.createContainer(Cities, {
  fragments: {
    cities: () => Relay.QL`
      fragment on CityList {
        city_list {
          ${City.getFragment('city')}
        }
      }
    `,
  },
});

export default Cities;
