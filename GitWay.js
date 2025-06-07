// Git Ways:

// 1. aap ke device ka command propmt open karna hain.
// 2. unme git install hua hain ki nahi wo check kar ne ke liye command likhoge.
//    git -v OR git --version
// 3. cmd ke path se aap desktop se folder pe jaoge. command: dir desktop
//     cd desktop.

// 4. Configure Git
//    koi code ko git pe commit kar ne ke liye git pahle aapka user name and emailid lenga.
//    isi se github ko pata chalta hain ki kisne code ko track kiya hain wo.
//    git config --global user.name "ramani hasti"

// → agar aapko pure computer me every repository ke liye username & email-id set karna chahte ho to global ka use kar sakte ho.
// → agar aapko sirf abhi ke liye username & email id set karna chahte ho to global keyword ko dur kar sakte ho.

// 5. Creating Git Folder:
// →  command: mkdir myproject
// →  app wo folder ke andar aate ho: cd myproject

// 6. Initialize Git: git start karna
// →  command: git init
// →  aapke folder me git ka folder aajayega.
// →  but by default ye folder hidden hota hain.
// →  kyuki ye system ke liye hain. unme aapko koi changes nahi karne hain.
// →  hidden file/folder ko dekhne ka command: dir /a:h
// →  wo folder ko cmd me dekhne ke liye command: dir <folder_name>
// →  isi folder pe jane ke liye command: cd <folder_name>

// 7. Create a new file:
// →  new file create karne ke command: echo >index.html || echo >file_name.extension
// →  abhi humne Git pe koi code ko commit kiya hain ki nahi wo check karne ke liye: git status
// → git status command likhoge to return me milega.
// → Tracked  || Untracked
// Tracked : ટ્રૅક કરેલ - ફાઇલો કે જેના વિશે Git જાણે છે અને રીપોઝીટરીમાં ઉમેરવામાં આવે છે.
// Untracke: અનટ્રેક કરેલ - ફાઇલો કે જે તમારી કાર્યકારી નિર્દેશિકામાં છે, પરંતુ રીપોઝીટરીમાં ઉમેરવામાં આવી નથી.

// 8. Git Staging Environment: Git pe file add karne ke liye.
// →  abhi git koi file ko track nahi karta hain.
// →  inke liye aapko git pe file ko staging area par chadana padta hain.
// →  unka command hain: git add file_name
// →  aapne jo bhi change kiya hain wo sab ko add karna hain to command: git add .
// →  je file par work kar rahe ho wo git pe add karne ke lliye command: git add index.html
// →  fir check karoge ke wo Tracked hain ya Untracked.
// →  command: git status

// 9. Git Commit:
//
// → git all commit change point/save point ko dhyan me rakhta hain.
// → jab bhi aap koi changes karna chahate ho tab wo project pe ek point waha fir ja sakte ho.
// git pe code commit karne ka command: git commit -m "First release of Hello World!"
// → yaha pe -m ka meaning message hota hain.
// → jab bhi koi code ko commit/save/track karo tab ek message likhna padta hain.

// ⁕ ye wala command aap apne cmd pe bhi likh sakte ho.
// → vs code ke terminal me bhi likh s akte ho.
// → commit vala code aap vs code me se direct bhi kar sakte ho.
