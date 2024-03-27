import React, { useState } from 'react';
import { availableColors } from './data';
import { ColorGroup, ColorOption, LinkIcon, MainContainer, Title } from './styles';
import { Check } from '@mui/icons-material';
import { getTextColor } from '../../helpers/getTextColor';
import { Slider, Snackbar } from '@mui/material';
import { EColorType } from './props';

export const ColorPickerWidget: React.FC = () => {
  const [selectedColors, setSelectedColors] = useState({
    primary: 0,
    secondary: 0,
  });

  const [selectedShades, setSelectedShades] = useState({
    primary: 0,
    secondary: 0,
  });

  const [feedbackOpen, setFeedbackOpen] = useState(false);

  const handleColorSelection = (colorType: string, index: number) => {
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [colorType]: index,
    }));
  };

  const renderColorOptions = (colors: string[][], colorType: EColorType) => {
    return colors.map((option, index) => (
      <ColorOption
        key={index}
        color={option[selectedShades[colorType]]}
        onClick={() => handleColorSelection(colorType, index)}
      >
        {selectedColors[colorType] === index && (
          <Check style={{ color: getTextColor(option[selectedShades[colorType]]) }} />
        )}
      </ColorOption>
    ));
  };

  const renderCopyButton = (colorType: EColorType) => {
    return <LinkIcon onClick={() => {
      setFeedbackOpen(true)
      navigator.clipboard.writeText(availableColors[colorType][selectedColors[colorType]][selectedShades[colorType]]);
    }} />
  }

  return (
    <MainContainer>
      <Title>Primary color</Title>
      <ColorGroup>
        {renderColorOptions(availableColors.primary, EColorType.PRIMARY)}
        {renderCopyButton(EColorType.PRIMARY)}
      </ColorGroup>
      <Slider
        aria-label="Primary colors shade"
        defaultValue={0}
        valueLabelDisplay="auto"
        shiftStep={1}
        step={1}
        marks
        min={0}
        onChange={(event, newValue) => setSelectedShades(previous => ({
          ...previous,
          primary: newValue as number
        }))}
        max={4}
      />
      <Title>Secondary color</Title>
      <ColorGroup>
        {renderColorOptions(availableColors.secondary, EColorType.SECONDARY)}  
        {renderCopyButton(EColorType.SECONDARY)}
      </ColorGroup>
      <Slider
        aria-label="Secondary colors shade"
        defaultValue={0}
        valueLabelDisplay="auto"
        shiftStep={1}
        step={1}
        marks
        min={0}
        onChange={(event, newValue) => setSelectedShades(previous => ({
          ...previous,
          secondary: newValue as number
        }))}
        max={4}
      />
      <Snackbar
        open={feedbackOpen}
        autoHideDuration={6000}
        onClose={() => setFeedbackOpen(() => false)}
        message="Copied to clipboard"
      />
  </MainContainer>
  );
};
