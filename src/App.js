import React from "react";
import Search from "./components/Search";
import "./App.css"
import SideTab from "./components/SideTab";

export default function App() {

  

  return (
    <>
      <SideTab/>
      <h1 id="title">The Cookening</h1>
      <Search />
      
    </>
  );
}