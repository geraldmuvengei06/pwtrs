export const contentStore = defineStore('content', () => {
    const services = [
        {
            item: 'Online Assignment Help',
            link: 'online-assignment-help',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Assignment Help',
            link: 'assignment-help',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Dissertation Writing Services',
            link: 'dissertation-writing-services',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Capstone Project Writing Services',
            link: 'capstone-project-writing-services',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Best Essay Writing Company',
            link: 'best-essay-writing-company',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Best Online Assignment Help',
            link: 'best-online-assignment-help',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Term Paper Writing Services',
            link: 'term-paper-writing-services',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Report Writing Services',
            link: 'report-writing-services',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Essay Assignments',
            link: 'essay-assignments',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Assignment Writing',
            link: 'assignment-writing',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Case Study Writing Services',
            link: 'case-study-writing-services',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Coursework Writing',
            link: 'coursework-writing',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Research Paper Writing Services',
            link: 'research-paper-writing-services',
            content: '',
            content_type: 'markdown'
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

    const key_factors = [
        {
            item: 'Lighting-fast turnaround time',
            icon: '',
        },
        {
            item: 'Help with any assignment',
            icon: '',
        },
        {
            item: 'Plagiarism-free content',
            icon: '',
        },
        {
            item: 'Writers from the US and Canada',
            icon: '',
        }
    ]


    return { services, menu, key_factors }
})