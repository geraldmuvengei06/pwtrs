<script setup>
const contacts = {
    whatsapp: '1-893-233-2333',
    mail: 'support@test.com'
}
</script>

<template>
    <div>
        <h2 class="text-2xl sm:text-4xl ">Ask an Agent</h2>
        <p>Want to contact us directly? No problem. We are always here for you.</p>
        <div class="avatar-group -space-x-6">
            <div class="avatar">
                <div class="w-12 sm:w-16">
                    <img src="/img/writer.png" />
                </div>
            </div>
            <div class="avatar">
                <div class="w-12 sm:w-16">
                    <img src="/img/writer.png" />
                </div>
            </div>
            <div class="avatar">
                <div class="w-12 sm:w-16">
                    <img src="/img/writer.png" />
                </div>
            </div>
            <div class="avatar">
                <div class="w-12 sm:w-16">
                    <img src="/img/writer.png" />
                </div>
            </div>
        </div>
        <p class="flex items-center gap-4 my-2"><span class="pi text-2xl pi-whatsapp text-green-500"></span>{{
            contacts.whatsapp }} </p>
        <p class="flex items-center gap-4 my-2"><span class="pi text-2xl pi-envelope text-red-500"></span>{{ contacts.mail
        }} </p>

        <button class="btn btn-primary bg-green-500 text-white px-16 my-8"><span
                class="pi text-2xl pi-whatsapp text-white"></span> WhatsApp Chat</button>
</div></template>