import { Routes, Route, Link } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetup';
import Favourites from './pages/Favorites';
import Layout from './components/layout/Layout';
// import NewMeetupsPage from './pages/NewMeetup';

export default function App() {
  return (
    <div>
      <Layout>
        {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
        <Routes>
          <Route path='/' element={<AllMeetupsPage />} />
          <Route path='/new-meetup' element={<NewMeetupsPage />} />
          <Route path='/favorites' element={<Favourites />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path='*' element={<NoMatch />} />
          {/* </Route> */}
        </Routes>
      </Layout>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to='/'>Go to the home page</Link>
      </p>
    </div>
  );
}
