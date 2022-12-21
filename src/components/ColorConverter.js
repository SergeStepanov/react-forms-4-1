import React, { useState } from 'react';
import ConverterRGB from './helperFunctions/ConverterRGB';

function ColorConverter() {
  const [inColor, setInColor] = useState('');
  const [outColor, setOutColor] = useState('RGB');
  document.body.style.backgroundColor = outColor;

  const handleConverter = ({ target }) => {
    setInColor(target.value);
    const regexTest = /^#([0-9A-Fa-f]){6}$/.test(target.value);

    if (target.value.length === 7 && !regexTest) {
      setOutColor('Ошибка!');
      document.body.style.backgroundColor = 'red';
      return;
    }

    if (!regexTest) {
      setOutColor('RGB');
      document.body.style.backgroundColor = 'white';
      return;
    }

    const rgb = ConverterRGB(target.value);
    setOutColor(rgb);
  };

  return (
    <>
      <div className='color-box'>
        <input
          type='text'
          className='in-color'
          maxLength='7'
          value={inColor}
          onChange={handleConverter}
          title='HEX фомат: #af09AF'
          placeholder='#afAF09'
          autoFocus
        />
        <p className='out-color'>{outColor}</p>
      </div>
    </>
  );
}

export default ColorConverter;
