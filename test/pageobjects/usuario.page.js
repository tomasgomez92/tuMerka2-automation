class UsuarioPage{

    get nombreInput()               { return $('[formcontrolname="nombre"]')}
    get emailInput()                { return $('[formcontrolname="email"]')}
    get apellidoInput()             { return $('[formcontrolname="apellido"]')}
    get cedulaInput()               { return $('[formcontrolname="cedula"]')}
    get contraseniaInput()          { return $('[formcontrolname="contrasenia"]')}
    get tipoUsuario()               { return $('[formcontrolname="tipoUser"]')}
    get tipoUsuarioAdministrador()  { return $('[value="Administrador"]')}
    get tipoUsuarioSucursal()       { return $('[value="Sucursal"]')}
    get btnAgregarUsuario()         { return $('.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-unthemed.mat-mdc-button-base')}

    async altaUsuarioSucursal({nombre, apellido, email, cedula, contrasenia} = {}){
        await this.nombreInput.setVal(nombre);
        await this.apellidoInput.setVal(apellido);
        await this.emailInput.setVal(email);
        await this.cedulaInput.setVal(cedula);
        await this.contraseniaInput.setVal(contrasenia);
        await this.tipoUsuario.waitForClick();
        await this.tipoUsuarioAdministrador.waitForClick();
        await this.btnAgregarUsuario.waitForClick();
        await browser.pause(3000);
    }

    async clickOnAgregarUsuario(){
        await this.btnAgregarUsuario.waitForClick();
    }
}
export default new UsuarioPage();