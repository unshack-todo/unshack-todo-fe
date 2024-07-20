<template>
    <view class="tab">
        <view
			:class="['tab-item',tab.key === activeTab ? 'active' :''] "
			v-for="tab in tabs"
			:key="tab.key"
			@click="handleClick($event,tab)"
		>{{tab.name}}</view>
    </view>
</template>

<script setup lang="ts">
import { defineProps,defineEmits } from 'vue';

const emit = defineEmits(['tabClick']);

interface TodoItem {
    key:string
    name:string
}

const props = defineProps<{
	tabs:TodoItem[]
}>();

const activeTab = defineModel()

const handleClick = (event,tab) =>{
	emit('tabClick',tab,event);
}
</script>

<style scoped>

</style>