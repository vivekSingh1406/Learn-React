import { UserContext } from "../context/ContextAPI";
import { useContext } from "react";

const useStore = () => {
  return useContext(UserContext);
};

export default useStore;
