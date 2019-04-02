<template>
	<header>
		<h1>Emit</h1>
		<h2>I'm Emiliano Tálamo, a web developer located in Buenos Aires, Argentina. And this is some of my work 🚀</h2>
		<HeaderLinks></HeaderLinks>
	</header>
</template>

<script>
import HeaderLinks from "./HeaderLinks";
export default {
	name: "Header",
	components: { HeaderLinks }
};
</script>

<style lang="scss" scoped>
@import "../style/header.scss";
</style>
