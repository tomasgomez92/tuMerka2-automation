class Registro {

    get nombreInput()               { return $('#nombreInp')}
    get emailInput()                { return $('#emailInp')}
    get apellidoInput()             { return $('#apellidoInp')}
    get cedulaInput()               { return $('#cedulaInp')}
    get contraseniaInput()          { return $('#contraseniaInp')}
    get confirmContraseniaInput()   { return $('#contraseniaConfInp')}
    get btnRegistrar()              { return $('.mdc-button__label')}

    async register({nombre, apellido, email, cedula, contrasenia, confirmContrasenia} = {}){
        await this.nombreInput.setVal(nombre);
        await this.apellidoInput.setVal(apellido);
        await this.emailInput.setVal(email);
        await this.cedulaInput.setVal(cedula);
        await this.contraseniaInput.setVal(contrasenia);
        await this.confirmContraseniaInput.setVal(confirmContrasenia);
        await browser.pause(5000);
    }

    async clickOnRegister(){
        await this.btnRegistrar.waitForClick();
    }

}
export default new Registro();