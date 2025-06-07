//Fetch

// 1.fetch kya work karta hain?
// Fetch bahar se data lane ka kam karta hain.

// 2. fetch method:
//    a. GET
//    b. POST
//    c. PUT & PATCH
//    D. DELETE

// a.GET:
// → jab bhi koi data bahar se lana ho tab get method ka use hota hain.

// b.POST:
// → data add karna ho to POST.
// → jab bhi koi data bhar bhejna ho tab use karte hain.

// c. PUT & PATCH:
// → data update karna ho to PUT YA PATCH.

// d.DELETE:
// → data delete karna ho to DELETE.

// 3.fetch two(2) argument leta hain?
// → First aap wo link ka use kar rahe ho unki URL.
// → Second Options Argument.
// → inme aap jitni argument bhejna chahte ho utni bhej sakte ho.
// → compulsary nahi hain. use karne ki jarur ho to hi use karna otherwise nahi.
// → 1. method:
// → aap jo method se data use karne chahte ho wo method. for example GET.

// data fetch karne ka kam java script nahi karta hain.
// kyuki data fetch karne me time lagta hain.

// data fetch karne ke liye worker thread Promise return karta hain.
// wo data ko place holder pe rakhta hain.
// jab bhi data mil jai tab data ko fetch karna start kar deta hain.
// and promise me responce bhejata hain.
// data mil jaye to result me fullfiled retun karta hain.
// data na milne pe wo required return karta hain.
// koi error ho to regected return karta hain.
// fetch karte time data mile jai to .then vala part chalata hain OR
// na mile yani ki koi error ho tab .catch vala part chalata hain.

// process:
// wo kam java script worker thread ko de deta hain.
// Worker thread yani kon?
// Browser pe multiple thread work karte hain wo.
// unme se kisi ek ko data fetch karne ka kam de deta hain.
// jese hi data fetch ho jai to wo data worker thread TASK QUEUE me call karne ke liye rakh denga.
// OR jab bhi main thread (java script) ka sara ka sara code chal jane ke bad.
// event loop TASK QUEUE me call karne ke liye jo function rakha hain wo main thread ko chala ne ke liye bolega.

// first of all aapke application ke src me ek services name ka folder banayege.
// unke undar ek apiService.js name ki +
// file create karege.
// file ka name sirf isa hi de sakta ho wo jaruri nahi hain. kuch bhi likh de sakte hain.

// file ke andar aap ko jo bhi API ka data fetch karna hain wo code likh sakte ho.
// fetch two argument leta hain.
// fetch ek promise retun karta hain.
// promise 3 result return karta hain.
// 1.pendding : by default pendding hi hota hain. fetch karte time.
// 2.fullfiled : data mil jaye tab.
// 3.regected : error ke case main.

// data mil jai to then vala part chalega.
// error hogi to catch vala part chalega.
// abhi jo data milega jo hame json me convert karna padega.
// json me ddata convert me time lagata hain.
// isi liye dusra then catch likhna padega.
// abhi data ke responce me origanal data milega.

export function getAllChapter() {
  const result = fetch(
    "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b4e5959134msh2ca37c59bcca410p1aef55jsn4c32025704d5",
        "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
      },
    }
  )
    .then((responce) => {
      console.log("all chapter responce", responce);
      return responce.json();
    })
    .catch((error) => {
      console.log("Error: ", error);
    });

  console.log("all chapter result", result);
  return result;
}
