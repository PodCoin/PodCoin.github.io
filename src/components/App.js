import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import PageNotFound from './PageNotFound';

export default function App() {
  return (
    <div>
      <h1>Single Page Apps for GitHub Pages</h1>
      <Interactive
        as="a"
        href="https://github.com/rafrex/spa-github-pages"
        {...s.link}
      >https://github.com/rafrex/spa-github-pages</Interactive>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/example" component={ExampleComponent} />
        <Route component={PageNotFound} />
      </Switch>

      <div>
        <Interactive
          as="a"
          href="http://www.rafaelpedicini.com"
          interactiveChild
          focus={{}}
          touchActive={{}}
          touchActiveTapOnly
        >
          Code and concept by <span {...s.childLink}>Rafael Pedicini</span>
        </Interactive>
      </div>
    </div>
  );
}
