<template>
	<Block ref="blockRef">
		<template #content>
			<div class="display">

				<!-- Desktop -->
				<div
					v-if="!m"
					class="display__container desktop un-my-10 un-p-10 un-bg-#DADFE5 un-rd-4"
				>

					<!-- Display -->
					<Carousel
						:value="store.data.images"
						:showIndicators="false"
						:showNavigators="false"
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

					<!-- Cards -->
					<ul class="list-none p-0 m-0 flex gap-4">
						<li
							v-for="(i, index) in store.data.cards"
							v-ripple
							class="un-cursor-pointer un-p-6 un-transition-all transition-duration-300 p-ripple"
							style="--un-bg-opacity: .1;"
							:class="{ 'bg-white un-rd-2': active === index, 'hover:un-bg-white un-rd-4': active !== index }"
							@click="active = index"
						>
							<div class="un-mb-1 un-text-6 un-fw-semibold un-lh-8">{{ i.title }}</div>
							<div class="un-fw-normal un-lh-5">{{ i.description }}</div>
						</li>
					</ul>
				</div>

				<!-- Mobile -->
				<div
					v-if="m"
					class="display__container mobile flex un-flex-col un-items-center"
				>
					<!-- Display -->
					<Carousel
						:value="store.data.images"
						:showIndicators="false"
						:showNavigators="false"
						v-model:page="active"
						class="un-mb-2 un-w-full un-h-98 un-justify-center un-bg-#EAEAEC un-rd-2"
					>
						<template #item="i">
							<img
								:src="i.data.imgURL"
								:alt="i.data.imgAlt"
								class="un-h-65"
							>
						</template>
					</Carousel>

					<!-- Cards -->
					<Carousel
						:value="store.data.cards"
						:showNavigators="false"
						v-model:page="active"
						class="flex un-flex-col un-max-full un-ma un-p-4 un-bg-#EAEAEC un-rd-2"
					>
						<template #item="i">
							<div class="un-mb-1 un-text-3.5 un-lh-5 un-fw-bold">{{ i.data.title }}</div>
							<p class="un-mb-4 un-text-3.5 un-lh-5">{{ i.data.description }}</p>
						</template>
					</Carousel>
				</div>

				<Action />
			</div>
		</template>
	</Block>
</template>

<script setup lang="ts">
import Action from '@/components/Action/index.vue';
import { useMediaQuery } from '@vueuse/core';
import Carousel from 'primevue/carousel';
import { useDisplayStore } from '~/store/display';

const store = useDisplayStore();
const active = ref( 0 )

const blockRef = ref( null );

defineExpose( { blockRef } );

const isTablet = useMediaQuery( '(min-width: 768px)' );
const m = ref();

watchEffect( () => isTablet.value ? m.value = false : m.value = true );
</script>

<style lang="scss">
.display {
	--indicator-size: 8px;

	&__container {

		&.desktop {
			--button-size: 3rem;
			--button-position: -17.5rem;

			display: flex;
			flex-direction: column;
			gap: 1rem;

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

			}
		}
	}

}
</style>
