// Router

// intallation :
// React router ek external library hain.
// esi liye enko bahar se install karna padta hain.
// command:
// npm i react-router-dom
// npm i -D react-router-dom:
// react me router use karne ke liye ye packages ko install karna achha nahi hain.
// -[hyphen]D ka use only Development me hi kar sakte hain.
// producation me ye library use nahi kar sakte.

// Router kya hain?
// router yani ki ek page se dusre page pe jana.
// wo ek external library hain.

// use:
// browser ke main page pe jao ge or waha par router ka use karoge.
// aapki Application ke entry point oe aana.
// yaniki aapki website me wo App.jsx ka component honga.
// 1.waha par ja ke first <BrowserRouter><BrowserRouter/> me wrap karna.
//   Question hota he ki kyu first BrowserRouter me hi.
//   kyuki aapki application/website ka data browser handle karta hain isi liye.

// 2.second <Routes><Routes/> me wrap karna.
//   kyuki aap 1 ya to 1 se jyada pages(route) rakhna chahate to.

// 3.third <Route/> me wrap karna.
//   inke andar aap individual page ko route me rakh sakte ho.

// 4.forth <Route/> 2 props leta hain.
//   1.path:""   2.element={}
//   path yani ki konse path pe aapko kya batana hain wo.
//   element yani ki konse element pe aapko konsa component batana hain wo.
//   exmaple:+
//           <Route path="/" element={<Home />} />

// 5.isko Navbar ke Component ke sath link karna padta hain.
//   Link ek component hi hain.
//   <Link></Link>
//   link 1 argument leta hain.
//   1.to=""
//   to me aapne component pe jane ke liye jo path diya hain wo same dena hain.
//    <li>
//       <Link to="/">Home</Link> */}
//    </li>

// navbar footer vala component to sub pages pe aate hain.to hum kya sub me same component ko import karenge.
// But nahii.
// kyuki iske liye hum routes ka use karte hain.
// example :
// <Routes path="/" element={<Layout />}></Routes>
// isase hum navbar footer sab me dikha sakte hain.

// routes me wrap karne se question hota hain ki / se hamko Home vala component bhi dikhana hain.
// <Route index element={<Home />} />
// to waha path dene ki jarur nahi hain.
// agar path same ho to.
// uski jagah idex ka use kar sakte ho.
