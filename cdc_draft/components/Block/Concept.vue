<template>
	<Block ref="blockRef">
		<template #content>
			<div
				class="concept"
				:id="store.data.id"
			>
				<Title :data="store.data.heading" />

				<div
					v-if="!m"
					class="concept__container desktop"
				>
					<!-- CARDS -->
					<div class="un-max-w-131 md:un-mr-4">
						<ul class="list-none p-0 m-0 un-h-full flex un-flex-col un-justify-center">
							<li
								v-for="(i, index) in store.data.cards"
								v-ripple
								class="un-cursor-pointer un-p-6 un-transition-all transition-duration-300 p-ripple"
								style="--un-bg-opacity: .1;"
								:class="{ 'bg-white un-text-black un-rd-2': active === index, 'un-text-white hover:un-bg-white un-rd-4': active !== index }"
								@click="active = index"
							>
								<div
									class="un-mb-1 un-fw-semibold un-text-5 un-lh-6"
									:class="{ 'un-text-6 un-lh-8': isDesktopL }"
								>{{ i.title }}</div>
								<div
									class="un-fw-normal un-text-3.5 un-lh-4"
									:class="{ 'un-text-4 un-lh-5': isDesktopL }"
								>{{ i.description }}</div>
							</li>
						</ul>
					</div>

					<Carousel
						:value="store.data.images"
						:showIndicators="true"
						:showNavigators="isDesktopL ?? true"
						v-model:page="active"
					>
						<template #item="i">
							<img
								:src="i.data.imgURL"
								:alt="i.data.imgAlt"
								class="un-h-60 md:un-h-130"
							>
						</template>
						<template #previousicon>
							<i class="i-mdi:arrow-left-circle un-text-12"></i>
						</template>
						<template #nexticon>
							<i class="i-mdi:arrow-right-circle un-text-12"></i>
						</template>
					</Carousel>
				</div>

				<div
					v-if="m"
					class="concept__container mobile"
				>
					<!-- <Carousel
						:value="store.data.images"
						:showIndicators="false"
						:showNavigators="false"
						v-model:page="active"
						class="un-mb-2"
					>
						<template #item="i">
							<img
								:src="i.data.imgURL"
								:alt="i.data.imgAlt"
								class="un-max-h-70"
							>
						</template>
					</Carousel> -->

					<div class="concept__images un-mb-2 relative un-max-w-100 un-h-70 un-ma">
						<div
							v-for="i, index in store.data.cards"
							class="concept__image absolute un-h-full un-w-full flex un-justify-center"
						>
							<img
								:src="i.imgURL"
								:alt="i.imgAlt"
								:class="['un-w-full un-h-full', { 'opacity-0': index !== active }]"
								style="transition: opacity .3s ease-in-out;"
							>
						</div>
					</div>

					<Carousel
						:value="store.data.cards"
						:showNavigators="false"
						v-model:page="active"
						class="flex un-flex-col un-max-w-90 un-ma un-p-4 un-bg-white un-rd-2"
					>
						<template #item="i">
							<div class="un-mb-1 un-text-3.5 un-lh-5 un-fw-bold">{{ i.data.title }}</div>
							<p class="un-mb-2 un-text-3.5 un-lh-5">{{ i.data.description }}</p>
						</template>
					</Carousel>
				</div>

			</div>
		</template>
	</Block>
</template>

<script setup lang="ts">
import Title from '@/components/UI/Title/Default.vue';
import Carousel from 'primevue/carousel';

import { useMediaQuery } from '@vueuse/core';

const isTablet = useMediaQuery( '(min-width: 768px)' );
const isDesktopL = useMediaQuery( '(min-width: 1440px)' );
const m = ref();

watchEffect( () => isTablet.value ? m.value = false : m.value = true );

import { useConceptStore } from '~/store/concept';

const store = useConceptStore();

const blockRef = ref( null );

defineExpose( { blockRef } );

const active = ref( 0 )

</script>

<style lang="scss">
.concept {
	--indicator-size: 8px;

	&__container {

		&.desktop {
			--button-size: 3rem;
			--button-position: -17.5rem;

			display: grid;
			gap: 1rem;
			grid-template-columns: repeat(2, 1fr);

			@media screen and (min-width: 1440px) {
				grid-template-columns: 524fr 740fr;
			}

			.p-carousel {

				.p-carousel-next,
				.p-carousel-prev {
					top: unset;
					bottom: var(--button-position);
					width: var(--button-size);
					height: var(--button-size);
					border-radius: 100%;
				}

				.p-carousel-indicators {

					.p-carousel-indicator {
						button {
							background-color: white;
						}

						&.p-highlight button {
							width: calc(var(--indicator-size) * 2);
							height: calc(var(--indicator-size) * 2);
							border: 1px solid white;
						}
					}
				}
			}
		}

		&.mobile {

			.p-carousel {

				.p-carousel-indicators {
					padding: 0;

					.p-carousel-indicator {
						button {
							background-color: #c4c4c4;
						}

						&.p-highlight button {
							width: calc(var(--indicator-size) * 1.5);
							height: calc(var(--indicator-size) * 1.5);
							border: 1px solid #9D75F3;
						}
					}
				}

				// &-items-content {
				// 	overflow: visible;
				// }

				// &-item {
				// 	opacity: 0;
				// 	transition: opacity .4s ease-in-out;

				// 	&-active {
				// 		opacity: 1;
				// 	}
				// }
			}
		}
	}

}
</style>
