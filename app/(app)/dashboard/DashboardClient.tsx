// 'use client';

// import React, { useState, useEffect } from 'react';

// interface User {
//   firstName: string;
//   lastName: string;
// }

// export default function DashboardClient({ user }: { user: User }) {
//     const [currentTime, setCurrentTime] = useState('');

//     useEffect(() => {
//         const currentDate = new Date();
//         const currentHours = currentDate.getHours();

//         if (currentHours < 12) {
//             setCurrentTime('Good Morning');
//         } else if (currentHours < 17) {
//             setCurrentTime('Good Afternoon');
//         } else if (currentHours < 19) {
//             setCurrentTime('Good Evening');
//         } else {
//             setCurrentTime('Good Night');
//         }
//     }, []);

//     return (
//         <div className='bg-neutral-200 flex-1 h-full p-2.5 overflow-y-auto relative'>
//             <div>
//                 <h1>{currentTime}, {user.firstName} {user.lastName}</h1>
//             </div>
//         </div>
//     );
// }
