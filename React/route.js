import Relay from 'react-relay';
// import Cities from './component.js';

class HomeRoute extends Relay.Route {
  static routeName = 'Home';
  static queries = {
    cities: (Component) => Relay.QL`
      query AA {
        city_search(search_term: "New") {
          ${Component.getFragment('cities')}
        }
      }
    `,
  };
}

export default HomeRoute;
