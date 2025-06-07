// Local Stroage :

// Benifit:
// The data is not deleted when the browser is closed, and are available for future sessions.
// જ્યારે બ્રાઉઝર બંધ હોય ત્યારે ડેટા ડિલીટ થતો નથી અને ભવિષ્યના સત્રો માટે ઉપલબ્ધ હોય છે.

// 1.Local stroage me data kesse store karte hain?
// → key value ki pair me data store karna padta hain.

// array , object ,function vese data ko store nahi kar sakte.
// local stroage me only string hi store kar sakte hain.
// local stroage me.setItem me data ko set kar sakte hain.
// array or object vale data ko string me convert karna padta hain.
// iske liye stringify ka use karte hain.
// Convert a JavaScript object into a string with JSON.stringify().

localStorage.setItem("transactioins", JSON.stringify([...transactions, data]));

// Use the JavaScript function JSON.parse() to convert text into a JavaScript object:\
// ટેક્સ્ટને JavaScript ઑબ્જેક્ટમાં કન્વર્ટ કરવા માટે JavaScript ફંક્શન JSON.parse() નો ઉપયોગ કરો.
// fir local stroage me jo data ho wo abhi string me hain unko fir object or array me store karna padta hain.
// isi liye unko javascript me convert kar ne ke liye JSON.parse() method ka use hota hain.
// fir aap data ko use kar sakte ho.

const [transactions, setTransactions] = useState(
  JSON.parse(localStorage.getItem("transactioins")) || []
);

// LocalStroage Delete:

// same jese local stroage me jese data ko add karte vese hi hum delete kar sakte hain.
// single data ko delete karna ho to:
// ex: localStorage.setItem("transactioins" , JSON.stringify(filteredTransactioins))
// agar aapko all data ko remove karna hain to localStroage.clear()

// w3 school:

// Syntax:
// window.localStorage
// or just:
// localStorage
// Save Data to Local Storage:
// localStorage.setItem(key, value);
// Read Data from Local Storage:
// let lastname = localStorage.getItem(key);
// Remove Data from Local Storage:
// localStorage.removeItem(key);
// Remove All (Clear Local Storage):
// localStorage.clear();
