import { ProductAccessoryForm, ProductPreventiveForm, ProductUnitForm } from '../components';
import { ProductType } from '../types';

type Props = {
  type: ProductType;
};

export const ProductCreate: React.FC<Props> = ({ type }) => {
  function renderForm() {
    switch (type) {
      case 'main':
        return <ProductUnitForm />;
      case 'accessories':
        return <ProductAccessoryForm />;
      case 'preventive':
        return <ProductPreventiveForm />;
      default:
        return null;
    }
  }

  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Data Produk</h1>
      </div>

      {renderForm()}
    </main>
  );
};
