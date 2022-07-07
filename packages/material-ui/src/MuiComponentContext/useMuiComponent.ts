import { useContext } from "react";
import Mui5ContextProps from "../Theme5/Mui5ContextProps";
import MuiComponentContext from "./MuiComponentContext";

export function useMuiComponent(): Mui5ContextProps {
  const muiComponents = useContext(MuiComponentContext);

  if (!muiComponents) {
    throw new Error(
      "v5 material-ui components and icons must be installed as dependencies"
    );
  }

  return muiComponents;
}
