import React from "react";
import { useState } from 'react';
import Input from "./input";
import Display from "./display";

export default class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {value: 'results/1A6W_top10.pdb'};
    }
  
    receiveChange = (childData) => {
      this.setState({value: childData});
    }

   render() {
      return (
         <>
            <div>
               <h1>UGA CDDL LISE</h1>
            </div>
            <Input communicateChange={this.receiveChange} />
            <Display items={this.state.value}/>
         </>
      );
   }
}