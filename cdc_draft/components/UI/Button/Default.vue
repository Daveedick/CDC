<template>
	<div class="button-default">
		<NuxtLink
			:class="`cursor-pointer un-decoration-none flex un-justify-center align-items-center cdc-gradient purple to-green text-white un-rd-2 un-transition-all ${optionalClass}`"
			:style="`padding: ${py! / 4}rem ${px! / 4}rem`"
		>
			<span class="un-font-bold ">{{ label }}</span>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
interface ButtonDefaultProps {
	optionalClass?: string
	label: string
	px?: number
	py?: number
}

defineProps<ButtonDefaultProps>()
</script>
