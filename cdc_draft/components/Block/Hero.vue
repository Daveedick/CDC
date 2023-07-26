<template>
	<Block ref="blockRef">
		<template #content>

			<Title
				variant="main"
				:data="store.data.heading"
			/>

			<VideoPlug />

			<!-- For proper rendering -->
			<div class="hidden">
				<i class="i-mdi:chart-timeline-variant-shimmer"></i>
				<i class="i-mdi:robot-industrial-outline"></i>
				<i class="i-mdi:lightning-bolt-outline"></i>
			</div>

			<div
				v-if="!m"
				class="grid"
			>
				<div
					v-for="i in store.data.cards"
					class="col-12 lg:col-4"
				>
					<div
						class="un-py-2 un-px-4 un-rd-2 un-text-3.5 shadow-2 flex align-items-center un-bg-white un-hover-scale"
						:class="{ 'un-py-8 un-px-11 un-rd-4 un-text-4': isDesktopL }"
						style="--un-bg-opacity: .05;"
					>
						<div
							style="width:48px;height:48px;border-radius:10px"
							class="inline-flex align-items-center justify-content-center un-mr-4"
						>
							<i :class="`${i.icon} un-text-white un-text-12`"></i>
						</div>
						<p class="un-m-0 un-fw-medium un-text-white">{{ i.text }}
						</p>
					</div>
				</div>
			</div>

			<div
				v-if="m"
				class="un-p-4 un-bg-white un-rd-2"
				style="--un-bg-opacity: .05;"
			>
				<div
					v-for="i in store.data.cards"
					class="flex un-items-center un-p-2 un-text-white"
				>
					<i :class="`${i.icon} un-mr-4 un-text-white un-text-10`"></i>
					<p class="un-text-3.5 un-lh-5">{{ i.text }}</p>
				</div>
			</div>
		</template>
	</Block>
</template>

<script setup lang="ts">
import VideoPlug from '@/components/UI/Other/VideoPlug.vue';
import Title from '@/components/UI/Title/Default.vue';
import { useHeroStore } from '@/store/hero';
import { useMediaQuery } from '@vueuse/core';

const isDesktop = useMediaQuery( '(min-width: 1024px)' );
const isDesktopL = useMediaQuery( '(min-width: 1440px)' );
const m = ref();

watchEffect( () => isDesktop.value ? m.value = false : m.value = true );

const store = useHeroStore();

const blockRef = ref( null );

defineExpose( { blockRef } );
</script>
