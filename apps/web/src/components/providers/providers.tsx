import { ReactNode } from "react";
import { ReduxProvider } from "./redux-provider";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <ReduxProvider>{children}</ReduxProvider>;
}
