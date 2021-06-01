// Dependencies
import { ReactElement, FC } from 'react';

// Components
import Card from '@alversoft/components/card';

// Interfaces
import ICardImageProps from './interfaces';

const CardImage: FC<ICardImageProps> = ({ image, alt }: ICardImageProps): ReactElement => {
  return (
    <Card>
      <img src={image} alt={alt} className="w-full border border-white | object-cover | rounded-lg" />
    </Card>
  );
};

export default CardImage;
