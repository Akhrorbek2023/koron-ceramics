// import React, { useState } from 'react';
// import { doc, setDoc } from 'firebase/firestore';
// import { db } from './fireStore/config';

// interface FormData {
//   image: File | null;
//   ru: {
//     title: string;
//     desc: string;
//     def: string;
//   };
//   uz: {
//     title: string;
//     desc: string;
//     def: string;
//   };
//   en: {
//     title: string;
//     desc: string;
//     def: string;
//   };
// }

// const AdminForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     image: null,
//     ru: { title: '', desc: '', def: '' },
//     uz: { title: '', desc: '', def: '' },
//     en: { title: '', desc: '', def: '' },
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof FormData, lang: keyof FormData['title'] | '') => {
//     const { value, files } = e.target;
//     if (field === 'image') {
//       setFormData((prevData) => ({
//         ...prevData,
//         [field]: files ? files[0] : null
//       }));
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         [field]: { ...prevData[field as keyof FormData['']], [lang]: value }
//       }));
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await setDoc(doc(db, "koron", formData.en.title), formData);
//       alert('Form submitted successfully');
//     } catch (error) {
//       console.error("Error adding document: ", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center py-20">
//       <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-5xl">
//         <h2 className="text-3xl font-bold mb-8 text-gray-800">Add New Item</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
//               Upload Image
//             </label>
//             <input
//               type="file"
//               id="image"
//               name="image"
//               accept="image/*"
//               onChange={(e) => handleChange(e, 'image', '')}
//               className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
          
//           {['title', 'desc', 'def'].map((field) => (
//             ['ru', 'en', 'uz'].map((lang) => (
//               <div key={`${field}-${lang}`} className="mb-6">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`${field}-${lang}`}>
//                   {field.charAt(0).toUpperCase() + field.slice(1)} ({lang.toUpperCase()})
//                 </label>
//                 {field !== 'def' ? (
//                   <input
//                     type="text"
//                     id={`${field}-${lang}`}
//                     name={`${field}-${lang}`}
//                     value={formData[field as keyof FormData][lang as keyof FormData['title']]}
//                     onChange={(e) => handleChange(e, field as keyof FormData, lang as keyof FormData['title'])}
//                     className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 ) : (
//                   <textarea
//                     id={`${field}-${lang}`}
//                     name={`${field}-${lang}`}
//                     value={formData[field as keyof FormData][lang as keyof FormData['desc']]}
//                     onChange={(e) => handleChange(e, field as keyof FormData, lang as keyof FormData['desc'])}
//                     className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 )}
//               </div>
//             ))
//           ))}

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminForm;
