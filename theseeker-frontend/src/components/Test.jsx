import { useEffect, useState } from "react";
import { getConnection } from "../api/testApi";

function Test() {

  const [text, setText] = useState();

  useEffect(() => {
    getConnection()
      .then((res) => setText(res.data))
      .catch((err) => {
        setText("There is an error connecting backend with frontend.")
        console.log(err);
      })
  }, []);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}

export default Test;