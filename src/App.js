import React,{Component} from 'react';
import CardList from './components/CardList';
/*import {robots} from './robots'*/
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import Errorboundary from './components/Errorboundary'
import './containers/App.css';

class App extends Component{
  constructor(){
    super()
      this.state = {
        robots:[],
        searchfield: ''
    }
  }
componentDidMount()
{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
    .then(users=>{
      this.setState({robots: users})
    });
}

onSearchchange=(event)=>{
  this.setState({searchfield:event.target.value})
}

render(){
  const filtered_robots=this.state.robots.filter(robots=>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
  if(this.state.robots.length === 0){
    return <h1>Loading</h1>
  }else{
           return(
         <div className='tc'>
           <h1 className='f1'>Robofriends</h1>
           <SearchBox searchchange={this.onSearchchange}/>
           <Scroll>
            <Errorboundary>
              <CardList robots={filtered_robots}/>
            </Errorboundary>
           </Scroll>
         </div>
       );
  }
}
}
export default App;
