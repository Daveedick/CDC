<template>
	<InputText
		v-model="modelValue"
		:id="fieldName"
		type="text"
		:class="{ 'p-invalid': hasError }"
		class="un-w-full sm:un-w-68 un-p-4 un-border-none un-rd-2"
		:placeholder="placeholder"
	/>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';

interface TextInput {
	placeholder?: string
	fieldName: string
	hasError?: boolean
	optionalClass?: string
}

defineProps<TextInput>();

const modelValue = defineModel();
</script>
