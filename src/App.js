
import { Index } from './Landing-page/components';
import { Route , Routes, BrowserRouter} from 'react-router-dom'
import Privacy from './Landing-page/components/privacy/Privacy';
import Terms from './Landing-page/components/privacy/Terms';
import Support from './Landing-page/components/Support/Support';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index />}>
      </Route>
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
