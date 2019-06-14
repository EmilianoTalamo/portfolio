<template>
	<!-- Avoid rendering the window if the URL parameter is incorrect -->
	<article v-if="currentProject" class="Project" data-simplebar :key="currentProject.folder">
		<!-- Close button -->
		<router-link :to="{ path: '/' }" id="close">×</router-link>
		<div id="content" :class="[ready ? 'ready' : 'load']">
			<!-- Project title -->
			<h1>{{ currentProject.title }}</h1>
			<!-- Technologies list -->
			<ul id="tech">
				<li v-for="item in currentProject.tech" :key="item.tech">{{ item }}</li>
			</ul>
			<!-- Image -->
			<img
				:src="imgPath"
				:alt="currentProject.title"
				class="load"
				onload="setTimeout(() => this.className = 'ready', 66)"
				onerror="this.className = 'error'"
			>
			<!-- Info -->
			<div id="info">
				<p v-for="(paragraph, index) in formattedInfo" :key="index">{{paragraph}}</p>
			</div>
			<ProjectLinks :code="currentProject.code" :view="currentProject.view"></ProjectLinks>
		</div>
	</article>
</template>

<script>
import ProjectLinks from "../components/ProjectLinks";
import "simplebar";
import "simplebar/dist/simplebar.css";
import { setImmediate, setTimeout } from "timers";

export default {
	name: "ProjectView",
	components: { ProjectLinks },
	props: ["currentProject"],
	data() {
		return {
			publicPath: process.env.BASE_URL,
			ready: false
		};
	},
	computed: {
		// This splits the paragraphs of the info into an array
		formattedInfo() {
			return this.currentProject.info.split("\n");
		},
		imgPath() {
			return this.getImg();
		}
	},
	methods: {
		getImg() {
			let path = `${this.publicPath}assets/gallery/${
				this.currentProject.folder
			}.jpg`;
			return path;
		}
	},
	watch: {
		$route(to, from) {
			if (to != from) {
				this.ready = false;
				this.$forceUpdate();
			}
		}
	},
	mounted() {
		this.$nextTick(() => (this.ready = true));
		this.getImg(false);
	},
	updated() {
		setTimeout(() => this.ready = true, 66);
	}
};
</script>

<style lang="scss" scoped>
@import "../style/project.scss";

.galleryAnim-leave-active {
	transition: opacity 16ms ease-out;
}

.galleryAnim-leave-to {
	opacity: 0;
}
</style>

<style scoped>
.load {
	opacity: 0.01;
}
.ready {
	opacity: 1;
	transition: opacity 300ms linear;
}
.error {
	display: none !important;
}
img.load {
	opacity: 0;
	max-height: 300px;
}
img.ready {
	opacity: 1;
	max-height: 600px;
	transition: opacity 200ms linear 200ms, max-height 200ms ease-in;
}
</style>
