import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';


//dummies
const surveys = () => <h2>Surveys</h2>
const surveyNew = () => <h2>SurveyNew</h2>
class App extends React.Component{

    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return (
            <div>
            <BrowserRouter>
                <div className='container'>
                    <Header />
                    <Route exact path='/' component={Landing} />
                    <Route  path='/surveys' component={surveys} />
                    <Route  path='/surveyNew' component={surveyNew} />
                </div>
            </BrowserRouter>
            </div>
        )
    }
};

const mapStateToProps=  state=>{

}

export default connect(null,actions)(App);