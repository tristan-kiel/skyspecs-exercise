import React, { useEffect, useState } from "react";

const Interface = () => {
    const [connected, setConnected] = useState(false);
    useEffect(() => {
      const timer = setInterval(
        async () =>
          fetch("http://localhost:3010")
            .then(() => setConnected(true))
            .catch((e) => setConnected(false)),
        1000
      );
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="Interface">
        <p>Your Server is {connected ? "" : "not "}running</p>  
        <form>
            <label>
             username:&nbsp; 
             <input type="text" name="username" />
             &nbsp;
             <input type="submit" value="Submit" />
            </label>
        </form>
      </div>
    );
  };
  
  export default Interface;