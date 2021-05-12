import React, { useState, useContext, useEffect } from 'react';
import './App.css';
import logoHeader from './recursos/vinos-america-logo-01.svg'
//import Menu from './menu'

function TablePedidosPendientes(list) {
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
            <th scope="col">NO. DE COBRAR</th>
            <th scope="col">CLIENTE</th>
            <th scope="col">NO. DE VENTA</th>
            </tr>
        </thead>

        <tbody>
            {list.list.map( i => 
                <tr>
                <td> {i.horaFecha} </td>
                <td>{i.plataforma}</td>
                <td>{i.noCobrar}</td>
                <td>{i.cliente}</td>
                <td>{i.noVenta}</td>
                <td colspan="2"><button>Tomar Orden</button></td>

                </tr>
            )}


        </tbody>

    </table>
  );
}

export default TablePedidosPendientes;