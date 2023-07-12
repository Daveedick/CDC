<template>
	<nav
		class="flex list-none un-rd-2 un-p-2 un-bg-white un-backdrop-filter"
		style="--un-bg-opacity: .05; --un-backdrop-blur: blur(.5rem);"
	>

		<!-- <Menubar
			v-if="m"
			:model="menubarItems"
			class="un-mr-2"
		>
			<template #submenuicon>
				<i class="i-mdi:menu un-mr-2"></i>
			</template>
		</Menubar> -->

		<div
			v-if="!m"
			v-for="(  i, index  ) in   store.data.nav.links  "
			:key="index"
			class="mr-2"
		>
			<NuxtLink
				v-ripple
				class="cursor-pointer un-px-4 un-py-3 flex align-items-center hover:un-bg-white text-white un-rd-2 un-transition-colors p-ripple"
				style="--un-bg-opacity: .1;"
				:class="anchor === index && 'un-bg-white'"
				@click="anchor = index"
			>
				<span class="font-medium">{{ i }}</span>
			</NuxtLink>
		</div>

		<ButtonDefault
			:label="buttonLabel"
			:py="py"
			:px="px"
		/>
	</nav>
</template>

<script setup lang="ts">
import ButtonDefault from '@/components/UI/Button/Default.vue';
import useMediaQueries from '@/composables/useMediaQueries';
import { useHeaderStore } from '~/store/header';

const { m } = useMediaQueries();
const store = useHeaderStore();
const menubarItems = store.data.menubar;

const anchor = ref();

const buttonLabel = computed( () => {
	return m.value
		? store.data.nav.button.mobile
		: store.data.nav.button.desktop;
} );

const py = computed( () => ( m.value ? 2.5 : 3 ) ),
	px = computed( () => ( m.value ? 3 : 4 ) );
</script>

<style lang="scss">
.p {
	&-menubar {
		padding: 0;
	}

	&-menuitem {
		&-link {
			padding: 10px 12px;
		}

		&-text {
			order: 2;
		}
	}
}
</style>
