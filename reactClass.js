// class method:

// class metho abhi use nahi hote hain.
// aapko interview ke andar bhi koi class componen ka use nahi karne ko bolega.
// but ye only knoweledge ke liye hain.
// class ki life-cycle kya hain wo puch sakta hain.but use nahi karna hain.

// version 16.8:
// version 16.8 se pahle class component ka use hota tha.
// 16.8 ke bad bhi class component ka use hota hain.
// 16.8 version se pahle agar aapko koi hook or react ke feature ko use karna ho to wo function component ke andar kar sakte hain.
// 16.8 version ke bad aap function component me hi react ke sabhi feature ko use kar sakte ho.

// class ki life-cycle kya hain?
// → life-cycle yani ki class ka jivan chakr(जीवन चक्र).

// distribution(વિતરણ):
// react ki lifeCycle ko 3 part me devide kiya hain.
// 1. Mounting
// 2. Updating
// 3. Unmounting

// Mounting: component ko create karna.
// Updating: component ko update karna.
// Unmounting: component DOM se bahar nikalte time destroy karna.

// Mounting:
// constructor: new variable and state ki value store karna.
// getDerivedStateFromProps(): props me jo value aaye unko state me rakhne ke liye.
// render: component jab first bar render karne ke liye wo code ko isi ke andar likhte hain.
// componentDidMount: render ke bad koi kam karvane ke liye.ex: useEffect

// Updating:
// getDerivedStateFromProps(): props me jo value aaye unko state me rakhne ke liye.
// shouldComponentUpdate: aapne props me jo value bheji hain unko ya to state ki value ko compare karvane ke liye inka use karte hain.
// for example: if...else agar false return honga to direct render vala part chalega.
// render: component jab first bar render karne ke liye wo code ko isi ke andar likhte hain.
// getSnapshotBeforeUpdate: render ke pahle koi work karvana ho tab.
// componentDidUpdate: render ke bad koi kam karvane ke liye.ex: useEffect

// Unmounting:
// componentWillUnmount: component DOM se bahar nikle unke pahle kuch kam karvana ho tab.

// ** ye sab function ka use only information ke liye hain. use nahi karna hain. **
