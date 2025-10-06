// fakestoreAPI.js
import fetch from "node-fetch"

// Obtener todos los productos
export async function obtenerProductos() {
  try {
    const respuesta = await fetch("https://fakestoreapi.com/products")
    const data = await respuesta.json()

    // Mostrar cada producto en consola
    data.map((producto) => {
      console.log(`ID: ${producto.id} | ${producto.title} - $${producto.price}`)
    })
  } catch (error) {
    console.error("Error al obtener productos:", error.message)
  } finally {
    console.log("Proceso de obtención de productos finalizado")
  }
}

// Obtener un producto por ID (ej: "products/15")
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

// Agregar un nuevo producto
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

// Eliminar un producto (ej: "products/2")
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
