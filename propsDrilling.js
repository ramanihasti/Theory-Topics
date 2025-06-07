// Prop Drilling React me ek concept hai jo tab hota hai jab ek parent component se deeply nested child component tak data bhejna padta hai. Matlab, agar ek component ko kisi distant child component ko data dena hai, toh har middle component ko unnecessary props forward karne padte hain—isi process ko Prop Drilling kehte hain! 😃🔥

// 🔹 Why Does Prop Drilling Happen?
// Kabhi kabhi state ya data bohot andar ke component tak pahunchana padta hai.

// Directly pass nahi kar sakte, toh har intermediate component ko props ke through pass karna padta hai.

// Jab application bada hota hai, toh prop drilling code complexity badhata hai!

// 🛠 Example of Prop Drilling
// javascript
// function App() {
//     const user = "Ramani"; // Data to pass

//     return <Parent user={user} />;
// }

// function Parent({ user }) {
//     return <Child user={user} />;
// }

// function Child({ user }) {
//     return <p>Hello, {user}!</p>;
// }
// ☝️ Yahan App component se Child component ko user pass karna hai, lekin Parent ko unnecessary props lena padta hai!

// How to Avoid Prop Drilling?
// ✅ Use Context API

// javascript
// const UserContext = React.createContext();

// function App() {
//     return (
//         <UserContext.Provider value="Ramani">
//             <Child />
//         </UserContext.Provider>
//     );
// }

// function Child() {
//     const user = useContext(UserContext);
//     return <p>Hello, {user}!</p>;
// }
// ☝️ Yahan Context API se direct access mil raha hai, bina unnecessary props pass kiye! 🚀

// ✅ Use State Management Libraries (Redux, Zustand, etc.) ✅ Use Custom Hooks to Share Data

// 🚀 Key Takeaways
// Prop Drilling tab hota hai jab deep nested components ko props pass karne padte hain.

// Context API & Redux best solutions hain prop drilling ko avoid karne ke liye!

// Bigger applications me Context ya State Management use karna better hota hai!
