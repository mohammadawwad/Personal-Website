import React, { useEffect, useState } from "react";

const CustomThemeHook = () => {
  //radio button state
  const [value, setValue] = useState(true);
    
  return {value, setValue};
}

export default CustomThemeHook;