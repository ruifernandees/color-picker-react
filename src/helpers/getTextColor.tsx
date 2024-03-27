export function getTextColor(background: string) {
  // Convert hexadecimal color to RGB
  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  };

  // Calculate luminance of the color
  const calculateLuminance = (r: number, g: number, b: number) => {
    const a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  const [r, g, b] = hexToRgb(background);

  // Calculate luminance of the background color
  const luminance = calculateLuminance(r, g, b);

  // Determine whether to return white or black based on the luminance
  return luminance > 0.5 ? 'black' : 'white';
}