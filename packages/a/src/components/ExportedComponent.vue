<script lang="ts">
export interface Foo {
    foo: string;
}

export type Bar = {
    bar: string;
};
</script>

<script setup lang="ts">
defineProps<{
    foo: Foo,
    bar: Bar,
}>()
</script>

<template>
    <div>
        Foo: {{ foo.foo }}
        Bar: {{  bar.bar }}
    </div>
</template>
