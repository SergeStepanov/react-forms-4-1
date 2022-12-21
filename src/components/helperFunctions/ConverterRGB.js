function ConverterRGB(hex) {
  const r = parseInt(`0x${hex.slice(1, 3)}`);
  const g = parseInt(`0x${hex.slice(3, 5)}`);
  const b = parseInt(`0x${hex.slice(5, 7)}`);
  const rgb = `rgb(${r}, ${g}, ${b})`;

  return rgb;
}

export default ConverterRGB;
