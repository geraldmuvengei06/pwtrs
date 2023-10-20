<script setup>
let { key_factors } = contentStore()

</script>

<template>
    <div class="bg-gradient-to-tr from-[#F2F8FC] to-[#FEF6F4]">
        <div class="container mx-auto py-8">
            <div class="hero rounded-xl min-h-min ">
                <div class="hero-content flex-col sm:flex-row-reverse">

                    <img src="/img/about-us-page-animate.svg" class="md:flex sm:max-w-sm md:max-w-md" />


                    <div class="sm:z-10">
                        <h1 class="text-3xl sm:text-5xl font-bold "><span
                                class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">About
                                Us</span></h1>
                        <p class="pt-6 text-lg sm:max-w-xs lg:max-w-max">Trust your assignments to an essay writing service
                            with the
                            <b>fastest
                                delivery time</b> and fully original content.
                        </p>

                        <ul class="w-full text-lg hover:bg-transparent py-4">
                            <li v-for="factor, i in key_factors" :key="i + 'f'" class="hover:bg-transparent"><span
                                    class="px-0"><i class="pi pi-check text-xl mr-2 text-primary"></i>{{ factor.item
                                    }}</span>
                            </li>
                        </ul>



                        <UiProtection class="hidden sm:inline" />


                    </div>

                </div>

            </div>
        </div>
    </div>
    
    <SectionExperts />
    <div class="container mx-auto max-w-4xl py-12 px-4">
             <article class="prose prose-slate lg:prose-lg min-w-full">
                  <p>Most of the time, research papers constitute students' final and most demanding requirements. Thus, the
                        majority of students are intimidated when it comes to producing a high-quality paper that can suffice,
                        if not exceed, their teachers' expectations. If you want a well-researched paper with less time and
                        effort required, try proswriters's writing help services today!</p>
                    <h2>Write My Research Paper: Our Experts Will Help</h2>
                    <p>Academic papers involve in-depth analysis and comprehensive discussion of a research topic. Thus, they
                        are commonly given by professors as the final requirement for students in their courses. They use these
                        papers to evaluate their understanding of the course and apply higher-order thinking skills. It can take
                        weeks for an amateur writer to come up with a defendable topic. You also need to<span> </span>consider
                        many factors<span> </span>when you’re deciding.</p>
                    <p>These factors increase the difficulty of research paper writing, especially for novice writers who are
                        yet to develop a niche or field of specialization. Students often feel lost and confused in the middle
                        of creating their academic papers or lab report.</p>
                    <p>Fortunately, our research paper writing service, proswriters, boasts a team of seasoned writers ready to
                        assist everyone from high school students to Ph.D. candidates.</p>
                    <h3>Diverse Expertise Available</h3>
                    <p>Behind our <a href="/research-paper-writing-service/">custom research paper writing service</a> are
                        talented and highly skilled experts who graduated from prestigious universities, including those in the
                        Ivy League. They have extensive knowledge and experience when it comes to academic papers. Besides, all
                        of them have gone through proswriters testing for the best result guarantee. Our authors are ready to share
                        their expertise with you through our platform!</p>
             </article>
        </div>
    <SectionFreeFeatures />
    <SectionUnique />
    <SectionCTAMale />
</template>