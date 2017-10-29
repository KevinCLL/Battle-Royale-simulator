<template lang="pug">
div
  p
    | {{ $t('messages.welcome') }}
  p
    router-link(to='/hello/bourgeon') {{ $t('buttons.hello') }}
</template>

<script>
export default {}
</script>

<style>
</style>
