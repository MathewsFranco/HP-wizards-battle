import { StyledButton } from './style';

type buttonProps = {
  label: string;
  variant?: 'primary' | 'outline';
  disabled?: boolean;
  onClick?: () => void;
};
const Button = ({ label, variant, disabled, onClick }: buttonProps) => {
  return (
    <StyledButton variant={variant} disabled={disabled} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
