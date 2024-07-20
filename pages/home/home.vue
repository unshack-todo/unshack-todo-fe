<template>
	<view class="taskhome">
		<todo-layout>
			<view class="taskhome-top">
				<view class="taskhome-all taskhome-box" @click="handleClick('all')">
					<view class="taskhome-box-right">
						<text class="num">1</text>
						<text>全部事项</text>
					</view>
					<image class="img" src="../../static/image/img1.png" mode="aspectFill" :draggable="false"></image>
				</view>
				<view class="taskhome-done taskhome-box" @click="handleClick('done')">
					<text class="num success-text">1</text>
					<text>已完成</text>
				</view>
			</view>
			<view class="taskhome-content">
				<view class="taskhome-content__progress taskhome-box"  @click="handleClick('progress')">
					<image class="img" src="../../static/image/img3.png" mode="aspectFill" :draggable="false"></image>
					<view>
						<text>进行中</text>
						<text class="num success-text">1</text>
					</view>
				</view>
				<view class="taskhome-content__right">
					<view class="taskhome-content__overdue taskhome-box"  @click="handleClick('overdue')">
						<image class="img" src="../../static/image/img5.png" mode="aspectFill" :draggable="false"></image>
						<view>
							<text>已逾期</text>
							<text class="num error-text">1</text>
						</view>
					</view>
					<view class="taskhome-content__wait taskhome-box"  @click="handleClick('wait')">
						<image class="img" src="../../static/image/img2.png" mode="aspectFill" :draggable="false"></image>
						<view>
							<text>待安排</text>
							<text class="num process-text">1</text>
						</view>
					</view>
				</view>
			</view>
			<uni-icons type="plusempty" size="30"></uni-icons>
		</todo-layout>
	</view>
</template>

<script setup lang="ts">

const handleClick = (status)=>{
	uni.navigateTo({
		url: `/pages/task-list/taskList?status=${status}`,
	})
}
	
</script>

<style lang="scss" scoped>
	::v-deep .uni-icons.uniui-plusempty{
		position:absolute;
		bottom:10px;
		right:10px;
		font-size:80rpx!important;
		display: inline-block;
		padding:5px;
		border-radius: 50%;
		border:3px solid #A5A99E;
		opacity: 0.7;
		color:#A5A99E!important;
	}
	.taskhome{
		&-top{
			margin-bottom:40rpx;
		}
		&-top,&-content{
			display:flex;
			align-items: center;
			.taskhome-box{
				position:relative;
				border-radius:6px;
				padding:20rpx 40rpx 40rpx;
				-webkit-box-shadow:0px 0px 20px 4px rgba(0,0,0,0.06);
				-moz-box-shadow: 0px 0px 20px 4px rgba(0,0,0,0.06);
				box-shadow: 0px 0px 20px 4px rgba(0,0,0,0.06);
				// background: linear-gradient(180deg, rgba(213,25,98, 0.8) 16%, rgba(255, 255, 255, 0.8) 76%);
				background:linear-gradient(180deg, rgba(188,216,252,1) 0%, rgba(255,255,255,0.704000350140056) 60%, rgba(255,255,255,1) 100%);
				font-size:32rpx;
				color:#312C27;
				text-align:center;
				.num{
					display: block;
					font-size:60rpx;
					// font-family:'HarmonyOS Sans Naskh Arabic UI';
					font-weight: bold;
				}
			}
			.taskhome-all{
				display:flex;
				align-items:center;
				justify-content: center;
				flex:4;
				background:#fff;
				margin-right:30rpx;
				text-align:center;
				.img{
					width:120rpx;
					height:120rpx;
					margin-left:20rpx;
				}
			}
			.taskhome-content__right{
				flex:4;
				.img{
					width:100rpx;
					height:100rpx;
				}
			}
			.taskhome-content__progress{
				flex:5;
				height:100%;
				margin-right:30rpx;
				.img{
					width:180rpx;
					height:180rpx;
				}
			}
			.taskhome-content__overdue{
				margin-bottom:20rpx;
			}
		}
		&-content{
			padding-left:10rpx;
			box-sizing:border-box;
			.taskhome-box{
				.num{
					font-size:40rpx;
				}
			}
		}
	}
</style>
