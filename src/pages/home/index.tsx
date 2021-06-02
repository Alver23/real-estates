// Dependencies
import { ReactElement } from 'react';

// Components
import Layout from '@alversoft/components/layout';

// Containers
import FavoritesList from '@alversoft/containers/favorites-list';

const HomePage = (): ReactElement => {
  return (
    <Layout>
      <div className="m-auto container pt-8 md:pt-14">
        <h1 className="font-semibold text-center text-primary text-2xl md:text-3xl mb-4 md:mb-0">
          Listas de favoritos
        </h1>
        <FavoritesList />
      </div>
    </Layout>
  );
};

export default HomePage;
