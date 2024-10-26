<template>
    <div>
        <AHeader />

        <main>
            <slot>
                <h1>HELLO WORLD!</h1>
                <h1>HELLO WORLD!</h1>
                <h1>HELLO WORLD!</h1>
            </slot>
        </main>

        <AFooter />
    </div>
</template>

<style>
main {
    padding: 20px;
    margin: 1rem;
    width: 100%;
    text-align: center;
    min-height: 100vh;
}
</style>