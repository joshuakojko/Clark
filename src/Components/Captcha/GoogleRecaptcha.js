import ReCAPTCHA from 'react-google-recaptcha';

import config from '../../config/config.json';

const GoogleRecaptcha = ({ setCaptchaValue }) => {
  return (
    <ReCAPTCHA
      sitekey={config.sitekey}
      onChange={setCaptchaValue}
      theme='dark'
      style={{
        display: 'inline-block',
        overflow: 'hidden',
        width: '302px',
        height: '76px',
      }}
    />
  );
};

export default GoogleRecaptcha;