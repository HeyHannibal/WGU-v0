import { useState } from "react";

import CropSquareSharpIcon from "@mui/icons-material/CropSquareSharp";
import Toolbar from "@mui/material/Toolbar";
import TextFieldsIcon from "@mui/icons-material/TextFields";

export default function PickElement(props) {
  const { activeElement, setActiveElement } = props;

  return (
    <Toolbar id="toolbar">
      <CropSquareSharpIcon
        color={activeElement === "div" ? "primary" : "action"}
        fontSize="large"
        onClick={() => setActiveElement("div")}
      />
      <TextFieldsIcon
        color={activeElement === "p" ? "primary" : "action"}
        fontSize="large"
        onClick={() => setActiveElement("p")}
      />
    </Toolbar>
  );
}

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// export default function ButtonAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
