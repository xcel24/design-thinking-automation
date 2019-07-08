import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Empathymap from './components/Empathymap';
import EmpathyNotes from './components/EmpathyNotes';
import NotesSession from './components/NotesSession';
import Think from './components/Think';
import Feel from './components/Feel';
import GenerateEmpathyMap from './components/GenerateEmpathyMap';
import Tempthink from './components/Tempthink';
import PersonaMap from './components/PersonaMap';
import Distribute from './components/Distribute';
import CssTut from './components/CssTut';
import FinalPersonaMap from './components/FinalPersonaMap';
import TempPersona from './components/TempPersona';
import JourneyMap from './components/JourneyMap';
import Ideate from './components/Ideate';
import Login from './components/Login';
import Projects from './components/Projects';
import DesignThinking from './components/DesignThinking';
import EmpathyClassification from './components/EmpathyClassification';
import TempEmpathy from './components/TempEmpathy';
import Artefacts from './components/Artefacts';
import Define from './components/Define';
import FinalEmpathyMap from './components/FinalEmpathyMap';
import PersonaEmpathy from './components/PersonaEmpathy';
import LastEmpathyMap from './components/LastEmpathyMap';
import ShowEmpathy from './components/ShowEmpathy';
import Triangular from './components/Triangular';



ReactDOM.render((

    <Router>
            <Route exact path='/' component={Login} />
            <Route exact path='/app' component={App} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/empathymap' component={Empathymap} />
            <Route exact path='/empathymap/empathynotes' component={EmpathyNotes} />
            <Route exact path='/notessession/:name/:office' component={NotesSession} />
            <Route exact path='/think/:name/:office' component={Think} />
            <Route exact path='/feel/:name/:office' component={Feel} />
            <Route exact path='/generateempathymap/:name/:office' component={GenerateEmpathyMap} />
            <Route exact path='/tempthink/:name/:office' component={Tempthink} />
            <Route exact path='/personamaps' component={PersonaMap} />
            <Route exact path='/distribute' component={Distribute} />
            <Route exact path='/csstut' component={CssTut} />
            <Route exact path='/finalpersonamap' component={FinalPersonaMap} />
            <Route exact path='/finalpersonamap/:name' component={TempPersona} />
            <Route exact path='/journeymap' component={JourneyMap} />
            <Route exact path='/ideate' component={Ideate} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/projects/:projectname' component={DesignThinking} />
            <Route exact path='/empathyclassification' component={EmpathyClassification} />
            <Route exact path='/tempempathy' component={TempEmpathy} />
            <Route exact path='/artefacts' component={Artefacts} />
            <Route exact path='/define' component={Define} />
            <Route exact path='/finalempathymap' component={FinalEmpathyMap} />
            <Route exact path='/personaempathy' component={PersonaEmpathy} />
            <Route exact path='/lastEmpathyMap' component={LastEmpathyMap} />
            <Route exact path='/showEmpathyMap' component={ShowEmpathy} />
            <Route exact path='/triangular' component={Triangular} />
    </Router>
   

), document.getElementById('root'));


serviceWorker.unregister();
