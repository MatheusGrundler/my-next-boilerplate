import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Home Essencial Soul"
          description="Página incial description"
        />
      }
    >
      <h1 className="bg-gold-500">Página inicial</h1>
    </Main>
  );
};

export default Index;
