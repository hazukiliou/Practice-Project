<template>
	<div>
		<TheHeader></TheHeader>
		<router-view />
	</div>
</template>

<script>
import TheHeader from '@/components/TheHeader'

export default {
	components: {
		TheHeader
	}
}
</script>

<style lang="scss" scoped>
</style>