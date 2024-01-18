import Cliente from "../components/Cliente";

function Index() {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>

      <table className="w-full bg-white shadow mt-5 table-auto">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Cliente</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>

        <tbody>
          <Cliente />
        </tbody>
      </table>
      {/* <p className="text-center mt-10">No Hay Clientes aún</p> */}
    </>
  );
}

export default Index;
