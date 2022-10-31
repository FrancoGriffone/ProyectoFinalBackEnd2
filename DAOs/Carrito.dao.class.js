import mongoose from "mongoose";
import Producto from "./Producto.dao.class.js";
import CarritoModel from "../models/CarritoModel.js"

export default class Carrito {
    constructor(){
        this.producto = new Producto();
        this.carritos = [];
        this.url = "mongodb+srv://FrancoGriffone:kaiin070@cluster0.okf5vxq.mongodb.net/ProyectoFinal2?retryWrites=true&w=majority"
        this.mongodb = mongoose.connect 
    }

    //CREAR CARRITO
    async crearCarrito(){
        try {
            await this.mongodb(this.url)
            const carr = CarritoModel()
            return await carr.save()
        } catch(e){
            console.log(e)
        }
    }

    //GUARDAR PRODUCTO EN CARRITO
    async guardarProductoEnCarrito(idCarrito, idProd){
        try {
            await this.mongodb(this.url)
            const producto = await this.producto.listar(idProd);
            /*const carr = CarritoModel(idCarrito)
            carr.forEach((carro) =>{
            carro.id == idCarrito ? carro.productos.push(producto) : null;
            });*/
            console.log(producto)
            return await CarritoModel.findByIdAndUpdate(idCarrito, producto)
            //return this.carritos;
        } catch(e){
            console.log(e)
        }
    }

    //MOSTRAR UN CARRITO
    async listar(id){
        try {
            await this.mongodb(this.url)
            return await CarritoModel.findById(id)
        } catch(e){
            console.log(e)
        }
    }

    //MOSTRAR TODOS LOS CARRITOS
    async listarAll(){
        try {
            await this.mongodb(this.url)
            return await CarritoModel.find()
        } catch(e){
            console.log(e)
        }
    }

    //ACTUALIZAR UN CARRITO
    async actualizar(carr, id){
        try {
            await this.mongodb(this.url)
            const producto = await this.producto.listar(id);
            this.carritos.forEach((carro) =>{
                carro.id == carr ? carro.productos.splice(producto) : null;
            });
            return this.carritos;
        } catch(e){
            console.log(e)
        }
    }

    //BORRAR UN CARRITO
    async borrar(id){
        try {
            await this.mongodb(this.url)
            return await CarritoModel.findByIdAndDelete(id)
        } catch(e){
            console.log(e)
        }
    }
}