<template>
	<!-- Avoid rendering the window if the URL parameter is incorrect -->
	<article v-if="currentProject">
		<!-- Close button -->
			<router-link :to="{ path: '/' }" id="close">×</router-link>
		<div id="content">
			<!-- Project title -->
			<h1>{{ currentProject.title }}</h1>
			<!-- Technologies list -->
			<ul id="tech">
				<li v-for="item in currentProject.tech" :key="item.tech">{{ item }}</li>
			</ul>
			<!-- Info -->
			<div id="info">
				<p v-for="(paragraph, index) in formattedInfo" :key="index">{{paragraph}}</p>
			</div>
			<ProjectLinks :code="currentProject.code" :view="currentProject.view"></ProjectLinks>
			<!-- Gallery component -->
			<transition name="galleryAnim">
				<GalleryThumbnails :currentProject="currentProject" v-if="currentProject.ssqt > 0"></GalleryThumbnails>
			</transition>
		</div>
	</article>
</template>

<script>
import GalleryThumbnails from "../components/GalleryThumbnails"
import ProjectLinks from "../components/ProjectLinks"

export default {
	name: "ProjectView",
	components: { GalleryThumbnails, ProjectLinks },
	props: ["currentProject"],
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