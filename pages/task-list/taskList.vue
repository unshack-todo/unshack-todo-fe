<template>
	<view class="taskhome">
		<todo-layout>
			事项列表 - {{curStatus}}
		</todo-layout>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	
	const curStatus = ref<string>('all')
	
	onLoad((option)=>{
		const { status } = option
		curStatus.value = status
		console.log(status,'当前状态')
	})
	
</script>