import React from "react";

export default class Display extends React.Component {
   
   constructor(props) {
      super(props);
   }

   componentDidUpdate() {
      const script = document.createElement("script");
      script.id = "display"
      script.type = 'text/JavaScript';
      script.innerHTML = "jmolInitialize('jmol-14.32.63/jsmol');\
                           jmolApplet(400, `load " + this.props.items + "`, 0);"
      this.instance.appendChild(script);
   }

    render() {
       return (
          <>
            <div id="display" ref={el => (this.instance = el)} />
          </>
       );
    }
 }
