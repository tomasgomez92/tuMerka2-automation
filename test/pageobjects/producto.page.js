class Producto{

    get productoAzucar()        { return $('.square.ng-star-inserted')}
    get productoDescripcion()   { return $$('p')[1]}
    get agregarProducto()       { return $$('.btnAgregar.ng-star-inserted')[1]}
    get addBtnProducto()        { return $$('.quantity-button')[1]}
    get asignarBtn()            { return $('.popup-button.assign-button')}

    async selectProducto(){
        await this.productoAzucar.waitForClick();
    }

    async getProductoDescripcion(){
        return await this.productoDescripcion.isDisplayed();
    }

    async agregarProducto(){
        await this.agregarProducto.waitForClick();
        await this.addBtnProducto.waitForClick();
        await this.asignarBtn.waitForClick();
    }
}
export default new Producto();