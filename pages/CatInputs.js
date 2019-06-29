// src/components/CatInputs.js
import Draggable from "react-draggable";

const TodoComponent = {
  width: "260px",
  margin: "2px auto",
  backgroundColor: "purple",
  minHeight: "60px",
  boxSizing: "border-box",
  border: "8px solid purple",
  borderRadius: "8px",
  position: "absolute",
  top: "50px"
}

const TextColor = {
  color:"white"
}

const CatInputs = (props) => {
  return (
    props.cats.map((val, idx)=> {
      let catId = `cat-${idx}`, ageId = `age-${idx}`
      return (
        <Draggable>
        <div key={idx} style={TodoComponent}>
          <label style={TextColor} htmlFor={catId}>{`Cat #${idx + 1}`} </label>
          <input
            type="text"
            name={catId}
            data-id={idx}
            id={catId}
            value={props.cats[idx].name}
            className="name"
          />
          <label style={TextColor} htmlFor={ageId}> Age</label>
          <input
            type="text"
            name={ageId}
            data-id={idx}
            id={ageId}
            value={props.cats[idx].age}
            className="age"
          />
        </div>
        </Draggable>
      )
    })
  )
}

// <style jsx>{`
//   div {
//      border-style: solid;
//      color: red;
//      max-width: 245px;
//      position: absolute;
//      top: 60px;
//   }
// `}</style>

export default CatInputs
