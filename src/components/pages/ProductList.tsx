import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContext';
import useTitle from '../../custom-hooks/useTitle';
import Products from '../content/Products';
import Header from '../layout/Header';

const ProductList = () => {
  useTitle('Product List');
  const navigate = useNavigate();
  const { setProducts, setMassDelete, massDelete } = useGlobalContext();

  const btn1func = useCallback(() => {
    navigate('/add-product');
    setMassDelete([]);
  }, [navigate]);

  const btn2func = useCallback(async () => {
    try {
      const res = await fetch(
        import.meta.env.VITE_SERVER_ROOT_URL + '/post/removeProductById.php',
        {
          method: 'POST',
          body: JSON.stringify(massDelete),
        }
      );
      if (res.ok) {
        setProducts((prev) =>
          prev.filter((item) => !massDelete.includes(item.id))
        );
        setMassDelete([]);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }, [massDelete, import.meta.env.VITE_SERVER_ROOT_URL]);

  return (
    <>
      <Header
        title='Product List'
        btn1name='ADD'
        btn2name='MASS DELETE'
        btn1func={btn1func}
        btn2func={btn2func}
        disableBtn2={!massDelete.length}
      />
      <Products />
    </>
  );
};

export default ProductList;
