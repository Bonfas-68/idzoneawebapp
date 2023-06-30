// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaUser } from "react-icons/fa";
// import NoIdeas from "./NoIdeas";
// import { Context } from "../context/userContext";
// import { useForm } from "react-hook-form";
// import { domain } from "../utils/Utils";

// const Profile = () => {
//   const { user,ideas } = useContext(Context);
//   const [update,setUpdate] = useState(false);

//   const text = ideas.map((t)=> t)
//   const myt = text.filter((te) => te.username === user.username)
//   let userData;
//   const fetchUserData = async () => {
//     const res = await axios.get(`${domain}/users/${user.user_id}`, {
//       headers: { Authorization: `${user.token}` },
//     });
//     const userd = await res.data
//     userData = userd;
//     console.log(userData)
// };
// useEffect(()=>{
//   fetchUserData()
// },[])
// const onSubmit = async (data)=>{
//   try {
//     if(user?.token){
//     const res = await axios.put(`${domain}/users/${user.user_id}`, data,{
//       headers: { Authorization: `${user.token}` },
//     });
//     const message = await res.data
//     alert(message)
//     setUpdate(false)
//     fetchUserData
//   }
//   } catch (error) {
//     alert(error.message)
//   }
  
// }
// const {handleSubmit, register, formState:{errors}} =useForm()
//   return (
//     <> <div className="profile">
//           <div className="profile-intro">
//             <span>{user.username.split(" ")[0]}@IdZonea</span>
//           </div>
//           <div className="profile-bio">
//             <div className="user_info">
            
//             <img  className="user_icon" width={50} height={50}  src={`${domain}/uploads/${user?.user_image}`} />
//               {/* <FaUser className="user_icon"/> */}
//               <h4><p>Name: </p>{user.username}</h4>
//               <h6><p>Email: </p>{user.user_email}</h6>
//               <div>
//                 <form onSubmit={handleSubmit(onSubmit)} className="user__data">
//                 <div className="user__data-content">
//                   <h3>Phone</h3>
//                   <span>{userData?.user_phone ?? `null`}</span>
//                   {update &&<input type="text" {...register("user_phone")}value={userData?.user_phone}/>}
//                 </div>
//                 <div className="user__data-content">
//                   <h3>Domain</h3>
//                   <span>{userData?.user_domain ?? `null`}</span>
//                   {update &&<input type="text" {...register("user_domain")}value={userData?.user_domain}/>}
//                 </div>
//                 <div className="user__data-content">
//                   <h3>Location</h3>
//                   <span>{userData?.user_location ?? `null`}</span>
//                   {update &&<input type="text" {...register("user_location")}value={userData?.user_location}/>}
//                 </div>
//                 <div className="user__data-content">
//                   <h3>Bio</h3>
//                   <span>{userData?.user_bio ?? `null`}</span>
//                   {update &&<input type="text" {...register("user_bio")}value={userData?.user_bio}/>}
//                 </div>
//                 <div className="user__data-content">
//                   <h3>Name</h3>
//                   <span>{user?.username}</span>
//                   {update &&<input type="text" {...register("username")}/>}
//                 </div>
//                 <div className="user__data-content">
//                   <h3>Email</h3>
//                   <span>{user?.user_email}</span>
//                   {update &&<input type="text"{...register("user_email")} value={userData?.user_email}/>}
//                 </div>
//                 <input type="submit" value="Update" />
//                 </form>
//               </div>
//             </div>
//             <div className="user_ideas">
//             <button onClick={()=> setUpdate(true)}>Update Your Profile</button>
//               <h2>Ideas Shared</h2>
//               {myt.length ? myt.map((text)=>(
//                 <div key={text.idea_title} className="idea">
//                   <h3>{text.idea_title}</h3>
//                   <p>{text.idea_text.slice(0,100)}...</p>
//                   <span>
//                   <img width={25} height={25}  className="idea__icon"  src={`${domain}/uploads/${user?.user_image}`} />
//                    <em>{text.username}</em></span>
//                 </div>
//               )): <NoIdeas />}
//             </div>
//           </div>
//         </div>
//         {/* <Loader error={error} loading={loading} load={load}/> */}
//     </>
//   );
// };

// export default Profile;
