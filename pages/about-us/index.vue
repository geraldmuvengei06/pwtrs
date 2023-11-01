<script setup>
let { key_factors, contacts, page_content } = contentStore();

let title = "About Us";

let content = page_content[title];

useSeoMeta({
  title: content.metaTitle,
  ogTitle: content.metaTitle,
  description: content?.metaDescription,
  ogDescription: content?.metaDescription,
  ogImage: "/img/Conversation-pana.png",
  twitterCard: "/img/Conversation-pana.png",
});
</script>

<template>
  <div v-once class="bg-gradient-to-tr from-[#F2F8FC] to-[#FEF6F4]">
    <div class="container mx-auto py-8">
      <div class="hero rounded-xl min-h-min relative">
        <UiBgShade />
        <div class="hero-content flex-col sm:flex-row-reverse">
          <NuxtImg alt="About Us" id="nuxt-img" src="/img/Conversation-pana.png"
            class="md:flex max-w-xs sm:max-w-sm md:max-w-md w-48 sm:w-2/5" />

          <div class="sm:z-10">
            <h1 class="text-3xl sm:text-5xl font-bold">
              <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">About Us</span>
            </h1>
            <p class="pt-6 text-lg sm:max-w-xs lg:max-w-max">
              {{ content?.subtitle }}
            </p>

            <ul class="w-full text-lg hover:bg-transparent py-4">
              <li v-for="(factor, i) in key_factors" :key="i + 'f'" class="hover:bg-transparent">
                <span class="px-0"><i class="pi pi-check text-xl mr-2 text-primary"></i>{{ factor.item }}</span>
              </li>
            </ul>

            <UiProtection class="hidden sm:inline" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <SectionStats />
  <SectionExperts />
  <div class="container max-w-5xl mx-auto bg-primary rounded-2xl">
    <UiCalculator />
  </div>
  <div v-once class="container mx-auto max-w-4xl py-12 px-4">
    <article
      class="prose prose-slate max-w-3xl mx-auto prose-h1:text-2xl sm:prose-h1:text-3xl prose-h2:text-xl sm:prose-h2:text-2xl prose-h3:text-lg sm:prose-h3:text-xl bg-white shadow-lg ring-1 ring-gray-900/5 p-4 sm:p-6 rounded-lg">
      <section>
        <h2>
          {{ content?.title }}
        </h2>
        <h5>{{ content?.subtitle }}</h5>
        <p>
          {{ content?.description }}
        </p>
      </section>

      <section>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide high-quality academic writing services that
          empower students to excel in their educational journey. We understand
          the challenges you face and are here to support your success.
        </p>
      </section>

      <section>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Expert Writers:</strong> Our team comprises experienced
            academic writers who are well-versed in various subjects. They
            deliver well-researched, custom essays tailored to your specific
            requirements.
          </li>
          <li>
            <strong>Plagiarism-Free Guarantee:</strong> We take academic
            integrity seriously. Every essay we provide is thoroughly checked
            for plagiarism to ensure originality and adherence to academic
            standards.
          </li>
          <li>
            <strong>On-Time Delivery:</strong> We understand the importance of
            meeting deadlines. You can count on us to deliver your papers on
            time, no matter how tight the schedule.
          </li>
          <li>
            <strong>24/7 Customer Support:</strong> Our dedicated customer
            support team is available around the clock to address your inquiries
            and concerns. Feel free to contact us anytime you need assistance.
          </li>
        </ul>
      </section>

      <section>
        <h2>Our Commitment to Quality</h2>
        <p>
          We are committed to delivering top-quality essays that meet your
          academic needs and expectations. Our dedication to excellence has
          earned us the trust of thousands of students.
        </p>
      </section>

      <section>
        <h2>Your Academic Success, Our Priority</h2>
        <p>
          At Nursingessayonline.com, your academic success is our top priority. We're
          here to help you excel in your studies and reach your educational
          goals.
        </p>
      </section>

      <section>
        <p>Ready to get started or have questions? Contact us!</p>

        <UiContact />
      </section>
    </article>
  </div>
  <SectionFreeFeatures />
  <SectionUnique />
  <SectionHowItWorksCards />
  <SectionCTAMale />
</template>
