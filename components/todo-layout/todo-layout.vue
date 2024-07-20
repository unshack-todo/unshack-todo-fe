<template>
	<view class="page">
		<todo-header></todo-header>
		<view class="page-content">
			<slot></slot>
		</view>
	</view>
</template>

<script setup lang="ts">
	// import { onMounted } from 'vue'
	// // import { onReady } from '@dcloudio/uni-app'
	
	// onMounted(()=>{
	// 	console.log(uni.getSystemInfoSync(),'准备好了')
	// })
</script>
<style lang="scss" scoped>
.page{
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	.page-content{
		height: 70%;
		padding:20px 30px 30px;
		box-sizing: border-box;
		font-family:'HongLei';
	}
}
</style>
