// Memo

// 1. kyu memo ka use karte hain?
// Memo ka use unneccsary render ko rok ne ke liye hota hain.
// memo ko jis component me rakha hain memo usa component pe caching(un-neccesary re-reandering rokta hain.) karta hain.
// caching means pahli bar memory ke andar aapka props store hoy gya hain.
// second bar jab bhi aapke props ka address change ho tab hi chalana hain

// component ke props change hone pe memo re-render hota hain.
// jis component ko memo ke andar rap karege wo component unke props change hone pe re-render hoga.
// component ke export ko memo function dena hain.

// for example two component hain jaise ki ek counter.jsx and list.jsx
// counter compnent chalte time hame list component ki koi jarurat nahi hain.
// aesi hi list component chalte time hame counter comppnent ki jarur nahi hain.
// unse ke component ke export ko memo() de dete to component re-render nahi hoga.

function Counter({ count, setCount }) {
  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }
  console.log("counter rendered");

  return (
    <div className="flex items-center gap-4 justify-center p-12">
      <div className="flex items-center gap-4 rounded-md border border-neutral-500 p-8">
        <Button>
          <HiMinus onClick={handleDecrease} />
        </Button>
        <p className="font-semibold text-xl">{count}</p>
        <Button>
          <HiPlus onClick={handleIncrease} />
        </Button>
      </div>
    </div>
  );
}

export default memo(Counter);
// Example: C:\Users\hasti\Desktop\Website\ecommerce-app> ni andar
