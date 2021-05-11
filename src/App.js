import logo from './logo.svg';
import './App.css';
import Menu from './menu'
import Header from './header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>

      <div id="containersSpacing">

        <div className="filtroPedidosContainer">
          <h2>Seguimiento de pedidos</h2>

          <form>
            <label for="cars">FILTRAR POR PLATAFORMA:              </label>
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
              <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
          </div>
        </div>





        </div>



    </div>
  );
}

export default App;
