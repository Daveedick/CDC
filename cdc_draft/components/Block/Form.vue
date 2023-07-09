<template>
	<Block ref="blockRef">
		<template #content>
			<Title
				:data="store.data.heading"
				:title="headingComputed"
				class=""
			/>

			<form
				class="form-contact lg:un-mt--15 flex un-flex-col sm:un-flex-row sm:un-flex-wrap un-gap-6 sm:un-gap-4 un-justify-center un-items-center"
			>
				<!-- <TextInput
					v-for="i in store.data.inputs"
					:fieldName="i.fieldName"
					:placeholder="i.placeholder"
				/> -->
				<TextInput
					fieldName="name"
					placeholder="Имя"
					v-model="name"
				/>
				<TextInput
					fieldName="phone"
					placeholder="Телефон"
					v-model="phone"
				/>
				<ButtonDefault
					label="Отправить"
					:py="4"
					:px="23"
					@click="handleSubmit"
				/>
			</form>
		</template>
	</Block>
</template>

<script setup lang="ts">
import ButtonDefault from '@/components/UI/Button/Default.vue';
import TextInput from '@/components/UI/Input/TextInput.vue';
import Title from '@/components/UI/Title/Default.vue';
import useMediaQueries from '@/composables/useMediaQueries';
import { useFormStore } from '~/store/form';

const { m } = useMediaQueries();
const store = useFormStore();

const blockRef = ref( null );

defineExpose( { blockRef } );

const headingComputed = computed( () => {
	return m.value
		? store.data.heading.title.mobile
		: store.data.heading.title.desktop;
} );

const name = ref( '' ),
	phone = ref( '' );

const handleSubmit = () => {
	const inputValues = {
		name: name.value,
		phone: phone.value,
	};
	console.log( inputValues );
};
</script>

<style lang="scss" scoped>
.form-contact {
	@media screen and (max-width: 639px) {
		&>* {
			width: 100%;
		}
	}
}
</style>
