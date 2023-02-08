import * as React from "react";

const useAutoFocus = () => {
    const inputRef = React.createRef<HTMLInputElement>();
  
    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);
  
    return inputRef;
  };
  
  export default useAutoFocus;0