import { useEffect, useState } from "react";
import * as Mui from "@mui/material";
export default function Input(props) {

    const [rendr, setRendr] = useState([])
    
    const addToRenderList = (element) => props.setToRender(prev => [...prev, element])

   
    

  return (
    <div>
      <p onClick={() => addToRenderList(Mui.Button)}>button</p>
      <p onClick={() => addToRenderList(Mui.Checkbox)}>Checkbox</p>

    </div>
  );
}
