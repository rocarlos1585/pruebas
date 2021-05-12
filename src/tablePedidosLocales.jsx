import React, { useState, useContext, useEffect } from 'react';
import './App.css';
import logoHeader from './recursos/vinos-america-logo-01.svg'
//import Menu from './menu'

function TablePedidosLocales(list) {
    const [lista, setLista] = useState([]);


    useEffect( () =>{
        setLista(list.list)
    }, [] );




  return (
    <table class="table table-borderless">

        <thead>
            <tr>
            <th scope="col">ESTATUS</th>
            <th scope="col">CLIENTE</th>
            <th scope="col">NO. DE VENTA</th>
            <th scope="col">TIENDA</th>
            <th scope="col">TIPO DE ENTREGA</th>
            <th scope="col">VENDEDOR</th>
            </tr>
        </thead>

        <tbody>
            {list.list.map( i => 
                <tr>
                <td> {i.estatus} </td>
                <td>{i.cliente}</td>
                <td>{i.noVenta}</td>
                <td>{i.tienda}</td>
                <td>{i.tipoEntrega}</td>
                <td>{i.vendedor}</td>
                <td colspan="2"><button>Detalles</button></td>

                </tr>
            )}


        </tbody>

    </table>
  );
}

export default TablePedidosLocales;