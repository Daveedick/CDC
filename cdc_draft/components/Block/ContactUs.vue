<template>
	<Block ref="blockRef">
		<template #content>

			<div
				class="contact-us"
				:id="store.data.id"
			>
				<div
					v-if="m"
					class="contact-us__container mobile flex flex-column un-gap-8"
				>
					<div class="un-p-4 cdc-gradient purple un-rd-4">
						<div class="un-max-w-200 un-ma flex flex-column un-gap-8">
							<div class="flex flex-column un-gap-1 text-white">
								<h2 class="un-text-6 un-lh-8">{{ store.data.heading.title }}</h2>
								<p>{{ store.data.heading.subtitle }}</p>
							</div>
							<form class="flex flex-column un-gap-4 un-p-4 un-bg-white un-rd-4 text-black">
								<div class="un-text-5 un-lh-6 un-font-bold un-mb-2">
									{{ store.data.form.title }}
								</div>
								<TextInput
									fieldName="name"
									placeholder="Имя"
									class="un-mb-2"
								/>
								<TextInput
									fieldName="phone"
									placeholder="Телефон"
								/>
								<span class="un-text-3.5 un-lh-5">{{ store.data.form.privacyPolicy }}</span>
								<ButtonDefault
									label="Отправить"
									:py="3"
									:px="0"
									@click="handleSubmit"
								/>
							</form>
						</div>
					</div>

					<!-- Logo -->
					<div class="un-w-30 un-h-8 un-ma">
						<img
							:src="store.data.logo.imgURL"
							:alt="store.data.logo.imgAlt"
						>
					</div>

					<!-- Contact info -->
					<div class="flex flex-column un-gap-2 un-items-center">
						<a
							:href="`tel:${extractPhoneNumber( store.data.info.phone )}`"
							class="hover:un-decoration-underline"
						>{{ store.data.info.phone }}</a>
						<a
							:href="`mailto:${store.data.info.email}`"
							class="hover:un-decoration-underline"
						>{{ store.data.info.email }}</a>
					</div>

					<!-- Social links -->
					<div class="un-ma flex un-gap-4">
						<a
							v-for="i in store.data.socialLinks"
							href="/"
							class="un-cursor-pointer un-relative un-hover-scale"
						><img
								:src="i.imgURL"
								:alt="i.imgAlt"
							></a>
					</div>

				</div>

				<!-- Desktop -->
				<div
					v-if="!m"
					class="contact-us__container desktop un-p-20 un-bg-#111212 un-rd-16"
				>

					<div class="un-relative un-mb-16 un-p-16 cdc-gradient purple un-rd-4">

						<!-- Title -->
						<div class="contact-us__title un-mr-8">
							<h2 class="text-white font-bold un-text-12 un-lh-14 un-mb-2">{{ store.data.heading.title }}</h2>
							<p
								class="un-text-white"
								style="--un-text-opacity: .75;"
							>
								{{ store.data.heading.subtitle }}</p>
						</div>

						<!-- Form -->
						<form
							class="contact-us__form un-absolute un-top-20 un-right-10 un-p-8 flex flex-column un-gap-4 un-bg-white un-rd-4"
						>
							<div class="un-text-6 un-lh-10 un-fw-700">{{ store.data.form.title }}</div>
							<TextInput
								fieldName="name"
								placeholder="Имя"
								class="un-mb-2"
							/>
							<TextInput
								fieldName="phone"
								placeholder="Телефон"
							/>
							<div
								class="un-mb-4 un-text-black"
								style="--un-text-opacity: .5;"
							>{{ store.data.form.privacyPolicy }}</div>
							<ButtonDefault
								label="Отправить"
								:py="4"
								:px="23"
								@click="handleSubmit"
							/>
						</form>
					</div>

					<!-- Contact info -->
					<div class="contact-us__info flex un-flex-col un-items-center">
						<a
							:href="`tel:${extractPhoneNumber( store.data.info.phone )}`"
							class="un-mb-2 hover:un-decoration-underline"
						>{{ store.data.info.phone }}</a>
						<a
							:href="`mailto:${store.data.info.email}`"
							class="un-mb-8 hover:un-decoration-underline"
						>{{ store.data.info.email }}</a>

						<!-- Social links -->
						<div class="flex un-gap-4">
							<a
								v-for="i in store.data.socialLinks"
								href="/"
								class="un-cursor-pointer un-relative un-hover-scale"
							><img
									:src="i.imgURL"
									:alt="i.imgAlt"
								></a>
						</div>
						<div class="un-self-start">
							<img
								:src="store.data.logo.imgURL"
								:alt="store.data.logo.imgAlt"
							>
						</div>
					</div>
				</div>
			</div>
		</template>
	</Block>
</template>

<script setup lang="ts">
import ButtonDefault from '@/components/UI/Button/Default.vue';
import TextInput from '@/components/UI/Input/TextInput.vue';
import { useFooterStore } from '@/store/footer';
import { useMediaQuery } from '@vueuse/core';

const store = useFooterStore();

const isDesktop = useMediaQuery( '(min-width: 1320px)' );
const m = ref();

watchEffect( () => isDesktop.value ? m.value = false : m.value = true );

const extractPhoneNumber = computed( () => ( string: string ) => string.replace( /[\s()-]/g, '' ) );

const blockRef = ref( null );

defineExpose( { blockRef } );

// const name = ref( '' ),
// 	phone = ref( '' );

const handleSubmit = () => {
	// const inputValues = {
	// 	name: name.value,
	// 	phone: phone.value,
	// };
	console.log( 'inputValues' );
};
</script>

<style lang="scss">
.contact-us {
	&__container {
		&.desktop {
			--form-width: 21rem;

			.contact-us__title {
				max-width: calc(100% - var(--form-width));
			}

			.contact-us__form {
				max-width: var(--form-width);
			}
		}

		&.mobile {}
	}

	.p-inputtext {
		background: rgb(0 0 0 / .05);
		width: 100%;
	}

	.p-float-label input:focus~label,
	.p-float-label input.p-filled~label,
	.p-float-label textarea:focus~label,
	.p-float-label textarea.p-filled~label,
	.p-float-label .p-inputwrapper-focus~label,
	.p-float-label .p-inputwrapper-filled~label {
		color: black;
	}
}
</style>
