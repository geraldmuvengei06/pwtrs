import { generateFullUrl } from "~/lib/utils";


export const contentStore = defineStore("content", () => {
    const services = [
        {
            item: "Essay",
            link: "/services/best-essay-writing-service",
            content: "",
            content_type: "markdown",
        },
        {
            item: "Assignment Help",
            link: "/services/online-assignment-help",
            content: "",
            content_type: "markdown",
        },
        {
            item: "Term Paper",
            link: "/services/term-paper-writing-service",
            content: "",
            content_type: "markdown",
        },
        // {
        //     item: 'Capstone Project Writing Services',
        //     link: '/services/capstone-project-writing-services',
        //     content: '',
        //     content_type: 'markdown'
        // },
        // {
        //     item: 'Best Essay Writing Service',
        //     link: '/services/best-essay-writing-service',
        //     content: '',
        //     content_type: 'markdown'
        // },
        // {
        //     item: 'Best Online Assignment Help',
        //     link: '/services/best-online-assignment-help',
        //     content: '',
        //     content_type: 'markdown'
        // },
        // {
        //     item: 'Term Paper Writing Services',
        //     link: '/services/term-paper-writing-services',
        //     content: '',
        //     content_type: 'markdown'
        // },
        // {
        //     item: 'Report Writing Services',
        //     link: '/services/report-writing-services',
        //     content: '',
        //     content_type: 'markdown'
        // },
        // {
        //     item: 'Essay Assignments',
        //     link: '/services/essay-assignments',
        //     content: '',
        //     content_type: 'markdown'
        // },
        // {
        //     item: 'Assignment Writing',
        //     link: '/services/assignment-writing',
        //     content: '',
        //     content_type: 'markdown'
        // },
        // {
        //     item: 'Case Study Writing Services',
        //     link: '/services/case-study-writing-services',
        //     content: '',
        //     content_type: 'markdown'
        // },
        // {
        //     item: 'Coursework Writing',
        //     link: '/services/coursework-writing',
        //     content: '',
        //     content_type: 'markdown'
        // },
        // {
        //     item: 'Research Paper Writing Services',
        //     link: '/services/research-paper-writing-services',
        //     content: '',
        //     content_type: 'markdown'
        // }
    ];

    const menu = [
        {
            name: "Samples",
            link: "/samples",
        },
        {
            name: "How it Works",
            link: "/how-it-works",
        },
        // {
        //     name: 'Services',
        //     items: []
        // },
        {
            name: "Contact Us",
            link: "/contact",
        },
        {
            name: "FAQ",
            link: "/faq",
        },
        {
            name: "About Us",
            link: "/about-us",
        },
    ];

    const key_factors = [
        {
            item: "Lighting-fast turnaround time",
            icon: "",
        },
        {
            item: "Help with any assignment",
            icon: "",
        },
        {
            item: "Plagiarism-free content",
            icon: "",
        },
        {
            item: "Writers from the US and Canada",
            icon: "",
        },
    ];

    const legal = [
        {
            name: "Terms of use",
            link: "/legal/terms-of-use",
        },
        {
            name: "Privacy Policy",
            link: "/legal/privacy-policy",
        },
        {
            name: "Cookie Policy",
            link: "/legal/cookie-policy",
        },
        {
            name: "Refund Policy",
            link: "/legal/refund-policy",
        },
    ];



    const how_it_works = [
        {
            title: 'Step 1: Provide your essay instructions.',
            description: '<ul><li>The more detailed your instructions, the better.</li><li>Include relevant resources, links, and your academic level of English in the Paper Instructions field.</li><li>A further deadline may result in a lower price.</li></ul>',
            icon: "pi pi-file-edit",
            image: "order.png",
        },
        {
            title: 'Step 2: Choose your writer.',
            description: '<ul><li>Browse writers` profiles and reviews.</li><li>Chat with writers to find the best one for your needs.</li> </ul>',
            icon: "pi pi-users",
            image: "process.png",
        },
        {
            title: 'Step 3: Track your project.',
            description: '<ul><li>Manage your orders easily from your desktop or mobile device.</li><li>Receive notifications about your order status, chat messages from your writer, and when the final paper is uploaded.</li><li>Use the account dashboard to check your available funds, view order history, or check current order progress.</li><li>Maintain continuous communication with your writer via chat.</li></ul>',
            icon: "pi pi-pencil",
            image: "download.png",
        },
        {
            title: 'Step 4: Get your perfect paper.',
            description: '<ul><li>Review the final essay or paper and leave feedback for your writer.</li><li>Pay only when you`re 100% satisfied.</li><li>All drafts of your paper are stored in your personal account, therefore, you can download them at your convenience.</li> <li>Once you have received the final document, any complaints or requested revisions can be made within three days.</li><li>Your writer doesn`t get paid until you`re happy with the essay.</li> </ul>',
            icon: "pi pi-wallet",
            image: "download.png",
        }
    ]



    const runtimeConfig = useRuntimeConfig();
    const order_url = runtimeConfig?.public.orderUrl;
    const home_url = runtimeConfig?.public.homeUrl;

    const contacts = {
        whatsapp: runtimeConfig?.public.whatsappNumber,
        mail: runtimeConfig?.public.supportEmail,
    }

    function goTo(path: string, params: object = {}, query: object = {}) {
        let url = generateFullUrl(path, params, query);
        document.location.href = url;
    }

    return { services, menu, key_factors, legal, order_url, home_url, contacts, how_it_works, goTo };
});
