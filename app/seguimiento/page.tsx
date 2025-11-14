export default function Seguimiento() {
  return (
    <div className="min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">
        Seguimiento de Pedidos
      </h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <input
          type="text"
          placeholder="Ingresa tu número de pedido"
          className="w-full p-4 border border-gray-300 rounded-lg mb-6 text-lg"
        />
        <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition">
          Rastrear Pedido
        </button>
        <div className="mt-8 p-6 bg-purple-50 rounded-lg text-center">
          <p className="text-purple-700 font-medium">Ejemplo: #HLLT-12345</p>
        </div>
      </div>
    </div>
  );
}