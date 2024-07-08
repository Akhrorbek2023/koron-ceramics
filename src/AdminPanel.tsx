import React, { useState } from 'react';

const AdminForm = () => {
  const [formData, setFormData] = useState({
    image: null,
    name: { ru: '', en: '', uz: '' },
    title: { ru: '', en: '', uz: '' },
    description: { ru: '', en: '', uz: '' }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string, lang: string) => {
    const { value, files } = e.target;
    if (field === 'image') {
      setFormData((prevData) => ({
        ...prevData,
        [field]: files ? files[0] : value
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [field]: { ...prevData[field], [lang]: value }
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submit logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={(e) => handleChange(e, 'image', '')}
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {['name', 'title', 'description'].map((field) => (
            ['ru', 'en', 'uz'].map((lang) => (
              <div key={`${field}-${lang}`} className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`${field}-${lang}`}>
                  {field.charAt(0).toUpperCase() + field.slice(1)} ({lang.toUpperCase()})
                </label>
                {field !== 'description' ? (
                  <input
                    type="text"
                    id={`${field}-${lang}`}
                    name={`${field}-${lang}`}
                    value={formData[field as keyof typeof formData][lang]}
                    onChange={(e) => handleChange(e, field, lang)}
                    className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <textarea
                    id={`${field}-${lang}`}
                    name={`${field}-${lang}`}
                    value={formData[field as keyof typeof formData][lang]}
                    onChange={(e) => handleChange(e, field, lang)}
                    className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              </div>
            ))
          ))}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminForm;
