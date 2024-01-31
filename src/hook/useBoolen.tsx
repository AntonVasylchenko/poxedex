import React from "react";

type useBoolenType = { status: boolean; handlerStatus: () => void };

export const useBoolen = (initBoolen: boolean = false): useBoolenType => {
  const [status, setStatus] = React.useState(initBoolen);

  const handlerStatus = () => {    
    setStatus((prev) => !prev);
  };
  return {
    status,
    handlerStatus,
  };
};
