// useRef:

// useRef ek hook hain isi liye inko function ki tarah call karna padta hain.
// jaise ki useRef()
// useRef useState ki tarah ek hi bar chalta hain.
// jab staring me aapka component chalta hain tab.

// 1.kyu useRef() ka use karte hain?
// → jab aap koi value maintain karna chahate ho re-render ke bina tab useRef ka use karte hain.

// 2.useref kya hain?
// → useRef ek variable hain.

// 3.useRef work kese karta hain?
// → useRef ek object return karta hain.
// → object ek propery return karta hain wo hain current.
// → current ke andar aapki value milti hain.

// useRef() hame ek aage ki value dikhata hain.
// kyuki wo re-render nahi hota hain isi liye.

// 3.use case
// [1.] 2 value ke bich me value maintain karta hain. re-rendering ke bina.
// [2.] jab hame previous value dikhani ho tab.
// [3.] DOM manipulation

// [3.] DOM manipulaton:
// HTML ke har ek elememnt ko ref property milti hain.
// jaise ki for: <div ref={}></div>
// wo ref property ko hum aapna banaya variable de saskte hain.
// isi liye getElementByid nahi likh na padta hain.
// iska use hum return ke bad karege. yani ki useEffect Hook main.

// sabse pahle aapka state chalega.
// us ke bad countref vala variable yani ki state chalega.
// a dono ek hi bar chalega.
// bad me useEffect() aayega to wo return ke bad chalta hain.
// isi liye wo step skip ho jayega.
// fir aapka handleChange chalega.
// unke bad UI vala part yani ki return ke bad ka code chalega.
// fir aapka useEffect aayega.
// and countRef.current me ek value plus hogi.
// staring me useRef ki value 0 hain ab 1 ho jayegi.
// but aapko input me 0 hi value consider kar ke denga.

// fir second bar aapka hanleChange vala function chalega.
// unke bad return vala code chalega.
// tabhi aapke countRef.current me value 1 aayegi.
// unke bad useEffect chalega.
// tabhi countRef.current me ek value plus hogi.
// abhi useRef ki value 2 ho jayegi.
// but aapko input ki value to 1 hi consider karega.
// useRef aapko ak aage ki value return karta hain.
// jab bhi aapka UI vala component fie se chalega tabhi value + ho ke milegi.
// jab bhi aapka useEffect chalta hai tab useRef ke current object ki value to plus ho hi jayegi.
// but dikhengi nahi.
// kyuki useRef re-render nahi karta hain.

// [1.] 2 value ke bich me value maintain karta hain. re-rendering ke bina.
function UseRef() {
  const [input, setInput] = useState("");
  const countRef = useRef(0);
  // console.log("ref" , countRef);

  console.log("renderd");

  useEffect(() => {
    countRef.current++;
    console.log("countref", countRef.current);
  }, [input]);

  function handleChange(e) {
    setInput(e.target.value);
    // console.log("e" , e.target.value);
  }

  return (
    <div className="p-8">
      <input
        type="text"
        className="rounded-md"
        value={input}
        onChange={handleChange}
      />
      <p>Render-Count:{countRef.current}</p>
    </div>
  );
}

// [2.] jab hame previous value dikhani ho tab.
function UseRef() {
  const [input, setInput] = useState("");
  const inputRef = useRef("");
  // console.log("ref" , countRef);

  console.log("renderd");

  useEffect(() => {
    inputRef.current = input;
    console.log("inputRef", inputRef.current);
  }, [input]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className="p-8">
      <input
        type="text"
        className="rounded-md"
        value={input}
        onChange={handleChange}
      />
      <p>Prev-Value:{inputRef.current}</p>
    </div>
  );
}

// [3.] DOM manipulation

function UseRefDom() {
  const divRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      // console.log("current" , current);
      divRef.current.style.backgroundColor = "purple";
    }, 2000);
  }, []);

  return (
    <div ref={divRef} id="mydiv">
      Hello
    </div>
  );
}
// Example: C:\Users\hasti\Desktop\Website\ecommerce-app> ni andar
