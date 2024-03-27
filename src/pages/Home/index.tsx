import React from 'react';

import { Container  } from '@mui/material';
import { ContentContainer } from './styles';
import { ColorPickerWidget } from '../../components/color-picker';


export const Home: React.FC = () => {
  return (
    <Container sx={{background: 'white'}}>
      <ContentContainer>
        <ColorPickerWidget />
      </ContentContainer>
    </Container>
  )
}