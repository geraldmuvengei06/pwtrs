export const contentStore = defineStore('content', () => {
    const services = [
        {
            item: 'Online Nursing Assignment Help',
            link: ''
        },
        {
            item: 'Nursing Assignment Help',
            link: ''
        },
        {
            item: 'Nursing Dissertation Writing Services',
            link: ''
        },
        {
            item: 'Nursing Capstone Project Writing Services',
            link: ''
        },
        {
            item: 'Best Nursing Essay Writing Company',
            link: ''
        },
        {
            item: 'Best Online Nursing Assignment Help',
            link: ''
        },
        {
            item: 'Nursing Term Paper Writing Services',
            link: ''
        },
        {
            item: 'Nursing Report Writing Services',
            link: ''
        },
        {
            item: 'Nursing Essay Assignments',
            link: ''
        },
        {
            item: 'Nursing Assignment Writing',
            link: ''
        },
        {
            item: 'Nursing Case Study Writing Services',
            link: ''
        },
        {
            item: 'Nursing Coursework Writing',
            link: ''
        },
        {
            item: 'Nursing Research Paper Writing Services',
            link: ''
        }
    ];


    const menu = [
        // {
        //     name: 'WhatsApp Chat',
        //     link: 'https://wa.me/',
        //     icon: 'pi pi-whatsapp text-green-500'
        // },
        {
            name: 'FAQ',
            link: '/faq',
        },
        {
            name: 'How it Works',
            link: '/how-it-works',
        },
        {
            name: 'Samples',
            link: '/samples',
        },
        {
            name: 'Contact Us',
            link: '/contact',
        },
        {
            name: 'About Us',
            link: '/about-us',
        }
    ]


    return { services, menu }
})