import AppTheme from "./app-theme";
import { Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider as EmotionProvider } from "@emotion/react";

const ThemeProvider: React.FC = ({ children }) => (
  <EmotionProvider theme={AppTheme}>
    <PaperProvider theme={AppTheme}>{children}</PaperProvider>
  </EmotionProvider>
);

export default ThemeProvider;
