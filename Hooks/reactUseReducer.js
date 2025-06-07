// useReducer():

// useReducer() same useState() jesa hi hain.
// useReducer() bhi ak state hain.
// wo hame complex state managment karne deta hain.
// isi liye unko function ki tarah call karna padta hain.

// useReducer() bhi useState ki tarah ek array[] return karta hain.
// []array two argument return karta hain.
// first aapke state variable ki value.
// secound aapke state ka seter function.
// jese useState() me hota hain vesa hi.

const [count, setCount] = useState();

const [count1, dispatch1] = useReducer(first, second, third);
// 01.kyu useReducer() ka use arte hain?
// → complex state manage karne ke liye.
// → ex: nested array, object , array of obj, obj of array.

// 1.kyu useReaducer ka use karte hain? useState se bhi state manage nahi kar sakte?
// → useState bhi state ko managment kar sakte hain.
// → but jab bhi object of array of array of array ho to useState ka use karna thoda complex hain.
// → isi liye unko aasan banane ke liye useReducer ka use karte hain.

// 2.kiske liye useReducer() ka use karte hain?
// → useState ki tarah useReducer bhi hame state managment karne deta hain.
// → but wo complex state manage karne ke liye.
// → yani ki state ke anadar value store kar sakte hain.
// → ex: nested array, object , array of obj, obj of array.

// 3. syntax:
// const [<state> , seter function] = useReducer(reducer function , state ki initial value(starting value))

const [count2, dispatch] = useReducer(function () {}, value);

// useReducer two argument leta hain:
// first function jinko hum reducerFunction bolenge.
// aapko jo bhi kam karvana hain jwo reducerFunction ke andar karenge.
// secound state ki initial value(starting value).

// 4.dispatch kya hain?
// → dispatch wo aapka seter function hain.
// → unke place pe aap jo chaho wo name bhi de sakte ho.
// → jese ki useState me variable name hain to wahi name se set+variable name likhte the.
// → but hum useReducer me aapke seter function ka name dispatch hi rakhenge.
// → dispatcch means: bhejna(mokalvu)

// 5.kyu dispatch function ka use katre hain?
// → state change karne ke liye dispatch function ka use karte hain.
// → dispatch function ka use karke action dispatch karni padti hain.

// 5.reducer function kya hain?
// ye wo function hain jaha aap state change karne ka logic likhte ho.
// → apke state relateded jo bhi kam kaarvana ho wo reducer function ke anadr kara sakte ho.
// → reducer function two argument leta hain.
// → first <state>
// → secound action
// → case match karne ke liye if..else statement ke andar aapki condition likhi jati hain.
// → next statement else if.
// → sabhi statement ko return karna zaruri hain.
// → warna case na match hhone pe undefined return honga.

// → ⁕ action:
// →  action ek object hain.
// →  action object two property return karta hain.
// →  1.type
// →  2.payload
// → type or payload ke alawa bhi property de sakte ho.likin deni nahi hain.
// 1.type:
// → type required property hain.
// → type se reducer ko batate hain ki konsa kam karna hain.
// 2.payload
// → payload ye optional hain.
// → agar wo kam karne ki k liye koi value chahiye to payload me dete hain.

// 6.Benifit:
// 1. state change karne ka sara logic ek hi jagah par likhte hain.
// ek hi jagah yani ki konsi jagah pe reducer function me.
// aapko jab bhi koi change karna ho to ek jagah change karo sab jagah pe ho jayega.
// 2. sirf vahi chages ho sakte hain jo aapne reducer me define[likhe] kiye ho.

function reducer(cake, action) {
  if (action.type === "restock") {
    return cake + 1;
  } else if (action.type === "buy") {
    return cake - 1;
  } else {
    return cake;
  }
}

function UseReducer() {
  // const count = useState(10);
  // console.log("count" , count);
  // const count1 = useReducer(() => {} , 10);
  // console.log("count1" , count1)

  // const [cake1 , setCake] = useState(0);
  const [cake, dispatch] = useReducer(reducer, 0);
  console.log("cake", cake);

  function handleRestock() {
    dispatch({ type: "restock" });
  }

  function handleBuy() {
    dispatch({ type: "buy" });
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-2xl">Cake Count: {cake}</p>
      <div className="flex gap-4">
        <Button onClick={handleBuy}>Buy</Button>
        <Button onClick={handleRestock}>Restock</Button>
      </div>
    </div>
  );
}

export default UseReducer;
