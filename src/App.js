import logo from './logo.svg';
import './App.css';
import Menu from './menu'
import Header from './header'
import TablePedidosPendientes from './tablePedidosPendientes'
import TablePedidosProceso from './tablePedidosProceso'
import TablePedidosFacturacion from './tablePedidosFacturacion'
import TablePedidosPorSurtir from './tablePedidosPorSurtir'
import TablePedidosLocales from './tablePedidosLocales'
import TablePedidosNacionales from './tablePedidosNacionales'
import TablePedidosEntregados from './tablePedidosEntregados'


function App() {

  const pedidosPendientes = [
    { horaFecha: '6/07/2021 10:23 PM', plataforma: 'E-commerce', noCobrar: 123456789987, cliente: 'Ricardo Magana',noVenta: 123456789 },
    { horaFecha: '6/07/2021 10:23 PM', plataforma: 'Amazon', noCobrar: 123456789987, cliente: 'Ricardo Magana', noVenta: 123456789 },
    { horaFecha: '6/07/2021 10:23 PM', plataforma: 'Amazon', noCobrar: 123456789987, cliente: 'Ricardo Magana', noVenta: 123456789 },
  ]

  const pedidosEnProceso = [
    { horaFecha: '6/07/2021 10:23 PM', plataforma: 'E-commerce', noCobrar: 123456789987, cliente: 'Ricardo Magana',noVenta: 123456789 },
    { horaFecha: '6/07/2021 10:23 PM', plataforma: 'Mercado Libre', noCobrar: 123456789987, cliente: 'Antonio Barajas', noVenta: 123456789 },
    { horaFecha: '6/07/2021 10:23 PM', plataforma: 'Amazon', noCobrar: 123456789987, cliente: 'Ricardo Sanchez', noVenta: 123456789 },
  ]

  const pedidosFacturacion = [
    { horaFecha: '6/07/2021 10:23 PM', plataforma: 'Mercado Libre', folioFactura:654654654, noCobro: 123456789987, cliente: 'Ricardo Magana',noVenta: 123456789 },
    { horaFecha: '6/07/2021 10:23 PM', plataforma: 'Amazon', folioFactura:324354, noCobro: 123456789987, cliente: 'Ricardo Magana', noVenta: 123456789 },
    { horaFecha: '6/07/2021 10:23 PM', plataforma: 'Amazon', folioFactura:987654, noCobro: 123456789987, cliente: 'Ricardo Magana', noVenta: 123456789 },
  ]

  const pedidosPorSurtir = [
    { horaFecha: '6/07/2021 10:23 PM', plataforma: 'E-commerce', tipo:'caja', folioFactura:654654, noCobrar: 123456789987, cliente: 'Ricardo Magana',noVenta: 123456789 },
    { horaFecha: '6/07/2021 10:23 PM', plataforma: 'Amazon', tipo:'botella', folioFactura:98762, noCobrar: 123456789987, cliente: 'Ricardo Magana', noVenta: 123456789 },
    { horaFecha: '6/07/2021 10:23 PM', plataforma: 'Amazon', tipo:'caja', folioFactura:48121, noCobrar: 123456789987, cliente: 'Ricardo Magana', noVenta: 123456789 },
  ]

  const pedidosLocales = [
    { estatus: 'en camino', cliente: 'fulano perez', noVenta: 123456789987, tienda: 'minerva', tipoEntrega: 'aereo', vendedor: 'uber' },
    { estatus: 'sin recojer', cliente: 'mengano lopez', noVenta: 123456789987, tienda: 'providencia', tipoEntrega: 'terrestre', vendedor: 'vinos america'  },
    { estatus: 'entregado', cliente: 'perengano jimenez', noVenta: 123456789987, tienda: 'andares', tipoEntrega: 'aereo', vendedor: 'vinos america'  },
  ]

  const pedidosNacionales = [
    { cliente: 'fulano perez', folioFactura: 65465165, noGuia: 123456789987, estatusEnvio: 'entregado' },
    { cliente: 'mengano lopez', folioFactura: 9876549, noGuia: 123456789987, estatusEnvio: 'en ruta' },
    { clienta: 'perengano jimenez', folioFactura: 5163219, noGuia: 123456789987, estatusEnvio: 'sin recojer' },
  ]

  const pedidosEntregados = [
    { horaFecha: '6/07/2021 10:23 PM', plataforma: 'E-commerce', tipo:'caja', noCobrar: 123456789987, cliente: 'Ricardo Magana',noVenta: 123456789 },
    { horaFecha: '6/07/2021 10:23 PM', plataforma: 'Amazon', tipo:'indiviual', noCobrar: 123456789987, cliente: 'Ricardo Magana', noVenta: 123456789 },
    { horaFecha: '6/07/2021 10:23 PM', plataforma: 'Amazon', tipo:'caja', noCobrar: 123456789987, cliente: 'Ricardo Magana', noVenta: 123456789 },
  ]


  return (
    <div className="App">
      <Header/>
      <Menu/>

      <div id="containersSpacing">

        <div className="filtroPedidosContainer">
          <h2>Seguimiento de pedidos</h2>

          <form>
            <label for="cars">FILTRAR POR PLATAFORMA:&nbsp;&nbsp;&nbsp;</label>
            <select name="plataformas" id="plataforma">
              <option value="todas">Todas</option>
              <option value="mercadoLibre">Mercado Libre</option>
              <option value="amazon">Amazon</option>
              <option value="ecommerce">E-Commerce</option>
            </select>
            
            
          </form>
        </div>


        <div className="tabPedidosContainer">

          <ul class="nav nav-tabs" id="myTab" role="tablist">

            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="pendientes-tab" data-bs-toggle="tab" data-bs-target="#pendientes" type="button" role="tab" aria-controls="pendientes" aria-selected="true">Pendientes&nbsp;<span class="badge bg-secondary">18</span></button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="proceso-tab" data-bs-toggle="tab" data-bs-target="#proceso" type="button" role="tab" aria-controls="proceso" aria-selected="false">En proceso &nbsp;<span class="badge bg-secondary">4</span></button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="facturacion-tab" data-bs-toggle="tab" data-bs-target="#facturacion" type="button" role="tab" aria-controls="facturacion" aria-selected="false">Facturación&nbsp;<span class="badge bg-secondary">4</span></button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="surtir-tab" data-bs-toggle="tab" data-bs-target="#surtir" type="button" role="tab" aria-controls="surtir" aria-selected="false">Por surtir&nbsp;<span class="badge bg-secondary">4</span></button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="locales-tab" data-bs-toggle="tab" data-bs-target="#locales" type="button" role="tab" aria-controls="locales" aria-selected="false">Envios locales&nbsp;<span class="badge bg-secondary">4</span></button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="nacionales-tab" data-bs-toggle="tab" data-bs-target="#nacionales" type="button" role="tab" aria-controls="nacionales" aria-selected="false">Envios Nacionales&nbsp;<span class="badge bg-secondary">4</span></button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="entregados-tab" data-bs-toggle="tab" data-bs-target="#entregados" type="button" role="tab" aria-controls="entregados" aria-selected="false">Entregados&nbsp;<span class="badge bg-secondary">4</span></button>
            </li>
          
          </ul>



          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="pendientes" role="tabpanel" aria-labelledby="pendientes-tab">
              <TablePedidosPendientes list={pedidosPendientes}/>
            </div>
            <div class="tab-pane fade" id="proceso" role="tabpanel" aria-labelledby="proceso-tab"><TablePedidosProceso list={pedidosEnProceso}/></div>
            <div class="tab-pane fade" id="facturacion" role="tabpanel" aria-labelledby="facturacion-tab"><TablePedidosFacturacion list={pedidosFacturacion}/></div>
            <div class="tab-pane fade" id="surtir" role="tabpanel" aria-labelledby="surtir-tab"><TablePedidosPorSurtir list={pedidosPorSurtir}/></div>
            <div class="tab-pane fade" id="locales" role="tabpanel" aria-labelledby="locales-tab"><TablePedidosLocales list={pedidosLocales}/></div>
            <div class="tab-pane fade" id="nacionales" role="tabpanel" aria-labelledby="nacionales-tab"><TablePedidosNacionales list={pedidosNacionales}/></div>
            <div class="tab-pane fade" id="entregados" role="tabpanel" aria-labelledby="entregados-tab"><TablePedidosEntregados list={pedidosEntregados}/></div>
          </div>
          
        </div>





        </div>



    </div>
  );
}

export default App;
