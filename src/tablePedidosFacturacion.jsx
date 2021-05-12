import React, { useState, useContext, useEffect } from 'react';
import './App.css';
import logoHeader from './recursos/vinos-america-logo-01.svg'
//import Menu from './menu'

function TablePedidosFacturacion(list) {
    const [lista, setLista] = useState([]);


    useEffect( () =>{
        setLista(list.list)
    }, [] );




  return (
    <table class="table table-borderless">

        <thead>
            <tr>
                <th scope="col">HORA Y FECHA</th>
                <th scope="col">PLATAFORMA</th>
                <th scope="col">FOLIO DE FACTURA</th>
                <th scope="col">NO. DE COBRO</th>
                <th scope="col">CLIENTE</th>
                <th scope="col">NO. DE VENTA</th>
            </tr>
        </thead>

        <tbody>
            {list.list.map( i => 
                <tr>
                    <td> {i.horaFecha} </td>
                    <td>{i.plataforma}</td>
                    <td>{i.folioFactura}</td>
                    <td>{i.noCobro}</td>
                    <td>{i.cliente}</td>
                    <td>{i.noVenta}</td>
                    <td colspan="2"><button>ver factura</button> <button>Detalles</button></td>
                </tr>
            )}


        </tbody>

    </table>
  );
}

export default TablePedidosFacturacion;