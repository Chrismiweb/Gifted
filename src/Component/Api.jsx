// // import React, { useEffect, useState } from 'react'

// // const Api = () => {

// //     const [userdetails, setUserdetails] = useState([]);

// //     const fetchData = async()=>{
// //          await fetch('https://reqres.in/api/users/')
// //         .then(response => response.json())
// //         .then(user => setUserdetails(user.data))
// //     }

// //     useEffect(()=>{
// //         fetchData()
// //     }, [])

// //   return (
// //     <div className='flex'>
// //         {
// //             userdetails && userdetails.map((user)=>{
// //                 return(
// //                     <div key={user.id}>
// //                         <h2>{user.first_name + " " + user.last_name}</h2>
// //                         <h3>{user.email}</h3>
// //                         <img src={user.avatar} alt="" />
// //                 </div>
// //                 )
// //             })
// //         }
// //     </div>
// //   )
// // }




// // export default Api

// // import React, { useEffect, useState } from 'react'

// // function Api() {
// //     const[githudDetails, setGithubDetails] = useState(null);
// //     const [search, setSearch] = useState('')

// //     const handleSearch = (e)=>{
// //         const tp = e.target.value;
// //         setSearch(tp)
// //     }

// //     const fetchGitData = async(e)=>{
// //         e.preventDefault()
// //         try {
// //             await fetch(`https://api.github.com/users/${search}`)
// //             .then(response => response.json())
// //             .then(user => setGithubDetails(user))
// //         } catch (error) {
// //             console.log(error);
// //         }
// //     }
    

// //   return (
// //     <div>
// //         <form action="">
// //             <label htmlFor="">Enter your github username</label>
// //             <input type="text" name='search' placeholder='Your username here ..' onChange={handleSearch} />
// //             <button onClick={fetchGitData}>Check</button>
// //         </form>
// //         {
// //             githudDetails && (
// //                 <div>
// //                     <h2>{githudDetails.name}</h2>
// //                     <p>{githudDetails.bio ? githudDetails.bio : githudDetails.name +" has no bio!"}</p>
// //                     <h3>{githudDetails.followers > 0 ? githudDetails.followers+ " Followers " : githudDetails.followers + " Follower"}</h3>
// //                     <h3>{githudDetails.following} Following</h3>
// //                     <img src={githudDetails.avatar_url} alt="" />
// //                 </div>
// //             )
// //         }
// //     </div>
// //   )
// // }

// // export default Api



// import React, { useEffect, useState } from 'react'
// import './Api.css'
// import chrismi from '../images/chrismi.jpeg'
// function Api() {
//     const[githudDetails, setGithubDetails] = useState(null);
//     const [search, setSearch] = useState('');
//     const [isLoading, setisLoading] = useState(false);
//     const [err, setErr] = useState(false);
//     const [errMsg, setErrMsg] = useState('');

//     const handleSearch = (e)=>{
//         const tp = e.target.value;
//         setSearch(tp)
//     }
//     const fetchApi =async(e)=>{
//         e.preventDefault()
//         setisLoading(true)
//         setErr(true)

//         try {
//             await fetch(`https://api.github.com/users/${search}`)
//         .then(response =>response.json())
//         .then(gitUser => {
//             // const msg = gitUser.message;
//             const {message} = gitUser
//             setErrMsg(message)
//             setGithubDetails(gitUser)
//             setisLoading(false)
//         })  
//         } catch (error) {
//             setErr(true)
//             console.log(error);
//         }

//         console.log(githudDetails);
//     }    
//   return (
//     <div className='container'>
//         <div className='aboutme'>
//             <div className='mymsg'>
//                 <h1>Github Profile Generator</h1>
//                 <p>Built by Chrismi</p>
//             </div>
//             <div className='mypics'>
//                 <img src={chrismi} alt="" />
//             </div>
//         </div>
//         <div className='errormsg'>
//                 {
//                     err? <h2>  {errMsg}</h2> : null
//                 }
//         </div>
//         <div className='gitinput'>
//             <input type="text" placeholder='Search Github Account' onChange={handleSearch} />
//             <button onClick={fetchApi}>search</button>
//         </div>
//         {
//           isLoading?"Loading .." : githudDetails && (
//                 <div className='gitinfo'>
//                     <div className='gitprofile'>
//                         <img src={githudDetails.avatar_url} alt="" />
//                     </div>
//                     <div className='gitcredentials '>
//                         <h1>{githudDetails.login + " as an account with Github"}</h1>
//                         {/* <p>{githudDetails.following_url}</p> */}
//                         {/* <h2>{githudDetails.gists_url}</h2> */}
//                     </div>
                    
//                 </div>
//            )
//         }
//     </div>
//   )
// }

// export default Api