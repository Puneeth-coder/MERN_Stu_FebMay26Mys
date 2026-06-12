import './App.css'
import CitySelector from './components/CitySelector';
import MovieSearch from './components/MovieSearch';
// import MovieCard from "./components/MovieCard";
function App() {
    return (
    // Component Composition :
    //  multiple files are puted in to one page called Component Composition
    <>
    <CitySelector/>
    {/* Controlled Components */}
    <MovieSearch/>
    </>
      
    );
}

export default App