// Dependencies
import { ReactElement } from 'react';
import { VscAdd } from 'react-icons/vsc';

// Components
import Card from '@alversoft/components/card';

const FavorityNewList = (): ReactElement => (
  <>
    <Card containerStyle=" bg-blue-100 h-full text-blue-400 flex justify-center items-center">
      <VscAdd size={44} className="text-blue-400" />
    </Card>
    <div className="flex flex-col justify-center items-center mt-4">
      <span className="text-lg text-blue-400 font-medium">Crear una nueva lista</span>
    </div>
  </>
);

export default FavorityNewList;
