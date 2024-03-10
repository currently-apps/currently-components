import type {Preview} from "@storybook/react";
import type {ThemeConfig} from "storybook-addon-data-theme-switcher";

const preview: Preview = {
   parameters: {
      actions: {argTypesRegex: "^on[A-Z].*"},
      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
         },
      },
   },
};

export const globalTypes = {
   dataThemes: {
      defaultValue: {
         list: [
            {name: "Light", dataTheme: "light", color: "#ffffff"},
            {name: "Dark", dataTheme: "dark", color: "#000000"},
            {name: "Rainforest", dataTheme: "rainforest", color: "#00755e"},
            {name: "Candy", dataTheme: "candy", color: "#ffb7d5"},
            {name: "Rose", dataTheme: "rose", color: "#ff007f"},
            {name: "Synthwave", dataTheme: "synthwave", color: "#41132b"},
            {name: "Midnight", dataTheme: "midnight", color: "#000000"},
            {name: "Coffee", dataTheme: "coffee", color: "#6f4e37"},
         ],
         dataAttribute: "data-theme", // optional (default: "data-theme")
         clearable: true,             // optional (default: true)
      } satisfies ThemeConfig,
   },
};
export default preview;
