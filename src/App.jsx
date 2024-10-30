
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layouts/Layout"
import '../src/assets/App.css'
import AboutDefault from './views/About/default';
import HomeDefault from "./views/Home/default";
import InsightsDefault from './views/Insights/default'
import ProjectsDefault from './views/Projects/default'
import WeDoDefault from './views/WeDo/default'
import WeWorkDefault from './views/WeWork/default'


function App() {

  return (
    <>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeDefault />} />
          <Route path="/about" element={<AboutDefault />} />
          <Route path="/insights" element={<InsightsDefault />} />
          <Route path="/projects" element={<ProjectsDefault />} />
          <Route path="/what-we-do" element={<WeDoDefault />} />
          <Route path="/where-we-work" element={<WeWorkDefault />} />
        
          <Route path="*" element={
            <div>
              <h1>404</h1>
              <p>Page non trouvée</p>
            </div>
          } />
        </Routes>
      </Layout>
    </BrowserRouter>

    </>
  )
}

export default App
