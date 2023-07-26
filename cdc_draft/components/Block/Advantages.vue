<template>
	<Block ref="blockRef">
		<template #content>
			<Title :data="store.data.heading" />

			<div class="advantages">
				<!-- DESKTOP -->
				<div
					v-if="!m"
					class="advantages__container desktop"
				>
					<!-- CARDS DESKTOP -->
					<div class="flex un-h-143 un-gap-8">
						<!-- 1 -->
						<div
							v-for="i in store.data.rows"
							class="advantages__column un-grid un-gap-8"
							:style="{ gridTemplateRows: i.fraction }"
						>
							<div
								v-for="y in i.cards"
								:class="`advantages__card un-p-8 ${y.backgroundColor} un-rd-4 un-hover-scale`"
							>
								<div :class="`un-text-${y.textColor} un-text-6 un-lh-8 un-fw-bold un-mb-2`">{{ y.title }}</div>
								<div :class="`un-text-${y.textColor}`">{{ y.description }}</div>
								<div
									v-if="y.image"
									:class="`advantages__image advantages__image-${y.imgID}`"
								>
									<img
										:src="y.image"
										:alt="y.title"
									>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- MOBILE -->
				<div
					v-if="m"
					class="advantages__container mobile"
				>
					<Carousel
						:value="store.data.cards"
						:showNavigators="false"
						:numVisible="2"
						:numScroll="1"
						:responsiveOptions="responsiveOptions"
						class="un-mb-8"
					>
						<template #item="i">
							<div class="advantages__card relative un-max-w-90 un-h-88 un-ma un-mx-2 un-p-8 cdc-gradient purple un-rd-4">
								<div class="un-text-white un-text-6 un-lh-8 un-fw-bold un-mb-2">{{ i.data.title }}</div>
								<div class="un-text-white">{{ i.data.description }}</div>
								<div class="advantages__image">
									<img
										:src="i.data.image"
										:alt="i.data.title"
									>
								</div>
							</div>
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
import { useAdvantagesStore } from '~/store/advantages';

import { useMediaQuery } from '@vueuse/core';

const isDesktop = useMediaQuery( '(min-width: 1250px)' );
const m = ref();

watchEffect( () => isDesktop.value ? m.value = false : m.value = true );

const store = useAdvantagesStore();

const blockRef = ref( null );

defineExpose( { blockRef } );

const responsiveOptions = ref( [
	{
		breakpoint: '880px',
		numVisible: 1,
		numScroll: 1
	},
] );
</script>

<style lang="scss">
.advantages {
	--indicator-size: 8px;
	--button-size: 3rem;
	--button-position: -17.5rem;

	&__container {

		&.desktop {

			.advantages {

				&__card {
					position: relative;
					overflow: hidden;
				}

				&__image {
					position: absolute;
					right: 0;
					bottom: 0;

					&-1 {
						width: 80%;
						height: 365px;
					}

					&-3 {
						right: 5%;
						width: 90%;
						height: 132px;
					}

				}
			}

			// .p-carousel {

			//   .p-carousel-next,
			//   .p-carousel-prev {
			//     top: unset;
			//     bottom: var(--button-position);
			//     width: var(--button-size);
			//     height: var(--button-size);
			//     border-radius: 100%;
			//   }

			//   .p-carousel-indicators {

			//     .p-carousel-indicator {
			//       button {
			//         background-color: white;
			//       }

			//       &.p-highlight button {
			//         width: calc(var(--indicator-size) * 2);
			//         height: calc(var(--indicator-size) * 2);
			//         border: 1px solid white;
			//       }
			//     }
			//   }
			// }
		}

		&.mobile {
			.p-carousel {

				.p-carousel-indicators {
					bottom: -3rem;
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
					padding: 0;

					.p-carousel-indicator {
						button {
							background-color: white;
						}

						&.p-highlight button {
							width: calc(var(--indicator-size) * 1.5);
							height: calc(var(--indicator-size) * 1.5);
							border: 1px solid #9D75F3;
						}
					}
				}

				&-item {
					display: flex;
					justify-content: center;
				}
			}

			.advantages {

				&__card {
					overflow: hidden;
				}

				&__image {
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					max-height: 160px;
					display: flex;
					align-items: flex-end;
					overflow: hidden;

					img {
						object-fit: contain;
					}
				}
			}
		}
	}
}
</style>
