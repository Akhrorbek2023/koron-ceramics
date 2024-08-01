import React, { useState } from 'react';
import { db, collection, addDoc } from './fireStore/config';

const AddDocumentForm: React.FC = () => {
    const [enDef, setEnDef] = useState('');
    const [enDesc, setEnDesc] = useState('');
    const [enTitle, setEnTitle] = useState('');
    const [ruDef, setRuDef] = useState('');
    const [ruDesc, setRuDesc] = useState('');
    const [ruTitle, setRuTitle] = useState('');
    const [uzDef, setUzDef] = useState('');
    const [uzDesc, setUzDesc] = useState('');
    const [uzTitle, setUzTitle] = useState('');

    const handleAddDocument = async () => {
        const newDoc = {
            en: { def: enDef, desc: enDesc, title: enTitle },
            ru: { def: ruDef, desc: ruDesc, title: ruTitle },
            uz: { def: uzDef, desc: uzDesc, title: uzTitle },
        };
        try {
            await addDoc(collection(db, 'koron'), newDoc);
            alert('Document added successfully');
            setEnDef('')
            setEnDesc('')
            setEnTitle('')
            setRuDef('')
            setRuDesc('')
            setRuTitle('')
            setUzDef('')
            setUzDesc('')
            setUzTitle('')
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <div className="bg-white p-6 rounded shadow-md w-[80%]  mx-auto my-20">
            <h2 className="text-2xl font-bold mb-4">Add New Document</h2>
            <div className='grid grid-cols-3 gap-5'>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">English Definition</label>
                    <input
                        type="text"
                        value={enDef}
                        onChange={(e) => setEnDef(e.target.value)}
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">English Description</label>
                    <input
                        type="text"
                        value={enDesc}
                        onChange={(e) => setEnDesc(e.target.value)}
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">English Title</label>
                    <input
                        type="text"
                        value={enTitle}
                        onChange={(e) => setEnTitle(e.target.value)}
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Russian Definition</label>
                    <input
                        type="text"
                        value={ruDef}
                        onChange={(e) => setRuDef(e.target.value)}
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Russian Description</label>
                    <input
                        type="text"
                        value={ruDesc}
                        onChange={(e) => setRuDesc(e.target.value)}
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Russian Title</label>
                    <input
                        type="text"
                        value={ruTitle}
                        onChange={(e) => setRuTitle(e.target.value)}
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Uzbek Definition</label>
                    <input
                        type="text"
                        value={uzDef}
                        onChange={(e) => setUzDef(e.target.value)}
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Uzbek Description</label>
                    <input
                        type="text"
                        value={uzDesc}
                        onChange={(e) => setUzDesc(e.target.value)}
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Uzbek Title</label>
                    <input
                        type="text"
                        value={uzTitle}
                        onChange={(e) => setUzTitle(e.target.value)}
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
            </div>
            <button
                onClick={handleAddDocument}
                className="mt-4 p-2 bg-blue-500 text-white rounded "
            >
                Add Document
            </button>
        </div>
    );
}

export default AddDocumentForm;
