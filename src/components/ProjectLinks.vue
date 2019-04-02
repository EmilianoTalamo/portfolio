<template>
	<div id="links">
		<a v-if="code" :href="code" target="_blank" class="btn code">
			<fa icon="code"></fa>
			Code</a>
		<a v-if="view" :href="view" target="_blank" class="btn view">
				<fa icon="external-link-alt"></fa>
			View</a>
	</div>
</template>

<script>
export default {
	name: 'ProjectLinks',
	props: ['code', 'view']
}
</script>

<style lang="scss" scoped>
@import '../style/projectLinks.scss'
</style>
