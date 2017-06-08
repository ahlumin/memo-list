import Vue from 'vue';
import Vuex from 'vuex';
import "babel-polyfill";

Vue.use(Vuex);

var app = new Vue({
    el:'#main',
    render(h){
        return h(require('./components/app'));
    }
});
