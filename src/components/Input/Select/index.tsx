import { Container, Label } from '../style';
import { StyledSelect } from './style';

const Select = ({
  name,
  onChange,
  children,
  label,
}: {
  children: any;
  name: string;
  onChange: any;
  label?: string;
}) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <StyledSelect onChange={onChange} name={name}>
        {children}
      </StyledSelect>
    </Container>
  );
};

export default Select;
