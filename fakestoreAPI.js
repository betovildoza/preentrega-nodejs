import fetch from "node-fetch"

export async function obtenerProductos() {
  try {
    const respuesta = await fetch("https://fakestoreapi.com/products")
    const data = await respuesta.json()

    data.map((producto) => {
      console.log(`ID: ${producto.id} | ${producto.title} - $${producto.price}`)
    })
  } catch (error) {
    console.error("Error al obtener productos:", error.message)
  } finally {
    console.log("Proceso de obtención de productos finalizado")
  }
}

export async function obtenerProducto(id) {
  try {
    const respuesta = await fetch(`https://fakestoreapi.com/${id}`)
    const data = await respuesta.json()
    console.log("Producto obtenido:", data)
  } catch (error) {
    console.error("Error al obtener producto:", error.message)
  } finally {
    console.log("Proceso finalizado")
  }
}

export async function agregarProducto(producto) {
  try {
    const respuesta = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    })

    const data = await respuesta.json()
    console.log("Producto agregado:", data)
  } catch (error) {
    console.error("Error al agregar producto:", error.message)
  } finally {
    console.log("Proceso de agregado finalizado")
  }
}

export async function eliminarProducto(id) {
  try {
    const respuesta = await fetch(`https://fakestoreapi.com/${id}`, {
      method: "DELETE",
    })
    const data = await respuesta.json()
    console.log("Producto eliminado:", data)
  } catch (error) {
    console.error("Error al eliminar producto:", error.message)
  } finally {
    console.log("Proceso de eliminación finalizado")
  }
}
