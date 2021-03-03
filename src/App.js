import React, {Component} from 'react';
import Menus from './components/menus';


class App extends Component {
  render() {
    return (
        <Menus menus={this.state.menus} />
    )
  }

  state = {
    menus: []
  };

  componentDidMount() {
    fetch('http://localhost:8080/desiRestaurant/getMenu')
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          this.setState({ menus: data })
        })
        .catch(console.log)
  }
}

export default App;