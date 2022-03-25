import React, { useEffect, useState } from "react";

const themeValue = () => {
  //radio button state
  const [value, setValue] = useState(true);
    
  return {value, setValue};
}

export default themeValue;