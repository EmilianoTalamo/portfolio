import Vue from 'vue' // Core component
import VueRouter from 'vue-router' // Router component

// Font-awesome libraries
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt, faEnvelope } from '@fortawesome/fontawesome-free-regular'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue' // Main component
import ProjectView from './components/ProjectView.vue' // Route component

Vue.config.productionTip = false
Vue.use(VueRouter) // Inject Vue Router dependency

// Font Awesome icon imports
library.add(faFileAlt, faGithubAlt, faLinkedinIn, faEnvelope, faCode, faExternalLinkAlt)
Vue.component('fa', FontAwesomeIcon)

// Vue Router config
const router = new VueRouter({
	mode: 'history',
	routes: [{
			path: '/:p', // Inject component whenever there's a parameter in the URL
			component: ProjectView, // Inject this component
			props: (route) => ({
					p: route.query.p
			})
	}]
});

new Vue({
	router,
  render: h => h(App),
}).$mount('#vue-bootstrap')
