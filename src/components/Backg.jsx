import React from "react";

export  function Backg() {
   return (
      <div>
         <h2> 
            {" "}
            Using the <i> React inline styles </i> to set a background image
         </h2>
         <br></br>
         <div
            class = "image"
            style = {{
               height: "350px",
               width: "550px",
               backgroundImage:
               'url("https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-illustration%2F3d-illustration-rendering-futuristic-cyberpunk-260nw-2265068151.jpg&tbnid=UoBpH1PC5FWNCM&vet=12ahUKEwiFpIX-tbqDAxX6l2MGHellAqQQMygfegUIARChAQ..i&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fgamer-background&docid=jXOisCAzuiy03M&w=520&h=280&q=background%20image%20for%20gaming%20website&ved=2ahUKEwiFpIX-tbqDAxX6l2MGHellAqQQMygfegUIARChAQ")',
               backgroundSize: "contain",
               backgroundRepeat: "no-repeat",
            }}
         >
            This div contains a background image.
         </div>
      </div>
   );
}

