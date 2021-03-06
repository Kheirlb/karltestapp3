import CatInputs from "./CatInputs";
import Draggable from "react-draggable";
//https://itnext.io/building-a-dynamic-controlled-form-in-react-together-794a44ee552c
//https://blog.logrocket.com/the-best-styling-in-react-tutorial-youve-ever-seen-676f1284b945/

class Form extends React.Component {
  state = {
    cats: [{name:"", age:""}],
    owner: "",
    description: ""
  }
  handleChange = (e) => {
    if (["name", "age"].includes(e.target.className) ) {
      let cats = [...this.state.cats]
      cats[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
      this.setState({ cats }, () => console.log(this.state.cats))
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() })
    }
  }
  addCat = (e) => {
    this.setState((prevState) => ({
      cats: [...prevState.cats, {name:"", age:""}],
    }));
  }
  handleSubmit = (e) => { e.preventDefault() }
  render() {
    let {owner, description, cats} = this.state
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
        <label htmlFor="name">Owner</label>
        <input type="text" name="owner" id="owner" value={owner} />
        <label htmlFor="description"> Description</label>
        <input type="text" name="description" id="description" value={description} />
        <button onClick={this.addCat}>Add new cat</button>
        <CatInputs cats={cats}
        />
      </form>
    )
  }
}
export default Form
