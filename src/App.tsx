import { ErrorBoundary } from './components/ErrorBoundary';
import { Layout } from './components/Layout';
import { TestCard } from './components/TestCard';
import { CustomFallback } from './components/CustomFallback';

function App() {
  return (
    <ErrorBoundary fallback={props => <CustomFallback {...props} />}>
      <Layout>
        <TestCard />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
