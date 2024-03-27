## Color Picker Widget
![App Demonstration](https://github.com/ruifernandees/color-picker-react/blob/main/public/demonstration.gif?raw=true)
### 🚀 Running
```sh
# Install dependencies
yarn

# Run dev mode
yarn start
```

## 💻 Integration
You can integrate with the widget just importing it and adding to your screen. You can create a parent to adapt the size of the widget to your needs.
```tsx
import React from 'react';

import { ColorPickerWidget } from '../../components/color-picker';

// Your imports
import { ColorPickerContainer } from './styles';

export const Home: React.FC = () => {
  return (
    // JSX Code
      <ColorPickerContainer>
        <ColorPickerWidget />
      </ColorPickerContainer>
    // JSX Code
  )
}
```