import Fotter from "@/components/constants/fotter";
import Navbar from "@/components/constants/navbar";

export const metadata = {
  title: "Data Deletion | Desi System Design",
  description:
    "How to have your data removed from the Desi System Design Instagram comment helper.",
};

const steps = [
  "Send an email to allenkiakshay8322@gmail.com with the subject \"Delete my data\".",
  "Include your Instagram username, so we can find your records. You do not need to send anything else.",
  "We delete the records linked to your account and reply to confirm, within 30 days.",
];

const Page = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          Data Deletion
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
          Desi System Design comment helper.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            What we hold
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            If you commented on a @desisystemdesign reel or replied to its
            direct message, we hold your Instagram user ID and username, the
            comment or message text, and a note of which reel it was about.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            How to have it deleted
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
            {steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
            Email:{" "}
            <a
              href="mailto:allenkiakshay8322@gmail.com?subject=Delete%20my%20data"
              className="text-blue-600 dark:text-blue-400 hover:underline break-all"
            >
              allenkiakshay8322@gmail.com
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            What is not covered
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Your comments and messages also exist on Instagram itself. Deleting
            our records does not remove them there; you can delete your own
            comments and messages in the Instagram app. For how we use data in
            general, see the{" "}
            <a
              href="/privacy"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              privacy policy
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
