// Dependencies
import { ReactElement, FC } from 'react';

// Interfaces
import ICardProps from './interfaces';

const Card: FC<ICardProps> = ({ children, containerStyle }: ICardProps): ReactElement => {
  return <div className={`rounded-lg ${containerStyle}`}>{children}</div>;
};

export default Card;
