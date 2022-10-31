import express from "express";
import Producto from "../DAOs/Producto.dao.class.js";

const router = express.Router();

const producto = new Producto();

function validarAdmin(req, res, next){
    if(req.query.admin){
        next()
    } else {
        res.send("Usted no tiene acceso")
    }
}
router.get("/", async (req, res) =>{
    const listaProductos = await producto.listarAll();
    res.send(listaProductos)
});

router.get("/:id", async (req, res) =>{
    const productoBuscado = await producto.listar(req.params.id);
    res.send(productoBuscado)
});

router.post("/", validarAdmin, async (req, res) => {
    console.log(req.body);
    const response = await producto.guardar(req.body)
    res.send(response);
});

router.put("/:id", validarAdmin, async (req, res) => {
    const productoActualizado = await producto.actualizar(req.params.id, req.body);
    res.send(productoActualizado)
});

router.delete("/:id", validarAdmin, async (req, res) => {
    const productoBorrado = await producto.borrar(req.params.id);
    res.send(productoBorrado);
});


export default router;