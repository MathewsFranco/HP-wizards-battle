import { Container, Label, StyledInput } from './style';

const Input = ({
  label,
  placeholder,
  name,
  onChange,
  type = 'text',
}: {
  placeholder?: string;
  name: string;
  type?: string;
  label?: string;
  onChange: any;
}) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <StyledInput
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </Container>
  );
};

export default Input;
