import imgPlaceholder from '../../../assets/images/wizard-silhouette.jpg';
import { Avatar, Container, WizardName } from './style';

type WizardCardProps = {
  isActive: boolean;
  wizardName: string;
  wizardAvatar: string;
  onClick: () => void;
};

const WizardCard = ({
  isActive,
  wizardName,
  wizardAvatar,
  onClick,
}: WizardCardProps) => {
  return (
    <Container onClick={onClick} isActive={isActive}>
      <Avatar src={wizardAvatar || imgPlaceholder} />
      <WizardName>{wizardName}</WizardName>
    </Container>
  );
};

export default WizardCard;
