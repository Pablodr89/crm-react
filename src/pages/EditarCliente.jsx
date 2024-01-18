import Formulario from "../components/Formulario";
import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Error from "../components/Error";

function EditarCliente() {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">
        A continuación podrás modificar los datos de un cliente
      </p>

      <div className="flex justify-end">
        <button className="bg-blue-800 text-white px-3 py-1 font-bold uppercase">
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {/* {errores?.length && errores.map( ( error, i ) => <Error key={i}>{error}</Error> )} */}

        <Form method="post" noValidate>
          <Formulario />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="Guardar Cambios"
          />
        </Form>
      </div>
    </>
  );
}

export default EditarCliente;
