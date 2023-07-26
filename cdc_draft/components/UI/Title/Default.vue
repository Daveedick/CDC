<template>
	<div
		v-if="variant === 'main'"
		class="text-center un-cursor-default"
	>
		<h1 class="text-white font-bold un-text-11 un-lh-14 un-mb-2 lg:un-text-22 lg:un-lh-24 lg:un-mb-4">
			{{ data.title }}
		</h1>
		<p
			class="un-mb-4 lg:un-mb-8 un-text-white"
			style="--un-text-opacity: .75;"
		>{{ data.subtitle }}</p>
		<NuxtLink
			to="/"
			v-ripple
			class="un-w-full un-inline-block sm:un-wa un-mb-8 lg:un-mb-20 un-px-6 un-py-3 lg:un-px-6 lg:un-py-5 text-center text-white font-bold un-decoration-none cdc-gradient purple to-green un-rd-2 cursor-pointer white-space-nowrap un-border-none un-transition-all p-ripple"
		>
			<span>{{ data.button }}</span>
		</NuxtLink>
	</div>

	<div
		v-else
		class="text-center un-cursor-default"
	>
		<h2 class="title-default__title text-white font-bold un-text-11 lg:un-text-12 un-lh-14 un-mb-4">
			<span v-if="title"> {{ title }}</span>
			<span v-else> {{ data.title }}</span>
		</h2>
		<p
			class="title-default__subtitle un-mb-8 lg:un-mb-20 un-text-3.5 lg:un-text-4 un-text-white"
			style="--un-text-opacity: .75;"
		>
			{{ data.subtitle }}</p>
	</div>
</template>

<script setup lang="ts">
interface TitleProps {
	data: any
	title?: string
	variant?: "main" | "secondary"
}

withDefaults( defineProps<TitleProps>(), {
	variant: 'secondary'
} )
</script>
