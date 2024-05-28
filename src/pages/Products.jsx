import ProductCard from '../components/ProductCard'

const Products = () => {
  const products = [
    {
      title: 'AAA',
      price: 500
    },
    {
      title: 'BBB',
      price: 600
    },
    {
      title: 'CCC',
      price: 700
    },
    {
      title: 'DDD',
      price: 300
    },
    {
      title: 'EEE',
      price: 800
    },
  ]
  return (
    <div>
      <h2 className='p-2'>*商品一覧*</h2>
      {products.map((product, index) => (
        <ProductCard title={product.title} price={product.price} key={index} />
      ))}

    </div>
  )
}

export default Products