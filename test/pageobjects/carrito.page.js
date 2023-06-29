class Carrito{

    get retiroLocalBtn()    { return $('#mat-mdc-checkbox-1-input')}
    get pagarBtn()          { return $('.mat-mdc-button-persistent-ripple.mdc-button__ripple')}

    async selectRetiroLocal(){
        await this.retiroLocalBtn.waitForClick();
    }

    async clickOnPagar(){
        await this.pagarBtn.waitForClick();
        await browser.pause(3000);
    }
}
export default new Carrito();