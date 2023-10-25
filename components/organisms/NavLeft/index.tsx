import React, { useState } from "react";

function NavLeft({ activePage }) {
    const [activeTab, setActiveTab] = useState(activePage);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    const tabItems = [
        { id: 'cesantias', label: 'Cesantias' },
        { id: 'vacaciones', label: 'Vacaciones' },
        { id: 'familia', label: 'Día de la familia' },
        { id: 'regalo', label: 'Regalo medio día de cumpleaños' },
        { id: 'permisos', label: 'Permisos especiales' },
        { id: 'certificado', label: 'Descargar certificado laboral' },
    ];

    return (
        <div className="font-bold grid">
            <div className="">
                <div className="text-3xl font-bold grid text-gray-700">Aprobaciones</div>
                <div className="w-full h-1 bg-gray-400 rounded" />
            </div>

            <div className="flex">
                <div className="">
                    <ul className=''>
                        {tabItems.map((tab) => (
                            <li key={tab.id} className='mr-2'>
                                <a
                                    href={`/admin/aprobaciones/${tab.id}`}
                                    className={`inline-block p-4 rounded-t-lg ${activeTab === tab.id
                                        ? 'text-colorCyan'
                                        : 'text-black' // Set your desired default text color when not active
                                        } hover:text-colorCyan`}
                                    onClick={() => handleTabClick(tab.id)}
                                >
                                    {tab.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-1 h-full bg-gray-400 rounded" />
            </div>
        </div>
    )

};  
export default NavLeft;