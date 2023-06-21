import React, { Children } from "react";
import { Card } from "@mui/material";

const ImgCards = ({children}) => {
  return (
    <div>
      <Card
        sx={{
          height: 140,
          width: 100,
        }}
      >
        {children}
      </Card>
    </div>
  );
};


export default ImgCards;
