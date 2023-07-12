<template>
	<Block ref="blockRef">
		<template #content>
			<Title :data="store.data.heading" />

			<div class="testimonial">

				<div class="testimonial__container">
					<Carousel
						:value="store.data.items"
						:showIndicators="true"
						:showNavigators="m ? false : true"
						v-model:page="active"
						class="flex un-flex-col un-max-w-200 un-ma"
					>
						<template #item="i">
							<div
								class="un-mb-8 md:un-mb-12 un-mx-1 md:un-mx-2 un-p-6 md:un-p-12 un-text-4 un-lh-6 md:un-text-8 md:un-lh-10 un-bg-white un-font-italic un-rd-4 md:un-rd-8"
							>
								<p>{{ i.data.content }}</p>
							</div>
							<div class="testimonial__user un-mb-6 md:un-mb-10 flex flex-column un-items-center un-gap-4 text-white">
								<div class="testimonial__user-avatar">
									<img
										:src="i.data.imgURL"
										:alt="i.data.imgAlt"
									>
								</div>
								<span class="testimonial__username">
									{{ i.data.username }}
								</span>
							</div>
						</template>
						<template #previousicon>
							<i class="i-mdi:arrow-left-circle un-text-12"></i>
						</template>
						<template #nexticon>
							<i class="i-mdi:arrow-right-circle un-text-12"></i>
						</template>
					</Carousel>
				</div>

			</div>
		</template>
	</Block>
</template>

<script setup lang="ts">
import Title from '@/components/UI/Title/Default.vue';
import useMediaQueries from '@/composables/useMediaQueries';
import Carousel from 'primevue/carousel';
import { useTestimonialsStore } from '~/store/testimonials';

const { m } = useMediaQueries();
const store = useTestimonialsStore();

const blockRef = ref( null );

defineExpose( { blockRef } );

const active = ref( 0 )

</script>

<style lang="scss">
.testimonial {
	--indicator-size: 8px;

	&__container {

		.p-carousel {
			position: relative;
			max-width: 800px;
			--button-size: 3rem;
			--button-position: 7rem;

			.p-carousel {

				&-next,
				&-prev {
					position: absolute;
					top: unset;
					bottom: var(--button-position);
					width: var(--button-size);
					height: var(--button-size);
					border-radius: 100%;
					z-index: 100;
				}

				&-next {
					right: 0;
				}

				&-prev {
					left: 0;
				}


				&-indicators {
					padding: 0;

					.p-carousel-indicator {
						display: flex;
						justify-content: center;

						button {
							background-color: white;
						}

						&.p-highlight button {
							width: calc(var(--indicator-size) * 1.5);
							height: calc(var(--indicator-size) * 1.5);
							border: 1px solid #9D75F3;

							@media screen and (min-width: 640px) {
								border-color: white;
								width: calc(var(--indicator-size) * 2);
								height: calc(var(--indicator-size) * 2);
							}
						}
					}
				}
			}
		}
	}

	&__user-avatar {
		--size: 48px;

		width: var(--size);
		height: var(--size);
		border-radius: 100%;
		border: 1px solid white;
		overflow: hidden;

		@media screen and (min-width: 640px) {
			--size: 72px;
		}
	}
}
</style>
