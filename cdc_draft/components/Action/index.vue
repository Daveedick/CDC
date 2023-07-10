<template>
	<div class="action un-mt-8 sm:un-mt-16">
		<div class="relative un-w-full un-p-8 sm:un-p-10 cdc-gradient purple un-rd-4">
			<div class="action__content un-text-white">
				<h2 class="un-mb-1 sm:un-mb-2 un-text-6 un-lh-8 md:un-text-12 md:un-lh-14">{{ store.data.title }}</h2>
				<p class="un-mb-8 sm:un-mb-0 un-text-3.5 un-lh-5 md:un-text-4 md:un-lh-6">{{ store.data.subtitle }}</p>
				<NuxtLink
					to="/"
					class="action__button flex un-justify-center un-items-center md:un-text-8 md:un-lh-10"
				>
					<span class="un-font-bold">{{ buttonLabel }}</span>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';
import { useActionStore } from '~/store/action';

const store = useActionStore();

const isTablet = useMediaQuery( '(min-width: 640px)' );
const m = ref();

watchEffect( () => isTablet.value ? m.value = false : m.value = true );

const buttonLabel = computed( () => {
	return m.value
		? store.data.button.mobile
		: store.data.button.desktop;
} );
</script>

<style lang="scss">
.action {
	&__button {
		padding-top: 12px;
		padding-bottom: 12px;
		background: white;
		color: #9D75F3;
		border-radius: 8px;

		&:active,
		&:hover {
			color: white;
			background: var(--bg-gradient-green);
		}
	}

	@media screen and (min-width: 640px) {
		&__content {
			max-width: 85%;
		}

		&__button {
			--size: 80px;
			--border: 1rem;

			box-sizing: border-box;
			position: absolute;
			right: 0;
			bottom: 0;
			width: var(--size);
			height: var(--size);
			color: white;
			background: var(--bg-gradient-green);
			outline: var(--border) solid #191A21;
			border-radius: 100%;

			&:hover {
				background: var(--bg-gradient-purple);
			}

		}

		@media screen and (min-width: 768px) {
			&__content {
				max-width: 80%;
				min-height: 110px;
			}

			&__button {
				--size: 144px;
				--border: 2rem;
			}
		}
	}
}
</style>
