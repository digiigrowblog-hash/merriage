import {
  BookOpenText,
  Briefcase,
  Cake,
  Cigarette,
  DollarSign,
  Landmark,
  Languages,
  Magnet,
  MapPin,
  Martini,
  Pill,
  Ruler,
  User,
} from "lucide-react";
import React from "react";

type UserInfoType = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  bio: string;
  image: string;
  language: string;
  hometown: string;
  salary: number;
  religion: string;
  // other fields
};

const UserInfo: UserInfoType[] = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    country: "USA",
    zip: "12345",
    bio: "",
    image: "",
    language: "English",
    salary: 25000,
    hometown: "Delhi",
    religion: "Hindu",
  },
];
// const UserInfoUI = () => {
//   return (
//     <div className="text-4xl px-2 max-w-full">
//       <div className="flex flex-col items-center justify-start max-w-4xl">
//         {/* user info like age , birthday  */}
//         <div className="w-full border border-gray-500 rounded-lg overflow-hidden">
//          <ul className="flex items-center overflow-x-auto scrollbar-hide px-4 py-2 snap-x snap-mandatory">
//             <li className="flex items-center gap-2 py-2 px-3 border-r border-r-gray-300 shrink-0 snap-center">
//               <Cake strokeWidth={2.25} className="shrink-0" />
//               <span className="text-base">21</span>
//             </li>
//             <li className="flex items-center gap-2 py-2 px-3 border-r border-r-gray-300 shrink-0 snap-center">
//               <User strokeWidth={2.25} />
//               <span className="text-base">Man</span>
//             </li>
//             <li className="flex items-center gap-2 py-2 px-3 border-r border-r-gray-300 shrink-0 snap-center">
//               <Magnet strokeWidth={2.25} className="rotate-90" />
//               <span className="flex items-center text-base">Female</span>
//             </li>
//             <li className="flex items-center gap-2 py-2 px-3 border-r border-r-gray-300 shrink-0 snap-center">
//               <Ruler strokeWidth={2.25} />
//               <span className="text-base">No</span>
//             </li>
//             <li className="flex items-center gap-2 py-2 px-3 border-r border-r-gray-300 shrink-0 snap-center">
//               <MapPin strokeWidth={2.25} />
//               <span className="text-base">Mumbai</span>
//             </li>
//             <li className="flex items-center gap-2 py-2 px-3 border-r border-r-gray-300 shrink-0 snap-center">
//               <Martini strokeWidth={2.25} />
//               <span className="text-base">Sometime</span>
//             </li>
//             <li className="flex items-center gap-2 py-2 px-3 border-r border-r-gray-300 shrink-0 snap-center">
//               <Cigarette strokeWidth={2.25} />
//               <span className="text-base">No</span>
//             </li>
//             <li className="flex items-center gap-2 py-2 px-3   shrink-0 snap-center">
//               <Pill strokeWidth={2.25} />
//               <span className="text-base">No</span>
//             </li>
//           </ul>
//           <div className="w-full bg-white overflow-hidden">
//             {UserInfo.map((data, index) => {
//               return (
//                <div key={index} className="p-4 space-y-3 max-w-full text-sm md:text-base"> {/* Remove ul flex */}
//                   <div className="flex  items-center gap-3 border-t border-t-gray-300 pt-1">
//                     <Briefcase strokeWidth={2.25} />
//                     <span className=" ">Software Developer</span>
//                   </div>

//                   <div className="flex items-center gap-3  border-t border-t-gray-300 pt-1">
//                     <BookOpenText strokeWidth={2.25} />
//                     <span className="">{data.religion}</span>
//                   </div>

//                   <div className="flex items-center gap-3 border-t border-t-gray-300 pt-1">
//                     <Languages strokeWidth={2.25} />
//                     <span className="">{data.language}</span>
//                   </div>

//                   <div className="flex items-center gap-3  border-t border-t-gray-300 pt-1">
//                     <Landmark strokeWidth={2.25} />
//                     <span className="">{data.hometown}</span>
//                   </div>

//                   <div className="flex items-center gap-3  border-t border-t-gray-300 pt-1">
//                     <DollarSign strokeWidth={2.25} />
//                     <span className="">{data.salary}</span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const UserInfoUI = () => {
  return (
    <section className="w-full md:max-w-3xl ">
      <div className="w-full border border-gray-300 rounded-xl overflow-hidden bg-white">
        {/* TOP STRIP – horizontal scroll only for icons */}
        <ul className="flex items-center overflow-x-auto no-scrollbar px-3 py-2 gap-0 snap-x snap-mandatory">
          <li className="flex items-center gap-2 py-2 px-3 border-r border-gray-200 shrink-0 snap-center">
            <Cake strokeWidth={2.25} className="shrink-0" />
            <span className="text-sm mt-">21</span>
          </li>
          <li className="flex items-center gap-2 py-2 px-3 border-r border-gray-200 shrink-0 snap-center">
            <User strokeWidth={2.25} className="shrink-0" />
            <span className="text-sm">Man</span>
          </li>
          <li className="flex items-center gap-2 py-2 px-3 border-r border-gray-200 shrink-0 snap-center">
            <Magnet strokeWidth={2.25} className="rotate-90 shrink-0" />
            <span className="text-sm">Female</span>
          </li>
          <li className="flex items-center gap-2 py-2 px-3 border-r border-gray-200 shrink-0 snap-center">
            <Ruler strokeWidth={2.25} className="shrink-0" />
            <span className="text-sm">No</span>
          </li>
          <li className="flex items-center gap-2 py-2 px-3 border-r border-gray-200 shrink-0 snap-center">
            <MapPin strokeWidth={2.25} className="shrink-0" />
            <span className="text-sm">Mumbai</span>
          </li>
          <li className="flex items-center gap-2 py-2 px-3 border-r border-gray-200 shrink-0 snap-center">
            <Martini strokeWidth={2.25} className="shrink-0" />
            <span className="text-sm">Sometime</span>
          </li>
          <li className="flex items-center gap-2 py-2 px-3 border-r border-gray-200 shrink-0 snap-center">
            <Cigarette strokeWidth={2.25} className="shrink-0" />
            <span className="text-sm">No</span>
          </li>
          <li className="flex items-center gap-2 py-2 px-3 shrink-0 snap-center">
            <Pill strokeWidth={2.25} className="shrink-0" />
            <span className="text-sm">No</span>
          </li>
        </ul>

        {/* BOTTOM LIST – equal Y spacing */}
        {UserInfo.map((data, index) => (
          <div key={index} className="divide-y divide-gray-200">
            <div className="flex items-center gap-3 px-4 py-3 text-sm md:text-base">
              <Briefcase strokeWidth={2.25} className="shrink-0 w-5 h-5" />
              <span className="flex-1 min-w-0">Software Developer</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 text-sm md:text-base">
              <BookOpenText strokeWidth={2.25} className="shrink-0 w-5 h-5" />
              <span className="flex-1 min-w-0">{data.religion}</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 text-sm md:text-base">
              <Languages strokeWidth={2.25} className="shrink-0 w-5 h-5" />
              <span className="flex-1 min-w-0">{data.language}</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 text-sm md:text-base">
              <Landmark strokeWidth={2.25} className="shrink-0 w-5 h-5" />
              <span className="flex-1 min-w-0">{data.hometown}</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 text-sm md:text-base">
              <DollarSign strokeWidth={2.25} className="shrink-0 w-5 h-5" />
              <span className="flex-1 min-w-0">${data.salary}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserInfoUI;
