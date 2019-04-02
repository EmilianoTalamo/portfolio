<template>
	<div id="overlay">
		<div class="lds-css">
			<div style="width:100%;height:100%;" class="lds-facebook">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "LoadingOverlay"
};
</script>

<style lang="scss" scoped>
@import "../style/_config.scss";

div#overlay {
	@include fullScreen;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
}

@keyframes lds-facebook_1 {
	0% {
		top: 20px;
		height: 160px;
	}
	50% {
		top: 60px;
		height: 80px;
	}
	100% {
		top: 60px;
		height: 80px;
	}
}

@keyframes lds-facebook_2 {
	0% {
		top: 30px;
		height: 140px;
	}
	50% {
		top: 60px;
		height: 80px;
	}
	100% {
		top: 60px;
		height: 80px;
	}
}

@keyframes lds-facebook_3 {
	0% {
		top: 40px;
		height: 120px;
	}
	50% {
		top: 60px;
		height: 80px;
	}
	100% {
		top: 60px;
		height: 80px;
	}
}

.lds-css {
	z-index: 9999;
}

.lds-facebook div {
	position: absolute;
	width: 20px;
}
.lds-facebook div:nth-child(1) {
	left: 0;
	background: #9c27b0;
	-webkit-animation: lds-facebook_1 3s cubic-bezier(0, 0.5, 0.5, 1) infinite;
	animation: lds-facebook_1 3s cubic-bezier(0, 0.5, 0.5, 1) infinite;
	-webkit-animation-delay: -0.6s;
	animation-delay: -0.6s;
}
.lds-facebook div:nth-child(2) {
	left: 40px;
	background: #9c27b0;
	-webkit-animation: lds-facebook_2 3s cubic-bezier(0, 0.5, 0.5, 1) infinite;
	animation: lds-facebook_2 3s cubic-bezier(0, 0.5, 0.5, 1) infinite;
	-webkit-animation-delay: -0.3s;
	animation-delay: -0.3s;
}
.lds-facebook div:nth-child(3) {
	left: 80px;
	background: #9c27b0;
	-webkit-animation: lds-facebook_3 3s cubic-bezier(0, 0.5, 0.5, 1) infinite;
	animation: lds-facebook_3 3s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook {
	position: relative;
	opacity: 1;
	width: 100px !important;
	height: 100px !important;
	transform: translate(-100px, -150px) scale(1) translate(100px, 100px);
	transition: opacity 300ms linear;
}
</style>
