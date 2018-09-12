import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import userreducer from './reducers/userreducer.js';


const store = createStore(userreducer,
    {user:[{fname:'',lname:'' ,address:'',company:'',phone:'',dob:''  }]  },
    window.devToolsExtension && window.devToolsExtension()


); 

console.log(store.getState());

const updateUserAction = {
type:'updateUser',
payload:{
    fname:'',lname:'' ,address:'',company:'',phone:'',dob:''

}

}

store.dispatch(updateUserAction); 

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
