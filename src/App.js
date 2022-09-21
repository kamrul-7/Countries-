
import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Country/Footer/Footer';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>

    </div>
  );
}







// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])

//   return (
//     <div>
//       <h1>Hello React</h1>
//       <h3>Availavle Countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population} official={country.name.official} capital={country.capital}></Country>)
//       }
//     </div>
//   )
// }
// function Country(props) {
//   return (
//     <div>
//       <h1>Country name: {props.name}</h1>
//       <p>Population: {props.population}</p>
//       <p>Official: {props.official}</p>
//       <p>capital: {props.capital}</p>
//     </div>
//   )
// }
export default App;
