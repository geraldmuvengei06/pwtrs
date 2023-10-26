export const contentStore = defineStore('content', () => {
    const services = [
        {
            item: 'Online Assignment Help',
            link: '/services/online-assignment-help',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Assignment Help',
            link: '/services/assignment-help',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Dissertation Writing Services',
            link: '/services/dissertation-writing-services',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Capstone Project Writing Services',
            link: '/services/capstone-project-writing-services',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Best Essay Writing Service',
            link: '/services/best-essay-writing-service',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Best Online Assignment Help',
            link: '/services/best-online-assignment-help',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Term Paper Writing Services',
            link: '/services/term-paper-writing-services',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Report Writing Services',
            link: '/services/report-writing-services',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Essay Assignments',
            link: '/services/essay-assignments',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Assignment Writing',
            link: '/services/assignment-writing',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Case Study Writing Services',
            link: '/services/case-study-writing-services',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Coursework Writing',
            link: '/services/coursework-writing',
            content: '',
            content_type: 'markdown'
        },
        {
            item: 'Research Paper Writing Services',
            link: '/services/research-paper-writing-services',
            content: '',
            content_type: 'markdown'
        }
    ];


    const menu = [
        
        {
            name: 'Samples',
            link: '/samples',
        },
        {
            name: 'How it Works',
            link: '/how-it-works',
        },
        {
            name: 'Services',
            items: []
        },
        {
            name: 'Contact Us',
            link: '/contact',
        },
        {
            name: 'FAQ',
            link: '/faq',
        },
        {
            name: 'About Us',
            link: '/about-us',
        },
       
        
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

    const legal = [
        {
            name: 'Terms of use',
            link: '/legal/terms-of-use',
        },
        {
            name: 'Privacy Policy',
            link: '/legal/privacy-policy',
        },
        {
            name: 'Cookie Policy',
            link: '/legal/cookie-policy',
        },
    ]

    return { services, menu, key_factors, legal }
})