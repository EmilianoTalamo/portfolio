<template>
	<ul>
		<li v-for="item in links" :key="item.name">
			<a :href="item.href" :title="item.name" :aria-label="item.name">
				<fa :icon="[item.iconFamily,item.iconName]"></fa>
			</a>
		</li>
	</ul>
</template>

<script>
export default {
	name: "HeaderLinks",
	data() {
		return {
			// Links to show. Each icon has a family and name, stipulated by FontAwesome
			links: [
				{
					name: "Resume",
					href: "http://emilianotalamo.github.io/cv",
					iconFamily: "far",
					iconName: "file-alt",
					newtab: false
				},
				{
					name: "GitHub",
					href: "https://github.com/emilianotalamo",
					iconFamily: "fab",
					iconName: "github-alt",
					newtab: true
				},
				{
					name: "LinkedIn",
					href: "http://linkedin.com/in/emilianotalamo/",
					iconFamily: "fab",
					iconName: "linkedin-in",
					newtab: true
				},
				{
					name: "E-Mail",
					href: "mailto:emilianotalamo@gmail.com",
					iconFamily: "far",
					iconName: "envelope",
					newtab: false
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
@import "../style/headerLinks.scss";
</style>

