class LoginPage{
    
    get inputEmail ()       { return $('#emailInp')}
    get inputContrasenia () { return $('#contraseniaInp')}
    get btnIniciarSesion () { return $('.mdc-button__label')}

    
    async login (username, password) {
        await this.inputEmail.setVal(username);
        await this.inputContrasenia.setVal(password);
        await this.btnIniciarSesion.waitForClick();
        await browser.pause(3000);
    }
}

export default new LoginPage();
