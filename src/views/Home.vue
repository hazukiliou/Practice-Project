<template>
	<div class="home">
		<ul class="practice-list">
			<li v-for="item in practiceList" :key="item.link" @click="$router.push({ name: item.link })">
				<img :src="require(`../assets/image/Practice/${item.image}.jpg`)" />
				<div class="list-content">
					<h2>{{ item.name }}</h2>
					<div class="label">{{ item.label }}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			practiceList: [
				{
					link: 'Other',
					name: 'Star Animation',
					label: 'Canvas',
					image: 'Star Animation'
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.home {
	background-color: #f8f8f8;
	padding-top: 20px;
	min-height: calc(100vh - 80px);
}

.practice-list {
	display: flex;
	flex-flow: wrap;
	justify-content: space-between;
	margin: 0 auto;
	width: 90%;

	li {
		overflow: hidden;
		padding: 0 0 15px;
		width: 30%;
		background-color: #fff;
		border-radius: 3px;
		box-shadow: hsl(0, 0%, 80%) 0 0 16px;
		margin: 0 20px;
		box-sizing: border-box;
		transition: transform ease-in-out 300ms;
		cursor: pointer;

		&:hover {
			transform: translateY(-2%);
		}

		img {
			width: 100%;
		}

		.list-content {
			padding: 10px 10px 0;
			display: flex;
    		justify-content: space-between;
		}

		h2 {
			margin: 0 0 5px;
			font-size: 15px;
		}

		.label {
			position: relative;
			line-height: 25px;
			padding: 0 15px;
			border-radius: 20px;
			width: 50px;
			color: #7367f0;
			border: 1px solid #7367f0;
		}
	}
}

@media (max-width: 768px) {
	.practice-list {
		width: 100%;

		li {
			width: 43%;
		}
	}
}

@media (max-width: 544px) {
	.practice-list {
		width: 100%;

		li {
			width: 90%;
		}
	}
}
</style>