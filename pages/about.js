import Draggable from 'react-draggable';

class About extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      counter: 0 ,
      testArray: Array(9).fill(null)
    };
    //this.handleClick = this.handleClick.bind(this);
  }

  jumpTo() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  render() {
    const clicks2 = this.testArray;
    const clicks = click2 => {
      return (
        <li key={props.state.counter}>
          <button> Make Buttons</button>
        </li>
      );
    };

    return (
      <div>
        <button onClick={() => this.jumpTo()}>Count</button>
        <p>{this.state.counter}</p>
        <ol>{clicks2}</ol>
      </div>
    );
  }
}

//Very functional code
// class About extends React.Component {
//   render() {
//     return (
//       <div>
//         <button type="button">A Button</button>
//         <Draggable>
//         <form>
//           Drag: <input type="text" name="first"/>
//         </form>
//         </Draggable>
//       </div>
//     );
//   }
// }

export default About;
