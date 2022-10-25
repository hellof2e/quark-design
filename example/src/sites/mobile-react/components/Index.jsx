import { Link, useLocation, Navigate } from 'react-router-dom';
import '@quarkd/icons/lib/arrow-right'
import { nav } from '@/config.json';
import logo from '../../assets/images/quark-logo.png';
import './index.scss';

function App() {
  const location = useLocation();
  if (location.pathname !== '/') {
    return <Navigate to="/" replace />;
  }
  const getName = (name) => {
    switch (name) {
      case 'ActionSheet':
        return 'action-sheet';
      case 'ShareSheet':
        return 'share-sheet';
      case 'ImagePreview':
        return 'image-preview';
      case 'PullRefresh':
        return 'pull-refresh';
      case 'CascadePicker':
        return 'cascade-picker';
      case 'MarketDialog':
        return 'market-dialog';
      default:
        return name.toLowerCase();
    }
  };
  return (
    <div className="index">
      <div className="index-header">
        <img src={logo} alt="" srcSet="" />
        <div className="info">
          <h1>Quark</h1>
          <p>面向未来的移动端 UI 组件库</p>
        </div>
      </div>
      <div className="index-components">
        {nav.map((_nav, index) => (
          <section key={index}>
            <p>{_nav.name}</p>
            <div>
              {_nav.packages.map((_package, _index) => (
                <p key={_index}>
                  <Link to={getName(_package.name)}>
                    {_package.name}&nbsp;&nbsp;{_package.cName}
                  </Link>
                  <quark-icon-arrow-right
                    size="14px"
                    color="#979797"
                    name="right"
                  ></quark-icon-arrow-right>
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default App;
