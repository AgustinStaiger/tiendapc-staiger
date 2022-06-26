import pcdisplay from '../../src/assets/pcdisplay.svg';
import React from 'react';

const NavBar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark mt-3">
                <div class="container-fluid">
                    <a class="navbar-brand" href="home">
                    <img src={pcdisplay} alt="Logo Principal" width="40"></img></a><p class="logo">PC-Gamer</p> 
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto py-1">
                            <li class="nav-item"><a class="nav-link" href="Index.html">Inicio</a></li>
                            <li class="nav-item"><a class="nav-link" href="productos.html">Productos</a></li>
                            <li class="nav-item"><a class="nav-link" href="servicios.html">Quienes somos?</a></li>
                            {/* <li class="nav-item"><a class="nav-link" href="faq.html">GABINETES</a></li>
                            <li class="nav-item"><a class="nav-link" href="contacto.html">ACCESORIOS</a></li>
                            <li class="nav-item"><a class="nav-link" href="presupuesto.html">PRESUPUESTO</a></li>
                            <li class="nav-item"><a class="nav-link" href="compra.html">COMPRAR</a></li> */}
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="" aria-label="Buscar"></input>
                            <button class="btn btn-primary" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
      );
}
 
export default NavBar;

