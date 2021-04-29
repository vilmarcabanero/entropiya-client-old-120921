
// `Problem with placeholder, kapag naload ang saved email or password, nagooverlap```

`if irefresh ang sign in or sign up page, ga error page not found, 404 error. https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually

If you try to solve this problem by Hash History technique mentioned in other answers, note that

<Router history={hashHistory} >
does not work in V4, please use HashRouter instead:

import { HashRouter } from 'react-router-dom'

<HashRouter>
  <App/>
</HashRouter>
Reference: HashRouter
```


// Signin.js
// Problem with deployment, hindi pala na update sa github, yung filename, instead na SignIn.js, Signin lang kaya pala hindi makita ni Netlify. 

// 11:03:56 PM: ./src/App.js
// 11:03:56 PM: Cannot find file './pages/SignIn' in './src'.```