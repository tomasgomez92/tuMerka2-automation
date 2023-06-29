class CompraPage{

    get cambiarEstadoBtn()  { return $('.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-unthemed.mat-mdc-button-base')}

    async cambiarEstado(){
        await this.cambiarEstadoBtn.waitForClick();
        await browser.pause(3000);
    }
}
export default new CompraPage();