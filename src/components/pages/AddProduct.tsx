import { useNavigate } from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

type Props = {};

const AddProduct = (props: Props) => {
  const navigate = useNavigate();
  const btn1func = () => {};
  //  reset form state when cancelin
  const btn2func = () => navigate('/');

  return (
    <>
      <Header
        title='Product Add'
        btn1name='Save'
        btn2name='Cancel'
        btn1func={btn1func}
        btn2func={btn2func}
      />
      <Footer />
    </>
  );
};

export default AddProduct;