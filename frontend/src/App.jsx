import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import School from './component/School';
import Listschools from './component/Listschools';
import Userdata from './component/Userdata';
import Home from './component/Home';

function App() {
    return (
        <Router>
            <div className="p-4">
             
                <Routes>
                <Route  path='/' element={<Home/>}/>
                    <Route path="/addschool" element={<School/>} />
                    <Route path='/userdata' element={<Userdata/>} />
                    <Route  path="/listschools" element={<Listschools  />}/>
               
                </Routes>
            </div>
        </Router>
    );
}

export default App;
