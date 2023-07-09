<template>
	<span class="p-float-label">
		<InputText
			v-model="modelValue"
			:id="fieldName"
			:class="{ 'p-invalid': hasError }"
			class="un-w-full sm:un-w-68 un-p-4 un-border-none un-rd-2"
		/>
		<label :for="fieldName">{{ placeholder }}</label>
	</span>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';

interface TextInput {
	placeholder?: string
	fieldName: string
	hasError?: boolean
}

defineProps<TextInput>();

const modelValue = defineModel();
</script>

<style lang="scss">
.p-float-label input:focus~label,
.p-float-label input.p-filled~label,
.p-float-label textarea:focus~label,
.p-float-label textarea.p-filled~label,
.p-float-label .p-inputwrapper-focus~label,
.p-float-label .p-inputwrapper-filled~label {
	color: white;
}
</style>
