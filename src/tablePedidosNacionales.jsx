import React, { useState, useContext, useEffect } from 'react';
import './App.css';
import logoHeader from './recursos/vinos-america-logo-01.svg'
//import Menu from './menu'

function TablePedidosNacionales(list) {
    const [lista, setLista] = useState([]);


    useEffect( () =>{
        setLista(list.list)
    }, [] );




  return (
    <table class="table table-borderless">

        <thead>
            <tr>
            <th scope="col">CLIENTE</th>
            <th scope="col">FOLIO DE FACTURA</th>
            <th scope="col">NUMERO DE GUIA</th>
            <th scope="col">ESTATUS DEL ENVIO</th>
            
            </tr>
        </thead>

        <tbody>
            {list.list.map( i => 
                <tr>
                <td> {i.cliente} </td>
                <td>{i.folioFactura}</td>
                <td>{i.noGuia}</td>
                <td>{i.estatusEnvio}</td>
                
                <td colspan="2"><button>Ver factura</button> <button>Detalles</button></td>

                </tr>
            )}


        </tbody>

    </table>
  );
}

export default TablePedidosNacionales;