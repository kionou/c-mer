
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layouts/Layout"
import '../src/assets/App.css'
// import AboutDefault from './views/About/default';
import HomeDefault from "./views/Home/default";


import TeamsDefault from './views/About/teams';
import CertificationsDefault from './views/About/certifications';
import ContactDefault from './views/About/contact';
import NewsDefault from './views/About/news';
import OverviewDefault from './views/About/overview';

import WeDoDefault from './views/WeDo/default'
import CapabilitiesDefault from './views/WeDo/capabilities';
import FocusDefault from './views/WeDo/focus';
import ToolsDefault from './views/WeDo/tools';

// import InsightsDefault from './views/Insights/default'

import ProjectsDefault from './views/Projects/default'
import WeWorkDefault from './views/WeWork/default'
import SearchDefault from './views/Insights/search';
import EventsDefault from './views/Insights/events';
import PodcastsDefault from './views/Insights/podcasts';
import BlogDefault from './views/Insights/blog';
import PublicationsDefault from './views/Insights/publications';
import SpotlightDefault from './views/Insights/spotlight';
import ScrollToTop from './lib/scrollTop';




function App() {

  return (
    <>
    <BrowserRouter>
      <Layout>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<HomeDefault />} />

          <Route path="/teams" element={<TeamsDefault />} />
          <Route path="/certifications" element={<CertificationsDefault />} />
          <Route path="/contact" element={<ContactDefault />} />
          <Route path="/news" element={<NewsDefault />} />
          <Route path="/overview" element={<OverviewDefault />} />

          <Route path="/what-we-do" element={<WeDoDefault />} />
          <Route path="/what-we-do/capabilities" element={<CapabilitiesDefault />} />
          <Route path="/what-we-do/focus-areas" element={<FocusDefault />} />
          <Route path="/what-we-do/tools" element={<ToolsDefault />} />


          <Route path="/insights-search" element={<SearchDefault />} />
          <Route path="/insights-podcasts" element={<PodcastsDefault />} />
          <Route path="/insights-blogs" element={<BlogDefault />} />
          <Route path="/insights-publications" element={<PublicationsDefault />} />
          <Route path="/insights-events" element={<EventsDefault />} />
          <Route path="/insights-spotlight" element={<SpotlightDefault />} />


          <Route path="/projects" element={<ProjectsDefault />} />
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
