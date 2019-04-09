<template>
<body id="vue-bootstrap" :class="{ modalOnScreen: modalOnScreen }">
	<transition name="loadingAnimation">
		<LoadingOverlay v-if="isLoading"></LoadingOverlay>
	</transition>
	<!-- Header component (title, bio, links...) -->
	<Header></Header>
	<!-- Projects list -->
	<Projects :projects="projects"></Projects>
	<!-- Project info window -->
	<transition name="articleAnimation">
		<router-view :currentProject="currentProject"></router-view>
	</transition>
</body>
</template>

<script>
import LoadingOverlay from './components/LoadingOverlay'
import Header from "./components/Header"
import Projects from "./components/Projects"
import ProjectView from "./components/ProjectView"

import json from "@/projects.json"; // JSON with all the data

export default {
	name: "app",
	components: {
		LoadingOverlay,
		Header,
		Projects,
		ProjectView
	},
	data() {
		return {
			isLoading: true,
			projects: json.projects, // Format the imported JSON for proper usage
			modalOnScreen: false // overflow-y style of the body element. Locked whenever a project is shown
		};
	},
	computed: {
		// This will catch the current URL parameter and create a new object with only the current project. If no project is found with the given parameter, or there's no parameter at all, it will return false
		currentProject() {
			let current = this.projects.filter(
				project => project.folder == this.$route.params.p
			);
			if (current.length == 0) return false;
			else return current[0];
		}
	},
	methods: {
		// In this method, you pass the currentProject property, and it will lock the body scroll depending if it is false (not shown / invalid)
		lockScroll(modal) {
			if (!modal) this.modalOnScreen = false;
			else this.modalOnScreen = true;
		}
	},
	mounted() {
		// This runs the lock scroll method at the launch of the page, so it can determinate whether is already a project on screen or not
		this.lockScroll(this.currentProject);
		// Listen to the event that will close the modal whenever the escape button is pressed
		window.addEventListener('keyup', (e) => {
			if(this.$router != undefined) 
				if(e.keyCode === 27 || e.key === "Escape")
					this.$router.push('/');
		});
		// Remove the loading overlay when the main component has loaded
		this.$nextTick(function() {
			this.isLoading = false;
		})
	},
	// Watches the currentProject property and runs the lock scroll check whenever it changes
	watch: {
		currentProject(status) {
			this.lockScroll(status);
		}
	}
};
</script>

<style lang="scss">
@import "./style/global.scss";

// Animations
.articleAnimation-enter-active,
.articleAnimation-leave-active {
	transition: opacity 250ms ease-out, transform 200ms ease-out;
}
.articleAnimation-enter,
.articleAnimation-leave-to {
	transform: translateY(2vh);
	opacity: 0;
}

.loadingAnimation-leave-active {
	transition: opacity 1000ms;
}
.loadingAnimation-leave-to {
	opacity: 0;
}

// v-cloak
[v-cloak] {
	position: hidden;
}
</style>