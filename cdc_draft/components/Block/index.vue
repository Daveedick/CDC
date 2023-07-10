<template>
	<section
		ref="instanceRef"
		:class="margin === 'l' ? 'un-max-w-360 un-mb-8 lg:un-mb-40 un-ma' : 'un-max-w-360 un-mb-8 lg:un-mb-20 un-ma'"
		:layer="layer"
	>
		<div
			:class="layer === 'base' ? 'un-mt-8 un-mx-4 lg:un-mx-20' : 'un-p-4 un-pb-8 lg:un-p-16 un-bg-#191A21 un-rd-4 md:un-rd-16'"
		>
			<div class="un-relative un-max-w-95 sm:un-max-w-192 lg:un-max-w-360 un-ma">
				<slot name="content" />
			</div>
		</div>

	</section>
</template>

<script setup lang="ts">
const instanceRef = ref( null );

defineExpose( { instanceRef } );

interface BlockProps {
	layer?: 'top' | 'base'
	margin?: 'l' | 'sm'
}

withDefaults( defineProps<BlockProps>(), {
	layer: 'base',
	margin: 'l'
} );
</script>
