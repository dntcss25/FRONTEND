<template>
  <div>
    <AHeader />

    <main>
      <slot>
          <h1>HELLO WORLD!</h1>
      </slot>
    </main>

    <AFooter />
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
