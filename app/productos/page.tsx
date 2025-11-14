export default function Productos() {
  return (
    <div className="min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">
        Catálogo Unificado de Accesorios
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Explora productos de múltiples tiendas locales en un solo lugar.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {["Collar LED", "Juguete Interactivo", "Cama Térmica"].map((prod) => (
          <div key={prod} className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4" />
            <h3 className="text-lg font-bold text-purple-700">{prod}</h3>
            <p className="text-2xl font-bold text-pink-600 mt-2">$29.900</p>
            <button className="mt-4 bg-purple-600 text-white w-full py-2 rounded-lg hover:bg-purple-700 transition">
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}