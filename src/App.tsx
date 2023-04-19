import { MantineProvider, Text, TextInput } from '@mantine/core';
import FormGenerator from './Components/FormGenerator';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <FormGenerator />
    </MantineProvider>
  );
}

export default App;
