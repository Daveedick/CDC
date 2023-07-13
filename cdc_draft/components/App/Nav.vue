<template>
	<nav class="navigation">
		<div
			v-if="m"
			class="flex un-gap-2"
		>
			<Button
				:label="store.data.nav.title"
				icon="i-mdi:menu"
				class="burger__button un-py-2.5 un-px-3 un-text-black un-lh-6 un-bg-white un-border-none"
				@click="sideBarOpened = true"
			/>
			<ButtonDefault
				:label="buttonLabel"
				:py="py"
				:px="px"
			/>

			<Sidebar
				v-model:visible="sideBarOpened"
				position="right"
				class="burger__menu un-text-white"
			>

				<NuxtLink
					v-for="(i, index) in store.data.nav.links"
					:key="index"
					:to="i.id"
					class="scrollactive-item cursor-pointer un-mb-2 un-px-4 un-py-3 flex align-items-center active:un-bg-white text-white un-rd-2 un-transition-colors"
					style="--un-bg-opacity: .2;"
					:class="anchor === index && 'un-bg-white'"
					@click="anchor = index"
				>
					<span class="font-medium">{{ i.label }}</span>
				</NuxtLink>

				<ButtonDefault
					:label="store.data.nav.button.desktop"
					:py="py"
					:px="px"
				/>
			</Sidebar>
		</div>

		<div
			v-if="!m"
			class="flex un-rd-2 un-p-2 un-bg-black un-backdrop-filter"
			style="--un-bg-opacity: .5; --un-backdrop-blur: blur(.5rem);"
		>
			<NuxtLink
				v-for="( i, index ) in  store.data.nav.links   "
				:key="index"
				:to="i.id"
				class="scrollactive-item cursor-pointer un-mr-2 un-px-4 un-py-3 flex align-items-center hover:un-bg-white text-white un-rd-2 un-transition-colors"
				style="--un-bg-opacity: .1;"
				:class="anchor === index && 'un-bg-white'"
				@click="anchor = index"
			>
				<span class="font-medium">{{ i.label }}</span>
			</NuxtLink>

			<ButtonDefault
				:label="buttonLabel"
				:py="py"
				:px="px"
			/>
		</div>
	</nav>
	<ScrollTop />
</template>

<script setup lang="ts">
import ButtonDefault from '@/components/UI/Button/Default.vue';
import useMediaQueries from '@/composables/useMediaQueries';
import ScrollTop from 'primevue/scrolltop';
import Sidebar from 'primevue/sidebar';
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

const sideBarOpened = ref( false )
</script>

<style lang="scss">
.burger {
	&__button {
		&.p {
			&-button:enabled {

				&:hover,
				&:active {
					background: var(--bg-gradient-purple);
					color: white;
				}
			}
		}
	}

	&__menu {
		&.p-sidebar {
			background: rgb(0 0 0 / 0.05);
			backdrop-filter: blur(.5rem);
		}
	}
}
</style>
