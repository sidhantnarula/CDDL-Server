import React from "react";

export default class Display extends React.Component {
   
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      const script = document.createElement("script");
      script.type = 'text/JavaScript';
      script.src = 'jmol-14.32.63/jsmol/JSmol.min.js'
      this.instance.appendChild(script);

      const script2 = document.createElement("script");
      script2.type = 'text/JavaScript';
      script.src = 'jmol-14.32.63/jsmol/js/Jmol2.js';
      this.instance.appendChild(script2);

      const script3 = document.createElement("script");
      script3.type = 'text/JavaScript';
      script3.innerHTML = "jmolInitialize('jmol-14.32.63/jsmol');jmolApplet(400, `load" + this.props.items + "`, 0);"
      this.instance.appendChild(script3);
   }

    render() {
       return (
          <>
            <div id="display" ref={el => (this.instance = el)} />
          </>
       );
    }
 }
