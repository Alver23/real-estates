// Dependencies
import { FC } from 'react';

// Components
import CardImage from '@alversoft/components/card-image';

// Interfaces
import ICardImagesProps from '@alversoft/components/card-images/interfaces';

// Styles
import './scss/index.scss';

const CardImages: FC<ICardImagesProps> = ({ images }: ICardImagesProps) => {
  const imagesCopy = [...images];
  const newImages = imagesCopy.splice(0, 3);
  let containerStyle = `card-images-container--content-${images.length}`;
  if (images.length >= 3) {
    containerStyle = 'card-images-container--content-3';
  }
  return (
    <div className={`card-images-container ${containerStyle}`}>
      {newImages.map(({ id, image, alt }, index) => {
        const className = `image-container-${index + 1}`;
        return (
          <div key={id} className={className}>
            <CardImage image={image} alt={alt} />
          </div>
        );
      })}
      {imagesCopy.length > 0 && (
        <div className="absolute | right-4 | z-50 | h-full | flex items-center | font-semibold | text-white text-lg">
          <span>+ {imagesCopy.length}</span>
        </div>
      )}
    </div>
  );
};

export default CardImages;
