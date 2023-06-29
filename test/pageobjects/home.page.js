import { enums } from "../utils/enums"

const {
    categoryOption
} = enums

class HomePage{
   
    get sucursalBuceo()         { return $('.hover-button.mdc-button.mat-mdc-button.mat-unthemed.mat-mdc-button-base')}
    get btnHamburguesa()        { return $$('.mat-mdc-button-touch-target')[1]}
    get btnIngresar()           { return $$('.mdc-list-item__primary-text')[1]}
    get btnRegistrar()          { return $$('.mdc-list-item__primary-text')[2]}
    get btncerrarSesion()       { return $('.menu.ng-star-inserted')}

    get categoriasProductos()   { return $('.mdc-list-item__content')}
    get catAlmacen()            { return $$('.mat-mdc-menu-item.mat-mdc-focus-indicator.mdc-list-item.ng-tns-c3216136785-0.ng-star-inserted')[0]}
    get catFrescos()            { return $$('.mat-mdc-menu-item.mat-mdc-focus-indicator.mdc-list-item.ng-tns-c3216136785-0.ng-star-inserted')[1]}
    get catBebidas()            { return $$('.mat-mdc-menu-item.mat-mdc-focus-indicator.mdc-list-item.ng-tns-c3216136785-0.ng-star-inserted')[2]}
    get catCongelados()         { return $$('.mat-mdc-menu-item.mat-mdc-focus-indicator.mdc-list-item.ng-tns-c3216136785-0.ng-star-inserted')[3]}
    get catLimpieza()           { return $$('.mat-mdc-menu-item.mat-mdc-focus-indicator.mdc-list-item.ng-tns-c3216136785-0.ng-star-inserted')[4]}
    get catPerfumeria()         { return $$('.mat-mdc-menu-item.mat-mdc-focus-indicator.mdc-list-item.ng-tns-c3216136785-0.ng-star-inserted')[5]}
    get catElectro()            { return $$('.mat-mdc-menu-item.mat-mdc-focus-indicator.mdc-list-item.ng-tns-c3216136785-0.ng-star-inserted')[6]}
    get catJugueteria()         { return $$('.mat-mdc-menu-item.mat-mdc-focus-indicator.mdc-list-item.ng-tns-c3216136785-0.ng-star-inserted')[7]}
    get catDeportes()           { return $$('.mat-mdc-menu-item.mat-mdc-focus-indicator.mdc-list-item.ng-tns-c3216136785-0.ng-star-inserted')[8]}
    get catHogar()              { return $$('.mat-mdc-menu-item.mat-mdc-focus-indicator.mdc-list-item.ng-tns-c3216136785-0.ng-star-inserted')[9]}
    get catFerreteria()         { return $$('.mat-mdc-menu-item.mat-mdc-focus-indicator.mdc-list-item.ng-tns-c3216136785-0.ng-star-inserted')[10]}
    get catTextiles()           { return $$('.mat-mdc-menu-item.mat-mdc-focus-indicator.mdc-list-item.ng-tns-c3216136785-0.ng-star-inserted')[11]}
    get catBebes()              { return $$('.mat-mdc-menu-item.mat-mdc-focus-indicator.mdc-list-item.ng-tns-c3216136785-0.ng-star-inserted')[12]}
    get catMascotas()           { return $$('.mat-mdc-menu-item.mat-mdc-focus-indicator.mdc-list-item.ng-tns-c3216136785-0.ng-star-inserted')[13]}

    get verCarritoBtn()         { return $('#datosCarrito')}
    get altasBtn()              { return $$('.mdc-list-item__content')[1]}
    get altaLocalBtn()          { return $('#datosAlta')}
    get altaUsuarioBtn()        { return $$('#datosAlta')[3]}
    get localBtn()              { return $$('.mdc-list-item__content')[1]}
    get estadoCompraBtn()       { return $$('[role="menuitem"]')[1]}

    async selectSucursal(){
        await this.sucursalBuceo.waitForClick();
    }

    async selectIngresar(){
        await this.btnHamburguesa.waitForClick();
        await this.btnIngresar.waitForClick();
    }

    async selectRegistrar(){
        await this.btnHamburguesa.waitForClick();
        await this.btnRegistrar.waitForClick();
    }

    async getCerrarSesionBtn(){
        return await this.btncerrarSesion.isDisplayed();
    }

    async selectCategoria(element){
        let selected;
        await this.categoriasProductos.waitForClick();
        switch(element){
            case categoryOption.almacen:
                selected = await this.catAlmacen;
                break;
            case categoryOption.frescos:
                selected = await this.catFrescos;
                break;
            case categoryOption.bebidas:
                selected = await this.catBebidas;
                break;
            case categoryOption.congelados:
                selected = await this.catCongelados;
                break;
            case categoryOption.limpieza:
                selected = await this.catLimpieza;
                break;
            case categoryOption.perfumeria:
                selected = await this.catPerfumeria;
                break;
            case categoryOption.elctroTecnologia:
                selected = await this.catElectro;
                break;
            case categoryOption.jugueteriaLibreria:
                selected = await this.catJugueteria;
                break;
            case categoryOption.deportesFitness:
                selected = await this.catDeportes;
                break;
            case categoryOption.hogarBazar:
                selected = await this.catHogar;
                break;
            case categoryOption.ferreteria:
                selected = await this.catFerreteria;
                break;
            case categoryOption.textiles:
                selected = await this.catTextiles;
                break;
            case categoryOption.bebes:
                selected = await this.catBebes;
                break;
            case categoryOption.mascotas:
                selected = await this.catMascotas;
                break;
            default:
                throw new Error (`${element} no es una categoria valida`);
        }
        await selected.waitForClick();
    }

    async selectVerCarrito(){
        await this.verCarritoBtn.waitForClick();
    }

    async selectAltaLocal(){
        await this.altasBtn.waitForClick();
        await this.altaLocalBtn.waitForClick();
    }

    async selectAltaUsuario(){
        await this.altasBtn.waitForClick();
        await this.altaUsuarioBtn.waitForClick();
    }

    async selectEstadoCompra(){
        await this.localBtn.waitForClick();
        await this.estadoCompraBtn.waitForClick();
    }
}
export default new HomePage();
