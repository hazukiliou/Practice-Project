<template>
	<div class="CarouselsImage">
		<div
			class="transform"
			:style="{ transform: `translateX(-${index * 100}%)` }"
			:class="{ move: show }"
		>
			<div
				class="carousel"
				:class="[`class${item}`, className(i)]"
				v-for="(item, i) in list"
				:key="i"
				:style="{ transform: `translateX(${i * 100}%)` }"
			>
				{{ `Carousel${item}` }}
			</div>
		</div>
		<div class="arrow-next" @click="next"></div>
		<div class="arrow-prev" @click="prev"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			index: 0,
			carouselList: ['1', '2', '3'],
			show: false
		}
	},
	computed: {
		list() {
			return [
				this.carouselList[this.carouselList.length - 1],
				...this.carouselList,
				this.carouselList[0]
			]
		}
	},
	methods: {
		className(index) {
			let newClass = ''

			if (this.index === index) newClass = 'active'

			if (
				this.index + 1 === index ||
				(this.index === this.list.length - 1 && index === 0)
			)
				newClass = 'next'
			if (
				this.index - 1 === index ||
				(this.index === 0 && index === this.list.length - 1)
			)
				newClass = 'prev'

			return newClass
		},
		next() {
			this.index =
				this.index === this.list.length - 1 ? 0 : this.index + 1

			if (this.index === 0) {
				this.index++
				this.show = true

				setTimeout(() => {
					this.show = false
					this.index++
				}, 1)
			}
		},
		prev() {
			this.index =
				this.index === 0 ? this.list.length - 1 : this.index - 1

			if (this.index === this.list.length - 1) {
				this.index--
				this.show = true

				setTimeout(() => {
					this.show = false
					this.index--
				}, 1)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.CarouselsImage {
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 400px;
	margin: auto;
	font-size: 24px;
	color: #fff;

	.transform {
		height: 100%;
		transition: transform 500ms ease-in-out;

		&.move {
			transition: transform 0s;
		}
	}

	.carousel {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: -1;
		// opacity: 0;
		// transition: transform 500ms ease-in-out;

		&.active {
			opacity: 1;
			z-index: 1;
			transform: translateX(0%);
		}

		&.next {
			// opacity: 0;
			z-index: 0;
			transform: translateX(100%);
			transition: opacity 0ms 500ms, transform 500ms ease-in-out;
		}

		&.prev {
			// opacity: 0;
			z-index: 0;
			transform: translateX(-100%);
			transition: opacity 0ms 500ms, transform 500ms ease-in-out;
		}
	}

	.arrow-next,
	.arrow-prev {
		position: absolute;
		width: 50px;
		height: 100px;
		background: rgba($color: #000000, $alpha: 0.5);
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
		z-index: 5;

		&.arrow-next {
			right: 0;
		}
	}

	.class1 {
		background: #843101;
	}

	.class2 {
		background: #ccc;
	}

	.class3 {
		background: #aaa;
	}

	.class4 {
		background: #2c3e50;
	}
}
</style>