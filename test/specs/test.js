import homePage from '../pageobjects/home.page';
import loginPage from '../pageobjects/login.page';
import { config } from '../../wdio.conf';
import { literals } from '../utils/literals'
import registroPage from '../pageobjects/registro.page';
import { enums } from '../utils/enums';
import productoPage from '../pageobjects/producto.page';
import carritoPage from '../pageobjects/carrito.page';
import localPage from '../pageobjects/local.page';
import usuarioPage from '../pageobjects/usuario.page';
import compraPage from '../pageobjects/compra.page';

const {
    user,
    registerUser,
    local
} = literals;

const {
    categoryOption
} = enums;

describe('Mi aplicacion TuMerk2', () => {

    before(async() => {
        await browser.maximizeWindow();
        await browser.url(config.baseUrl);
    })

    it('Se valida el logueo correctamente', async () => {
        await homePage.selectSucursal();
        await homePage.selectIngresar();
        await loginPage.login(user.userComprador.email, user.userComprador.contrasenia);
        expect(await homePage.getCerrarSesionBtn()).toEqual(true);
    }),

    it('Se valida el registro correctamente', async () => {
        await homePage.selectSucursal();
        await homePage.selectRegistrar();
        await registroPage.register(registerUser.completeUser);
        await registroPage.clickOnRegister();
    }),

    it('Se valida la inspeccion de un producto de la categoria producto: almacen', async () => {
        await homePage.selectSucursal();
        await homePage.selectIngresar();
        await loginPage.login(user.userComprador.email, user.userComprador.contrasenia);
        await homePage.selectCategoria(categoryOption.almacen);
        await productoPage.selectProducto();
        expect(await productoPage.getProductoDescripcion()).toEqual(true);
    }),

    it('Se agrega un producto al carrito y se realiza la compra', async () => {
        await homePage.selectSucursal();
        await homePage.selectIngresar();
        await loginPage.login(user.userComprador.email, user.userComprador.contrasenia);
        await homePage.selectCategoria(categoryOption.almacen);
        await productoPage.agregarProducto();
        await homePage.selectVerCarrito();
        await carritoPage.selectRetiroLocal();
        await carritoPage.clickOnPagar();
    }),

    it('Se da de alta un nuevo local', async () => {
        await homePage.selectSucursal();
        await homePage.selectIngresar();
        await loginPage.login(user.userAdministrador.email, user.userAdministrador.contrasenia);
        await homePage.selectAltaLocal();
        await localPage.altaLocal(local.completeLocal3);
        await localPage.clickOnRegisterLocal();
    }),

    it('Se da de alta un usuario tipo sucursal', async () => {
        await homePage.selectSucursal();
        await homePage.selectIngresar();
        await loginPage.login(user.userAdministrador.email, user.userAdministrador.contrasenia);
        await homePage.selectAltaUsuario();
        await usuarioPage.altaUsuarioSucursal(registerUser.completeUsuarioSucursal);
    }),

    it('Se cambia el estado de una compra', async () => {
        await homePage.selectSucursal();
        await homePage.selectIngresar();
        await loginPage.login(user.userSucursal.email, user.userSucursal.contrasenia);
        await homePage.selectEstadoCompra();
        await compraPage.cambiarEstado();
    })
})


