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
			<GalleryThumbnails :currentProject="currentProject" v-if="currentProject.ssqt > 0"></GalleryThumbnails>
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
</style>

<style scoped>
	.image {
		float: left;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		border: 1px solid #ebebeb;
		margin: 5px;
	}
</style> 