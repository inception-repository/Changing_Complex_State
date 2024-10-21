import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });
  // const [fname, setFName] = useState("");

  // const [lname, setLName] = useState("");
  // console.log(sname);

  // function handleChange(event) {
  //   // console.log("Changed");
  //   // console.log();
  //   // console.log(event.target.placeholder);
  //   // console.log(event.target.type);
  //   setFName(event.target.value);
  //   // setLName(event.target.value);
  // }

  // function updateFName(event) {
  //   const firstName = event.target.value;
  //   setFName(firstName);
  //   // setLName(lname);
  //   event.preventDefault();
  // }

  function handleChange(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name;

    const { value, name } = event.target;
    // console.log(newValue);
    // console.log(inputName);
    // if (inputName === "fName") {
    //   setFullName({ fName: newValue });
    // } else if (inputName === "lName") {
    //   setFullName({ lName: newValue });
    // }

    setFullName((prevValue) => {
      console.log(prevValue);
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  }

  // function updateLName(event) {
  //   const lastName = event.target.value;
  //   setLName(lastName);
  //   event.preventDefault();
  // }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fname}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
