import mongoose from "mongoose";
import ProductoModel from "../models/ProductoModel.js";

export default class Producto {

    constructor() {
        this.url = "mongodb+srv://FrancoGriffone:kaiin070@cluster0.okf5vxq.mongodb.net/ProyectoFinal2?retryWrites=true&w=majority"
        this.mongodb = mongoose.connect 
    }

    //CREAR PRODUCTO
    async guardar(prod){
        try {
            await this.mongodb(this.url)
            const newProduct = new ProductoModel(prod)
            return await newProduct.save()
        } catch(e){
            console.log(e)
        }
    }

    //BUSCAR POR ID
    async listar(id){
        try {
            await this.mongodb(this.url)
            return await ProductoModel.findById(id)
        } catch(e){
            console.log(e)
        }
    }

    //BUSCAR TODOS
    async listarAll(){
        try {
            await this.mongodb(this.url)
            return await ProductoModel.find()
        } catch(e){
            console.log(e)
        }
    }

    //ACTUALIZA PRODUCTO
    async actualizar(id, prod){
        try {
            await this.mongodb(this.url)
            return await ProductoModel.findByIdAndUpdate(id, prod)
        } catch(e){
            console.log(e)
        }
    }

    //BORRA UN PRODUCTO
    async borrar(id){
        try {
            await this.mongodb(this.url)
            return await ProductoModel.findByIdAndDelete(id)
        } catch(e){
            console.log(e)
        }
    }
}
