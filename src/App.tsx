import React, {Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './common/theme';

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route path="/story-book" exact>

          </Route>
        </Switch>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
