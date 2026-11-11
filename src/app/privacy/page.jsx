import Fotter from "@/components/constants/fotter";
import Navbar from "@/components/constants/navbar";

export const metadata = {
  title: "Privacy Policy | Desi System Design",
  description:
    "How the Desi System Design Instagram comment helper handles your data.",
};

const sections = [
  {
    heading: "Who this covers",
    body: [
      "This policy covers the comment helper used by the Instagram account @desisystemdesign. The helper is run by Allenki Akshay. It replies to people who comment on that account's reels and sends them the link they asked for by direct message.",
    ],
  },
  {
    heading: "What we collect",
    body: [
      "When you comment on a @desisystemdesign reel, or reply to a direct message from that account, Instagram sends us:",
    ],
    list: [
      "your Instagram user ID and username;",
      "the text of your comment and the ID of the reel you commented on;",
      "the text of messages you send to @desisystemdesign;",
      "whether you follow @desisystemdesign, where Instagram makes that available.",
    ],
    after: [
      "We do not collect your email address, phone number, password, contacts, location or payment details.",
    ],
  },
  {
    heading: "How we use it",
    list: [
      "to reply to your comment and send you the link you asked for;",
      "to remember that we have already replied, so you are not messaged twice;",
      "to fix problems when a message fails to send.",
    ],
    after: [
      "We do not use your data for advertising, and we do not build profiles of you.",
    ],
  },
  {
    heading: "Who we share it with",
    body: [
      "We do not sell or rent your data, and we do not share it with other companies. It is processed through Meta's Instagram API and stored on a server we control, hosted with Amazon Web Services.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "We keep the records described above for as long as the comment helper is in use, or until you ask us to delete them, whichever comes first.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You can ask us to show you or delete the data we hold about you at any time. See the data deletion page for the steps. You can also stop all messages by not replying, or by blocking @desisystemdesign on Instagram.",
    ],
  },
  {
    heading: "Job posts",
    body: [
      "Links we send go to the employer's official careers site. Desi System Design is not affiliated with those employers, never asks for money, and never asks for your documents or passwords.",
    ],
  },
  {
    heading: "Changes",
    body: [
      "If this policy changes, the new version will be published on this page with a new date.",
    ],
  },
];

const Page = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
          Desi System Design comment helper. Effective 11 November 2026.
        </p>

        {sections.map((s) => (
          <section key={s.heading} className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {s.heading}
            </h2>
            {s.body?.map((p) => (
              <p
                key={p}
                className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3"
              >
                {p}
              </p>
            ))}
            {s.list && (
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                {s.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            )}
            {s.after?.map((p) => (
              <p
                key={p}
                className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3"
              >
                {p}
              </p>
            ))}
          </section>
        ))}

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Contact
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Questions or requests:{" "}
            <a
              href="mailto:allenkiakshay8322@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline break-all"
            >
              allenkiakshay8322@gmail.com
            </a>
            . To have your data removed, see{" "}
            <a
              href="/data-deletion"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              data deletion
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
