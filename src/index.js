import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const Person =({img,name,job,children})=>{
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return(
    <article className ="Person">
<img  className="Image" src={url} alt="Person Image"></img>
  <h4>{name}</h4>
<h4>{job}</h4>
{children}
<hr/>
    </article>
  );
}
const PersonList =()=>{
  return(
    <section className="Person-list">
      <Person img="34" name="Daya" job="Developer"/>
      <Person img="24" name="Ashish" job="Designer">
        <p>lorem ipsum dolor sit consectectur</p>
      </Person>
      <Person img="54" name="Vijay" job="Tester"/>
      <Person img="74" name="Sachin" job="Monitoring"/>
      <Person img="84" name="Deeksha" job="Network Monitor"/>
    </section>
  );
}
ReactDOM.render(<PersonList/>,document.getElementById("root"));