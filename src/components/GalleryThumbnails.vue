<template>
	<aside>
		<Flickity class="flickity carousel" ref="flickity" :options="flickityOptions">
			<div class="carousel-cell" v-for="(image, imageIndex) in images"
				:key="imageIndex">
					<img class="carousel-cell-image" :data-flickity-lazyload="image" :alt="currentProject.title" />
				</div>
		</Flickity>

	</aside>
</template>

<script>
// import VueGallery from "vue-gallery";
import Flickity from "vue-flickity"

export default {
	name: "galleryThumbs",
	// components: { gallery: VueGallery },
	components: { Flickity },
	props: ["currentProject"],
	data() {
		return {
			index: null,
			flickityOptions: {
				draggable: true,
				dragThreshold: 10,
				freeScroll: false,
				wrapAround: false,
				autoPlay: 3000,
				fullscreen: false, // not implemented yet
				imagesLoaded: true,
				lazyLoad: true,
				prevNextButtons: true,
				pageDots: true,
				setGallerySize: false,
				percentPosition: true,
				adaptiveHeight: false
			}
		}
	},
	computed: {
		images() {
			let arr = [];
			let ssqt = this.currentProject.ssqt;
			let folder = this.currentProject.folder;
			for (let index = 1; index <= ssqt; index++) {
				arr.push(`./assets/gallery/${folder}/${index}.jpg`);
			}
			return arr;
		}
	}
};
</script>

<style lang="scss">
@import '../style/galleryThumbnails.scss';

</style>


