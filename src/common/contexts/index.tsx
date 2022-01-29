import RefsProvider from "./refs-context";

export const ContextProviders: React.FC = ({ children }) => (
  <RefsProvider>{children}</RefsProvider>
);
