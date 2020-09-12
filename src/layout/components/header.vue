<template>
	<div class="headers">
		<div class="headerCenter">
			header    width * 1200px
			<span>退出</span>
		</div>
		<div class="lower">
			<div class="lowerCenter">
				test
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'headers'
	}
</script>

<style scoped="scoped">
	.headers{
		color: #333;
		text-align: right;
		line-height: 50px;
		width: 100%;
		background: #FFFFFF;
		box-shadow: 0 0 10px 1px rgba(0,0,0,0.1);
	}
	.headers span{
		margin-left: 20px;
		cursor: pointer;
	}
	.headers span:hover{
		color: #42B983;
	}
	.headerCenter,.lowerCenter{
		position: relative;
		left: 0;
		right: 0;
		width: 1200px;
		height: 100%;
		margin: auto;
	}
	.lower{
		background: #F8F8F8;
		height: 30px;
		width: 100%;
		line-height: 30px;
	}
</style>
