<template>
	<!-- Avoid rendering the window if the URL parameter is incorrect -->
	<article v-if="currentProject" class="Project" data-simplebar>
		<!-- Close button -->
			<router-link :to="{ path: '/' }" id="close">×</router-link>
		<div id="content">
			<!-- Project title -->
			<h1>{{ currentProject.title }}</h1>
			<!-- Technologies list -->
			<ul id="tech">
				<li v-for="item in currentProject.tech" :key="item.tech">{{ item }}</li>
			</ul>
			<!-- Image -->
			<img :src="`${publicPath}assets/gallery/${currentProject.folder}.jpg`" alt="">
			<!-- Info -->
			<div id="info">
				<p v-for="(paragraph, index) in formattedInfo" :key="index">{{paragraph}}</p>
			</div>
			<ProjectLinks :code="currentProject.code" :view="currentProject.view"></ProjectLinks>
			
		</div>
	</article>
</template>

<script>
import ProjectLinks from "../components/ProjectLinks"
import 'simplebar'
import 'simplebar/dist/simplebar.css'

export default {
	name: "ProjectView",
	components: { ProjectLinks },
	props: ["currentProject"],
	data() {
		return { 
			publicPath: process.env.BASE_URL
		}
	},
	computed: {
		// This splits the paragraphs of the info into an array
		formattedInfo() {
			return this.currentProject.info.split("\n");
		}
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