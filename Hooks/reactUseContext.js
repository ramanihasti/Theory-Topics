// useContext():

// 1.useContext() kya hain?
// → wo ek hook hain.

// 2.kyu useContext ka use karte hain?
// → kyuki unke andar aap value store kar sakte ho.

// 3. steps:
// First aapko context create karna padta hain.
// createContext()ma
// second unko koi address pe store karna padta hain. yani ki ek variable k andar store karenge. variable ka name aap jo cheej bhej ne vale ho unka name + context.
// for the example : const cartContext = createContext();
// Third unka use karna.
// context me ek provider(supplier) rahta hain. apako jo cheej bhej ni hain wo unko value me de dena.
// provider ko usi component ke upar rakhna. jis component ke nested sabhi component ko isi value ki jarur ho.
// provider ka use kese karna hain?
// → <aapne createContext ko jis address pe store karaya hain wo variable ka name.provider>
//     <userContext.Provider value={user}>
//         <ComponentA />
//     </userContext.Provider>

// five step hain ki isi context ka use kese kare.
// aapko jis component ke andar wo cheej ki jarur hain waha useContext() ka use karenge. and argument me aapne createContext ko jo variable me store kara hain unka name.
//  const value = useContext(userContext);
// fifth hain ki wo cheeje aapko value me milegi. jaha pe jarur hain waha pe {value} call kar dena.
// <div>Hello, {value}</div>;

// aap useContext ka use ahi karte ho to Disadvantage:

// 1.aap chahte ho ki jis component ko eo cheej ki jarurat nahi hain fir bhi hame unko props me se dena padta hain.
// 2.props ko bari bari sabhi bomponent ko bhejeng.
//  to unki dependency chain ban jayge,
//  unjane aap kabhi component ko bhul se delete kar dete ho to wo waha se aage nahi chalega.
// aesa na ho isi liye useContext ka use karna hain.

// Different between props and useContext:

// first component aapka contextDemo hain. unme aap ek stat bana rahe ho.wo stat ki jarur aapko ComponentD ko hain.
// but aapne ContextDemo ke andar ComponentA rakha hain.
// ComponentA ke andar ComponentB rakha hain.
// ComponentB ke andar ComponentC rakha hain.
// ComponentC ke andar ComponentD rakha hain.
// ComponentD ko wo state ke jarur hain.to hame bari bari sabhi component ko props se bhejna padega.
// aese karne me time lagta hain.
// aapse koi component delete ho gaya to waha se code aage chalna ruk jayega.
// isi liye inse achha useContext() hain.
// fir aap jaha jarur hain waha use kar saskte ho

// Example: C:\Users\hasti\Desktop\Website\ecommerce-app> ni andar
