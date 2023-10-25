import { useState } from "react";

function FormFn() {

    const [values, setValues] = useState({
        nombre: "",
        apellido: "",
        email: "",
    });

    const handleChange = (event) => {

        console.log(event.target.name, event.target.value);

        setValues({ ...values, [event.target.name]: event.target.value});
    }; 

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        type="text" 
                        id="nombre"
                        name="nombre"
                        value={values.nombre} 
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="apellido">Apellido</label>
                    <input 
                        type="text" 
                        id="apellido"
                        name="apellido"
                        value={values.apellido} 
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="email">Correo Electrónico</label>
                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={values.email} 
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Enviar</button>
                
            </form>
        </>
    )
}

export default FormFn;