<template>
	<canvas id="star" ref="star"></canvas>
</template>

<script>
export default {
	data() {
		return {
			canvas: null,
			canvasContext: null,
			width: 0,
			height: 0,
			count: 80,
			starArray: []
		}
	},
	mounted() {
		this.setCanvas()
		this.moreCircle()
	},
	methods: {
		setCanvas() {
			let canvas = this.canvas = this.$refs['star']
			this.canvasContext = canvas.getContext('2d')
			canvas.width = this.width = window.innerWidth
			canvas.height = this.height = window.innerHeight - 70
		},
		drawCircle(x, y, radius) {
			let ctx = this.canvasContext
			ctx.fillStyle = "#FFF" 
			ctx.shadowBlur = 10;
			ctx.beginPath()
			ctx.arc(x, y, radius, 0, 2 * Math.PI)
			ctx.shadowColor = "red";
			ctx.fill()
		},
		moreCircle() {
			for (let i = 0; i < this.count; i++) {
				let star = {
						x: this.width * Math.random(),
						y: this.height * Math.random(),
						radius: 3 * Math.random(),
						opacity: Math.floor(Math.random() * 2),
						maxlength: 3 * Math.random()
					}
				this.starArray.push(star)
			}
			this.drawFrame()
		},
		drawFrame() {
			this.canvasContext.clearRect(0, 0, this.width, this.height)
			for (let i = 0; i < this.starArray.length; i++) {
				let star = this.starArray[i]

				if (star.radius > star.maxlength) star.opacity = -1

				star.radius += Math.random() * 0.03 * star.opacity

				if (star.radius < 0) {
					star.radius = 0
					star.x = this.width * Math.random()
					star.y = this.height * Math.random()
					star.opacity = 1
				}

				this.starArray[i] = star

				this.drawCircle(star.x, star.y, star.radius)
			}
			requestAnimationFrame(this.drawFrame)
		}
	}
}
</script>

<style lang="scss" scoped>
#star {
	background-color: #000;
	width: 100%;
}
</style>