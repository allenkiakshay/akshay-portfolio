import Fotter from "@/components/constants/fotter";
import Navbar from "@/components/constants/navbar";

export const metadata = {
  title: "Terms of Service | Desi System Design",
  description:
    "Terms for the Desi System Design Instagram comment helper.",
};

const sections = [
  {
    heading: "What the service is",
    body: "The Desi System Design comment helper is run by Allenki Akshay for the Instagram account @desisystemdesign. When you comment on one of its reels, it replies to your comment and sends you a direct message with the link mentioned in that reel. It is free to use.",
  },
  {
    heading: "Using it",
    body: "By commenting on a @desisystemdesign reel or replying to its direct messages, you agree to these terms and to receiving those replies and messages. You must follow Instagram's own terms while doing so. Do not use the service to send spam, abuse or anything unlawful.",
  },
  {
    heading: "Job posts and links",
    body: "Links go to the employer's official careers site. Desi System Design is not affiliated with those employers and does not act as a recruiter or agent. We never charge money and never ask for your documents or passwords. Details are taken from the official posting at the time of the reel; roles can change or close, so check the official site before you apply. We cannot promise an interview or a job.",
  },
  {
    heading: "Content",
    body: "Reels and explanations are simplified for learning. They are general information, not professional advice, and they do not describe any company's actual internal systems unless stated.",
  },
  {
    heading: "Availability",
    body: "The service is provided as it is. Messages may be delayed or may not arrive, and the service can be changed, paused or stopped at any time without notice.",
  },
  {
    heading: "Liability",
    body: "To the extent the law allows, we are not responsible for losses that result from using the service, from relying on a reel or message, or from third-party sites that we link to.",
  },
  {
    heading: "Stopping",
    body: "You can stop at any time by not replying, or by blocking @desisystemdesign on Instagram. We may stop replying to accounts that misuse the service.",
  },
  {
    heading: "Changes and law",
    body: "If these terms change, the new version will be published on this page with a new date. These terms are governed by the laws of India.",
  },
];

const linkClass = "text-blue-600 dark:text-blue-400 hover:underline";

const Page = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
          Desi System Design comment helper. Effective 11 November 2026.
        </p>

        {sections.map((s) => (
          <section key={s.heading} className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {s.heading}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {s.body}
            </p>
          </section>
        ))}

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Your data and contact
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            How your data is handled is set out in the{" "}
            <a href="/privacy" className={linkClass}>
              privacy policy
            </a>
            , and you can have it removed through{" "}
            <a href="/data-deletion" className={linkClass}>
              data deletion
            </a>
            . Questions:{" "}
            <a
              href="mailto:allenkiakshay8322@gmail.com"
              className={`${linkClass} break-all`}
            >
              allenkiakshay8322@gmail.com
            </a>
            .
          </p>
        </section>
      </main>
      <Fotter />
    </>
  );
};

export default Page;
