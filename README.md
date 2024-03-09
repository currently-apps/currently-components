# Currently Components

Currently Components is a component library built with React, Storybook, TailwindCSS, and daisyUI.

It provides a collection of reusable UI components that can be easily integrated into the rest of the
currently apps ecosystem.

This library was scaffolded and setup using this reference tutorial [here](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma).

## Installation

To use Currently Components in your project, make sure you have Node.js version 21.7.1 or later installed. Then, follow these steps:

1. Install the library using npm:

   ```bash
   npm install @currently-apps/currently-components
   ```

   Replace `@currently-apps` with the appropriate npm scope.


2. Import the components in your React application:

   ```jsx
   import { Button, Card, Input } from '@currently-apps/currently-components';
   ```

3. Start using the components in your application:

   ```tsx
   function App() {
     return (
       <div>
         <Button>Click me!</Button>
         <Card>
           <Input placeholder="Enter your name" />
         </Card>
       </div>
     );
   }
   ```

## Development

If you want to contribute to Currently Components or customize the library for your specific needs, you can follow these steps to set up the development environment:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/currently-components.git
   ```

2. Navigate to the project directory:

   ```bash
   cd currently-components
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server and Storybook:

   ```bash
   npm run dev
   ```
   ```bash
   npm run storybook
   ```

   This will start the development server and open Storybook in your browser, where you can view and interact with the components.


5. Make changes to the components in the `lib` directory. Any changes you make will be reflected in the Storybook's and local dev server's live reload.


7. Build the library for production:

   ```bash
   npm run build
   ```

   This will generate the transpiled and optimized library files in the `dist` directory. Publishing will also build the library automatically.


8. Publish the library to npm:

   ```bash
   npm publish
   ```

   Note: Make sure to update the version number in the `package.json` file before publishing.

## Documentation

For detailed documentation and usage examples of each component, refer to the Storybook documentation generated for Currently Components. You can access the Storybook documentation by running the development server as mentioned in the Development section and navigating to the provided URL.

## License

Still figuring out licensing

---

**Note:** This project uses Node.js version 21.7.1. Please ensure you have this version or a compatible version installed before running the project.