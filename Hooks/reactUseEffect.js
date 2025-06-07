// UseEffect :

// 1. UseEffect kya hain?
// →  Wo ek Hook hain.
// →  UseEffe.ct ek Hook hain. esi liye unko function ki tarah call karna padta hain.

// 2. Use kyu karte hain?
// → component ko side effect dene ke liye use karte hain.
// → agar aapko return ke bad koi component chalana ho to use kar sakte hain.

// UseEffet two(2) argument leta hain.
// unme se second argument optional hain.
// argument :
// *1*.function
// function that means () => {}
// function ke andar aapko jo karva ho kar sakte ho.

// *2*. dependency Array
// dependency array three(3) type ke hote hain.
// 1. No dependency passed:
// useEffect(() => {
//Runs on every render
// });
// ya to aap inko nahi bhej sakte ho.
// agar aap dependency array nahi bhej te ho.
// to aapka code infinite me chala jayega.

// 2. An empty array:
// useEffect(() => {
//Runs only on the first render
// }, []);
// ya to empty array bhej sakte ho.
// agar aapko ek hi bar code ko chalana hain to empty array bhejna compulsary hain.
// empty array bhej ne se aapka UseEffect ak hi bar chalta hain.

// 3.Props or state values:
// useEffect(() => {
//Runs on the first render
//And any time any dependency value changes
// }, [prop, state]);
// ya to array ke andar koi argument de sakte ho.
// argument me aap state nahi bhej sakte ho.

// UseEffect aapke function component ke return ke bad chalega.
// yani ki component ka sara code chal jane ke bad UseEffect chalega.

// aese kam ke liye UseEffect use kar sakte hain.yahi sabse accha tarika hain.
// setTimeOut
// Data fetch
// setInterval
// DOM manipulation

// syntax :
// useEffect(() => {
// block of code
// } , [])

// * clean up function :
// useEffect return ke bad ek function use karne deta hain.
// jise hum cleap up function bolte hain.

// iska use kyu karte hain?
// jab bhi koi time vala statement ka use karna ho jese ki for example setTimeout, setInterval tab ye browser pe continues chalta raheta hain.
// agale jo setTimeout chala he use clear kar ne ke liye ye clen up function ka use karte hain.
// setTimeout & setInterval continues chalta raheta hain.
// ak bar setTimeout chal jane ke bad agla vala render clean nahi hota hain.
// isse browser me space(jagah) jyada rokega.
// ak example hain ki abhi to setTimeout only 50 bar chalta hain. to bahut jyada space nahi rokega.
// but thoda time ho jane ke bad a 2000 bar chal jayege. to space jyada rokega.

// isi liye browser me jagah nahi rok ne ke liye clean up function use karege.
// pahla setTomeout ke render pe clean up function nahi chalega.
// dusri bar setTimeout chale uske pahle clean up functioin chalega.
// pahli bar jo setTimeout chala hain unko clear karega.
// phir second bar setTimeout chalega.
// phir dusri bar jo setTimeout chala hain. unko clean up function clear kar dega.
// phir third bar setTimeout chalega.
// asi cycle chalti rahegi.

// Benifit:
// aapke browser me space jyada nahi rokega.
// ak bar chal jane ke bad jab dusri bar chale tab clean up function agle vale render ko clear kar ke dusri bar chalayega.

useEffect(() => {
  const id = setTimeout(() => {
    setCount(count + 1);
  }, 1000);

  // Clean Up Function
  return () => {
    clearTimeout(id);
  };
}, [count]);
