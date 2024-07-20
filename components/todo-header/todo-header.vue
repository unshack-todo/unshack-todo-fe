<template>
    <view class="page-header">
        <view class="page-header__top">
			<!-- <uni-icons class="back-icon" type="left" size="30" color="#FD9A74" @click="handleBack"></uni-icons> -->
			<image class="img" src="../../static/image/logo.png" mode="aspectFill" :draggable="false"></image>
			<text>&nbsp;&nbsp;TODO</text>
		</view>
		<view class="page-header__content">
			&nbsp;&nbsp;凡事预则立，不预则废！
		</view>
    </view>
</template>

<script lang="ts" setup>
	// const handleBack = ()=>{
	// 	uni.navigateBack({
	// 		delta: 1
	// 	});
	// }
</script>

<style scoped lang='scss'>
::v-deep .back-icon{
	position: absolute;
	top:10px;
	left:10px;
}
.page-header{
	position: relative;
	width:100%;
	height:22%;
	padding-top:13%;
	text-align: center;
	box-sizing:border-box;
	font-size: 50rpx;
	color:#3F4A4C;
	&__top{
		margin-bottom:40rpx;
		.img{
			width:50rpx;
			height:50rpx;
			vertical-align: middle;
		}
	}
}
</style>