import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './contact.js';
class App extends Component {
	foo(){
  return <h2>Contacts</h2>
};
render() {
	const a = [
	{name:'Rita',surname:'Yeghiazaryan', img:'https://impoqrik.am/images/stories/krasnaya_shapochka.jpg', mail:'rita.yeghiazaryan.98@mail.ru', tel:'+37477881013'}
		];
  return (
    <div className="App">
	<div className="contacts">
	{a.map(i => <Contact img={i.img} name={i.name} surname={i.surname} mail={i.mail} tel={i.tel} key={i.name} />)}
	</div>
    </div>
	
  );
}
}

export default App;