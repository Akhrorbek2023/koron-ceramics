import Form from "./Form"


const ContacsIndex = () => {
    return (
        <div>
            <div className="header bg-cover bg-center w-full h-[50vh]">
                <div className="w-full h-full flex justify-center items-center">
                    <h1 className="text-[36px] font-[800] text-white">СВЯЗЬ</h1>
                </div>
            </div>
            <div className="bg-[#121212] py-20">
                <div className="container">
                <Form/>
                </div>
            </div>
        </div>
    )
}

export default ContacsIndex