import {useState} from 'react'
import { useParams } from 'react-router-dom';

function ProductPage({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Your comment has been added');
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const convertToUSD = (amount) => (amount / 36.92).toFixed(2);
  const convertToUAH = (amount) => (amount * 36.92).toFixed(2);

  const [priceInUAH, setPriceInUAH] = useState(product.price);
  const [priceInUSD, setPriceInUSD] = useState(convertToUSD(product.price));

  const handleUAHChange = (event) => {
    const uahAmount = event.target.value;
    setPriceInUAH(uahAmount);
    setPriceInUSD(convertToUSD(uahAmount));
  };

  const handleUSDChange = (event) => {
    const usdAmount = event.target.value;
    setPriceInUSD(usdAmount);
    setPriceInUAH(convertToUAH(usdAmount));
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Comment:
          <textarea
            value={comment}
            onChange={handleCommentChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Price:</h3>
        <label>
          UAH:
          <input
            type="number"
            value={priceInUAH}
            onChange={handleUAHChange}
          />
        </label>
        <label>
          USD:
          <input
            type="number"
            value={priceInUSD}
            onChange={handleUSDChange}
          />
        </label>
      </div>
    </div>
  );
}

export default ProductPage;

