// Interfaces
import ICardImageProps from '@alversoft/components/card-image/interfaces';

interface ICardImage extends ICardImageProps {
  id: number;
}

interface ICardImagesProps {
  images: ICardImage[];
}

export default ICardImagesProps;
