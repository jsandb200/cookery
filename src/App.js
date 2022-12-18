import React, {useState} from "react";
import Search from "./components/Search";
import "./App.css"
import SideTab from "./components/SideTab";

export default function App() {
  const [selectedMessage,setMessage]=useState("apple");
  

  return (
    <>
      <SideTab setMessage={setMessage}/>
      <h1 id="title">Cookery App</h1>
      <Search selectedMessage={selectedMessage}/>
      
    </>
  );
}