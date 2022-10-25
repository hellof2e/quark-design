import { useLocation, Link } from 'react-router-dom';
import '@quarkd/icons/lib/arrow-left'
import Router from './router';
import './App.scss';

function App() {
  const location = useLocation();
  const pathname = location.pathname.substr(1, 99);
  return (
    <>
      <img
        className="react-logo"
        src="https://m.hellobike.com/resource/helloyun/18625/o3HSL_src=http___file.boxuegu.com_07be134def9b44618f3cee0f97077169.png&refer=http___file.boxuegu.jpeg"
      />

      {location.pathname.substr(1, 99) && (
        <div id="nav">
          <Link className="back" to="/">
            <quark-icon-arrow-left ></quark-icon-arrow-left>
          </Link>
          {pathname.includes('-')
            ? pathname
            : pathname.substr(0, 1).toUpperCase() + pathname.substr(1, 99)}
        </div>
      )}

      <Router />
    </>
  );
}

export default App;
