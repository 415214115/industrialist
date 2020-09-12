<template>
	<el-card class="content">
		<div slot="header" class="clearfix">
		    <span>卡片名称</span>
		    <el-button style="float: right; padding: 3px 0" @click="test" type="text">操作按钮</el-button>
		  </div>
		首页
	</el-card>
</template>

<script>
	// import router from '../../router/index.js'
export default {
	data() {
		return {};
	},
	mounted() {
		
	},
	methods:{
		test(){
			this.$router.push('/test/index/indexall')
		}
	}
};
</script>

<style scoped="scoped">
	
</style>
