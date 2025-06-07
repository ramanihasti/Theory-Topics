// Lazy Loading:

// kyu use karte hain?
// → aapki application jab bhi load ho tab aapke sare ke sare conmponent ek sath chalte hain.
// → isi liye aapki application load hone me time lagta hain.

// benifit:
// abhi to aap choti choti application bana rahe ho. isi liye component load hone me time nahi lagta hain.
// par jab bhi ak sath 50 component load hote hain.tabhi aapki website ka first page load hone me bahut time lagta hain.

// lazy ek function hain.
// wo function hame react deta hain.
// lazy function one argument leta hain.
// argument mein ek function leta hain.
// usi function ke andar aap jo bhi component ko import karvana chahate ho wo karva sakte ho.
// import karne ke bad return karvana jaruri hain.
// import ke anadar jo component ka path hain wo de dena.

// syntax:
// const variable_Name = lazy(() => {
// return import("....")
// })

<Route
  path="/products/:id"
  element={
    <Suspense fallback={<p style={{ backgroundColor: "red" }}>Loading...</p>}>
      <ProductDetails />
    </Suspense>
  }
/>;

// jaha pe bhi use karna hain component ka waha call karva de na.
// but aapne lazy function ke andar unka path likha hain isi liye wo component direct load nahi hona.
// jab aap wo component pe jane ke liye component pe click karoge to wo component nahi dikhega.
// kyuki wo component to abhi load hi nahi hua hain.
// isi liye aapko error show ho ke milegi.
// error na dikhe isi liye unko <Suspense> component call </Suspense> ke inside me likhna.
// jab tak aapka component load ho tab tak kuch aur dikha ne ke liye.
// unko fallback me likhte hain.
// inse kya hota hain.
// inse aapka componet jab tak load nahi honga tab tak fallback ke andar jo likha hain wo dikhega.

// Note:
// agar default function component hain tohi unke anadar lazy function ka use kar sakte ho.
