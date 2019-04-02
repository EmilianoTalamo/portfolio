<template>
	<main>
		<ul id="linksContainer">
			<li v-for="item in projects" :key="item.folder">
				<!-- router-link renders into an <a> tag that changes the parameter accordingly to the clicked project, each item has a custom color and an isBright class that makes the text more legible on brighter background. All is set on the data JSON. -->
				<router-link
					:to="{ path: item.folder}"
					:style=" { backgroundColor: item.color }"
					:class="{lightItem :item.isbright}"
				>{{ item.title }}</router-link>
			</li>
		</ul>
	</main>
</template>

<script>
export default {
	name: "Projects",
	props: ["projects"]
};
</script>s

<style lang="scss" scoped>
@import "../style/projects.scss";
</style>
