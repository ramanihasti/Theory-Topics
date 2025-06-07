//  Branch:

// branch yani kya?
// → jabhi koi component ko test or check karna hain ki ye vala part accha lag raha hain ki nahi wo dekhne ke liye.

// kyu use karte hain?
// → aapko code likhna bhi hain. but github pe nahi rakhna hain.
// → tab isi ke liye hum ek new branch banate hain.
// → new branch me jo bhi testing or work karna hain kar sakte hain.
// → abhi ye new branch ka code github pe nahi chadega.
// →

// Create New Branch:
// → new branch create karne ka command:
// → git branch <branch_name>
// → branch create karne ke sath hi wo branch ko open karna hain to:
// → git branch -b <branch_name>

// Go to new branch:
// → by default aapke system main branch open hogi.
// → wo main branch se aapne jo new branch banayi hain unme kaise jaye.
// → command: git checkout <aapko jis branch me jana hain unka name>
// → wo branch aapne create kari hogi to hi unme ja sakoge.
// → status chech karoge: git status
// → code ko staging area par chadayege: git add .
// → fir se status check karoge: git status
// → unke bad aapne new brach me jo code likha hain unko commit karoge:
// → command: git commit -m "Updated readme for GitHub Branches"

// → abhi app apni main branch me aa jayoge: git checkout main
// → zarur hain agar aapko wo changes achha lage to main brack or new branch jo banayi hain unko merge kar do ge.
// command: git merge <new_branch Name>
// → wo new brach ko github pe chadane ke liye:
// → git push origin <new_branchName>
// → abhi aap github pe jaoge or new repository pe new branch dekhne ko milegi.

// Delete Branch:
// → git branch -d <branch>: Deletes the specified branch

// different:
// → git branch -D <branch>: aagar aapne code ko merge kiya ho ya na kiya ho wo delete kar dega.
// → git branch -d <branch>: aapne code ko merge kiya hain tohi wo delete karega.

// Github me se perminantly branch delete karne ke liye : git push origin --delete <branchname>
