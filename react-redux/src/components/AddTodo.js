
import { createStore, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactDom from 'react-dom'
import {addTodo,addTodo2} from '../actions';
import React, { Component, PropTypes } from 'react';
 class App2 extends React.Component {
    constructor() {
        super();
    }
    componentWillReceiveProps(props, nextProps){
        console.log(props, nextProps);
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this._onClick.bind(this)}>{this.props.txt}</button>
            </div>
        );
    }
    _onClick(){
        if (this.props.txt == 'on') {
            this.props.actions.addTodo(this.props.txt);
        } else {
            this.props.actions.addTodo2();
        }
    }
}

function mapStateToProps(state) {
  return {
    txt: state.todos.txt
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
        addTodo,
        addTodo2
    }, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App2);
