import React, { Component } from 'react';
import './App.css';
import Iron from'../src/fruits/pome';

class App extends Component{

        state = {
        persons: [
          {name:"Arul", guru:'Murugan'},
          {name:"Selva", guru:"skandha"},
          {name:"Anandhan", guru:"kathirvela"},
        ],
      }

      switchNameHandler = (newName) => {
        this.setState( {
            persons:[{name:newName, guru:"karthi"},
                    {name:"agan", guru:"vela"},
                    {name:"ratan", guru:"shanmuga"},
          ],
          otherPerson: 'Arul Loves krishna',
          showPerson: false,
      } )
    }

    nameChangedHandler = (event) => {
      this.setState( {
          persons:[{name:"Arul", guru:"karthi"},
                  {name:event.target.value, guru:"vela"},
                  {name:"ratan", guru:"shanmuga"},
        ]
    } )
  }

    togglePersonHandler = () => {
        const doesPerson = this.state.showPerson;
        this.setState({showPerson: !doesPerson});
    }


render (){

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPerson ){
      persons = (
        <div>
        <Person 
        name={this.state.persons[0].name}
        guru={this.state.persons[0].guru} />
        <Person 
        name={this.state.persons[1].name} 
        guru={this.state.persons[1].guru} 
        click={this.switchNameHandler.bind(this, 'kandhavel')}
        changed={this.nameChangedHandler} >
        Telling from my heart
        </Person>
        <Person 
        name={this.state.persons[2].name} 
        guru={this.state.persons[2].guru} />
        </div> 
      );
    }
  return (
      <div className='App'>
      <h1> Hello world</h1>
      <button style={style} 
      onClick={this.togglePersonHandler}>Change person name</button>
      {persons}
      </div> 
  );

}}

export default App;



// const App = (props) => {

//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {name:'Arul', guru:"Muruga"},
//       {name:'Selva', guru:"Kandha"},
//       {name:'anand', guru:"karthi"},
//     ],
//     // otherState:'Muruga is powerful'
//   }
//   );
//   // console.log(personsState);
//   const [otherState, setOtherState] = useState('Muruga is powerfull');
//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     // console.log('was clicked!');
//     setPersonsState( {
//       persons: [ 
//           {name:'Arul Anandhan', guru:'Murugan'},
//           {name:'Arul Selva', guru:'Skandhan'},
//           {name:'Anand', guru:'Karthikeyan'},
//       ]
//   } )
//   }

// return (
//   <div className='App'>
//   <h1> Hello world</h1>
//   <button onClick={switchNameHandler}>Switch Name</button>
//   <Person name={personsState.persons[0].name} guru={personsState.persons[0].guru} />
//   <Person name={personsState.persons[1].name} guru={personsState.persons[1].guru}>Telling from my heart</Person>
//   <Person name={personsState.persons[2].name} guru={personsState.persons[2].guru} />
//   </div> 
// );

// }
