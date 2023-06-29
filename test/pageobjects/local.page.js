class LocalPage{

    get nombreInput()       { return $('[formcontrolname="nombre"]')}
    get direccionInput()    { return $('[formcontrolname="direccion"]')}
    get telefonoInput()     { return $('[formcontrolname="telefono"]')}
    get registerLocalBtn()  { return $('.button-container')}

    async altaLocal({nombre, direccion, telefono} = {}){
        await this.nombreInput.clickAndSetVal(nombre);
        await this.direccionInput.clickAndSetVal(direccion);
        await this.telefonoInput.clickAndSetVal(telefono);
    }

    async clickOnRegisterLocal(){
        await this.registerLocalBtn.waitForClick();
    }

}
export default new LocalPage();