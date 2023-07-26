<template>
	<div class="header un-max-w-95 sm:un-max-w-192 lg:un-max-w-360 un-ma">
		<div
			class="header__container flex un-justify-between un-items-center un-max-w-320 un-ma un-relative un-mt-2 lg:un-mt-8 un-mb-8 lg:un-mb-40 un-mx-4 lg:un-mx-20"
		>
			<!-- LOGO -->
			<img
				:src="store.data.logo.imgURL"
				:alt="store.data.logo.imgURL"
				class="un-w-23 un-h-6 md:un-w-32.5 md:un-h-16 un-mr-2"
			>

			<div class="navigation">
				<Nav />
			</div>

		</div>
	</div>
</template>

<script setup lang="ts">
import useMediaQueries from '@/composables/useMediaQueries';
import Nav from '~/components/App/Nav.vue';
import { useHeaderStore } from '~/store/header';

const { m } = useMediaQueries();

const store = useHeaderStore();
</script>
