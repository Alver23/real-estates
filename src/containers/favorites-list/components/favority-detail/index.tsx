// Dependencies
import { ReactElement, FC } from 'react';

// Components
import CardImages from '@alversoft/components/card-images';

// Interfaces
import IFavorityDetailProps from './interfaces';

const FavorityDetail: FC<IFavorityDetailProps> = ({ images, name }: IFavorityDetailProps): ReactElement => {
  let message = 'propiedades guardadas';
  if (images.length === 1) {
    message = 'propiedad guardada';
  }
  return (
    <>
      <CardImages images={images} />
      <div className="mt-4 flex flex-col">
        <span className="text-lg text-primary font-semibold">{name}</span>
        <span className="text-green-400 mt-2">
          {images.length} {message}
        </span>
      </div>
    </>
  );
};

export default FavorityDetail;
