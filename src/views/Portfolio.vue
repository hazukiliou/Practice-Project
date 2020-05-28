<template>
	<div>
		<div class="item-list">
			<div class="item mighty">
				<a href=""
				   class="block-img"
				   data-content="精靈寶可夢M20劇場版">
					<img src="image/mighty/07 pokemon M20/view.jpg"
						 alt="">
				</a>
				<div class="info">
					<div class="title">精靈寶可夢M20劇場版</div>
					<div class="date">2017-09-10</div>

				</div>
				<div class="company">曼迪傳播有限公司</div>
				<a href="http://www.pokemon.com.tw/Movie20/"
				   target="_blank"
				   class="demobtn">Online</a>
			</div>

			<div class="item mighty">
				<a href=""
				   class="block-img"
				   data-content="2017漫畫博覽會官網">
					<img src="image/mighty/06 comic2017/view.jpg"
						 alt="">
				</a>
				<div class="info">
					<div class="title">2017漫畫博覽會官網</div>
					<div class="date">2017-06-20</div>

				</div>
				<div class="company">曼迪傳播有限公司</div>
				<a href="http://www.mightymedia.com.tw/comic/2017/"
				   target="_blank"
				   class="demobtn">Online</a>
			</div>

			<div class="item mighty">
				<a href=""
				   class="block-img"
				   data-content="台灣名偵探柯南官網">
					<img src="image/mighty/05 conan/view.jpg"
						 alt="">
				</a>
				<div class="info">
					<div class="title">台灣名偵探柯南官網</div>
					<div class="date">2017-05-26</div>

				</div>
				<div class="company">曼迪傳播有限公司</div>
				<a href="http://www.mightymedia.com.tw/conan/"
				   target="_blank"
				   class="demobtn">Online</a>
			</div>

			<div class="item mighty">
				<a href=""
				   class="block-img"
				   data-content="麵包超人電子商務">
					<img src="image/mighty/04 anpanman/view.jpg"
						 alt="">
				</a>
				<div class="info">
					<div class="title">麵包超人電子商務</div>
					<div class="date">2017-05-10</div>

				</div>
				<div class="company">曼迪傳播有限公司</div>
				<a href="http://www.mightymedia.com.tw/anpanman/shop/"
				   target="_blank"
				   class="demobtn">Online</a>
			</div>

			<div class="item mighty">
				<a href=""
				   class="block-img"
				   data-content="Petit Fancy 26">
					<img src="image/mighty/03 pf26/view.jpg"
						 alt="">
				</a>
				<div class="info">
					<div class="title">Petit Fancy 26</div>
					<div class="date">2017-04-07</div>

				</div>
				<div class="company">曼迪傳播有限公司</div>
				<a href="http://www.mightymedia.com.tw/event/PF26/"
				   target="_blank"
				   class="demobtn">Online</a>
			</div>

			<div class="item mighty">
				<a href=""
				   class="block-img"
				   data-content="台灣精靈寶可夢官網">
					<img src="image/mighty/02 pokemon/view.jpg"
						 alt="">
				</a>
				<div class="info">
					<div class="title">台灣精靈寶可夢官網</div>
					<div class="date">2017-02-02</div>

				</div>
				<div class="company">曼迪傳播有限公司</div>
				<a href="http://www.pokemon.com.tw/"
				   target="_blank"
				   class="demobtn">Online</a>
			</div>

			<div class="item mighty">
				<a href=""
				   class="block-img"
				   data-content="2017國際動漫節官網">
					<img src="image/mighty/01 tica2017/view.jpg"
						 alt="">
				</a>
				<div class="info">
					<div class="title">2017國際動漫節官網</div>
					<div class="date">2017-12-29</div>

				</div>
				<div class="company">曼迪傳播有限公司</div>
				<a href="http://www.mightymedia.com.tw/tica/2017/"
				   target="_blank"
				   class="demobtn">Online</a>
			</div>

		</div>
	</div>
</template>

<script>
export default {
	components: {
	}
}
</script>

<style lang="scss" scoped>
.item-list {
	display: flex;
	justify-content: space-between;
	width: 89%;
	margin: 0 auto 20px auto;
	padding-top: 50px;
	flex-wrap: wrap;

	.item {
		width: 30%;
		margin: 60px 0 0 0;
		position: relative;

		> .block-img {
			width: 100%;
			height: 100%;

			img {
				-moz-transition: all 0.3s ease;
				-o-transition: all 0.3s ease;
				-webkit-transition: all 0.3s ease;
				transition: all 0.3s ease;
				width: 100%;
			}

			&:hover img {
				-webkit-filter: brightness(0.3);
				filter: brightness(0.3);
			}

			&:hover::after {
				position: absolute;
				content: attr(data-content);
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				height: 100%;
				top: -30px;
				z-index: 2;
				color: #fff;
				text-align: center;
				font-size: 18px;
				font-weight: bold;
			}
		}

		.info {
			margin: 5px auto;
			display: flex;
			justify-content: space-between;

			.title {
				font-size: 15px;
				font-weight: bold;
			}

			.date {
				display: inline-block;
			}
		}

		.company {
			float: left;
			line-height: 35px;
			font-size: 13px;
		}

		.demobtn {
			float: right;
			background-color: #f2f2f2;
			width: 90px;
			height: 30px;
			text-align: center;
			line-height: 30px;
			font-weight: bold;
			font-size: 13px;

			&:hover {
				background-color: #ebb525;
				border: solid #f2f2f2 1px inset;
				color: #fff;
			}
		}
	}
}

@media (max-width: 768px) {
	.item-list {
		margin: 50px auto 0 auto;
		width: 100%;

		.item {
			width: 43%;
			margin: 20px auto;
		}
	}
}

@media (max-width: 544px) {
	.item-list {
		margin: 50px auto 0 auto;
		width: 100%;

		.item {
			width: 90%;
			margin: 20px auto;
		}
	}
}
</style>