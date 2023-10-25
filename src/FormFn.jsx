function FormFn() {
    return (
        <>
            <form>

                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" 
                    />
                </div>

                <div>
                <label htmlFor="email">Correo Electrónico</label>
                    <input type="email" id="email" 
                    />
                </div>

                <button type="submit">Enviar</button>
                
            </form>
        </>
    )
}

export default FormFn;