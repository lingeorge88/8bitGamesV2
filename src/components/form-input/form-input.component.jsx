import { FormInputLabel, Input, Group } from './form-input.styles';
import 'nes.css/css/nes.min.css';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group className= 'nes-field'>
      <Input className='nes-input'{...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;