//useCallback()

// 1.useCallback kyu use karte hain?
// → un neccesary function, object ke re-rendering ko rok ne ke liye use hota hain.

// useCallback ek function leta hain as an argument.
// and secound dependency array leta hain.

// syntax:
// useCallback(() => {
// block of code
// }, [])
// dependency array me state ki value bhej sakte ho.

// function:
// function ek object hain.
// functioin ko jab hum call karte hain tab wo ak memory ke andar store ho jata hain.
// bari bari function call karne se alag alag memory me store ho jata hain.
// ex:
// first bar function ko call karte hain to wo 101 number ke address me store hota hain.
// or 101 address se function call hota hain.
// second bar function ko call karte hain to wo 102 number ke address me store hota hain.
// or 102 address se function call hota hain.
// asi cycle chalti rahti hain.
// isi liye useCallback ke bina un-neccesary rerendering hoti thi.

const handleAddToTask = useCallback(
  function () {
    setList([...list, `Task ${list.length + 1}`]);
  },
  [list]
);
