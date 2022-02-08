import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Header from './components/Header';
import Card from './components/Card';
import Carrousel from './components/Carrousel';
import Form from './components/Form';
import Accordion from './components/Accordion';
import Sppiners from './components/Sppiners';
import Modal from './components/Modal'
function App() {
  return (
    <BrowserRouter>

    <Header
  brand="DIIME"
  item1="Home"
  item2="Services"
  item3="Contact"
  btn="buscar"
/>
<Card

/>
<Card

/>
<Carrousel
img1="https://firebasestorage.googleapis.com/v0/b/hackerprojects-63840.appspot.com/o/fondo-lineas-dinamicas-azul-degradado_52683-67204.jpg?alt=media&token=bd0ac3e3-c2cc-4488-85c3-7842e8017ff2"
img2="https://firebasestorage.googleapis.com/v0/b/hackerprojects-63840.appspot.com/o/depositphotos_22440587-stock-photo-abstract-bokeh-background.jpg?alt=media&token=e5164701-647f-4c62-92d6-4c13781fb315"
img3="https://firebasestorage.googleapis.com/v0/b/hackerprojects-63840.appspot.com/o/red.jpg?alt=media&token=88ddb2c8-63f5-4ab3-83cf-31bea389c563"
/>
<Form/>

<Accordion/>
< Sppiners
/>
<Modal/>

    </BrowserRouter>
  );
}

export default App;
