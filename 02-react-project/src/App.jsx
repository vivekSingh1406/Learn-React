import Counter from './components/Counter';
import ProductCard from './components/ProductCard';
function App() {

  // return (
  //    <div style={{ textAlign: 'center', marginTop: '50px' }}>
  //     <h1>Counter-Number</h1>
  //     <Counter />
  //   </div>
  // )


  // Example of props in reactjs
  const handleBuy = (productName) => {
    alert(`You purchased: ${productName}`);
  };

  return (
    <div>
      <h1>Featured Products</h1>

      <ProductCard
        name="Smartphone"
        price={25000}
        description="Latest Android smartphone with powerful performance."
        onBuy={() => handleBuy("Smartphone")}
      />

      <ProductCard
        name="Laptop"
        price={60000}
        description="High-performance laptop for professionals and gamers."
        onBuy={() => handleBuy("Laptop")}
      />

      <ProductCard
        name="Smartwatch"
        price={5000}
        description="Fitness-focused smartwatch with heart rate monitor."
        onBuy={() => handleBuy("Smartwatch")}
      />
    </div>
  );
}

export default App
