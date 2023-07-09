<template>
	<section id="from">
		<TitleSecondary
			:title="text.title.mobile"
			:subtitle="text.subtitle"
			class="un-mb-5"
		/>

		<!-- INPUTS -->
		<form class="flex un-flex-col sm:un-flex-row sm:un-flex-wrap un-gap-4 un-justify-center">
			<TextInput
				v-for="i in store"
				:placeholder=""
			/>
			<input
				type="text"
				name="name"
				id="name"
				placeholder="Имя"
				class="un-w-full sm:un-w-68 un-p-4 un-border-none un-rd-2"
			>
			<input
				type="text"
				name="tel"
				id="tel"
				placeholder="Телефон"
				class="un-w-full sm:un-w-68 un-p-4 un-border-none un-rd-2"
			>
			<Button
				label="Отправить"
				class="un-w-full sm:un-w-68 un-py-4 un-px-23 cdc-gradient purple to-green un-border-none un-rd-2"
			/>
		</form>
	</section>
</template>

<script setup lang="ts">
import TextInput from 'components/UI/Input/TextInput.vue';

</script>
