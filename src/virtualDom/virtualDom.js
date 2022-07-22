import { useState } from "react";

import Input from "./input";
import Output from "./output";
import AddElement from "./addElement";
import { vrDom } from "./domObj";

export default function VirtualDom() {
  const [Dom, setDom] = useState(vrDom);

  return (
    <>
      <AddElement />
      <div id="workspace">
        <Input Dom={Dom} setDom={setDom} />
        <Output Dom={Dom} />
      </div>
    </>
  );
}
