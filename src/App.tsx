import Form from "./components/Form"
import Json from './components/Json';
import Navbar from "./components/Navbar";
import Third from './components/Third';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
			<Route path="/" element={<Form />} />
			<Route path="/json" element={<Json />} />
			<Route path="/third" element={<Third />} />
		</Routes>
	</BrowserRouter>
);

export default App