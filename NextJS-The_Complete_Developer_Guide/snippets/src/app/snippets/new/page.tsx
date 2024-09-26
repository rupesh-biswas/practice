import { db } from "@/db";
import { redirect } from "next/navigation";

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    // This needs to be a server action!
    "use server";

    // extract the title and code and do some validation
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    // create a new record in database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    // Redirect use to snippet page
    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <h3 className="m-3 font-bold">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            id="title"
            className="w-full rounded border p-2"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            code
          </label>
          <textarea
            name="code"
            id="code"
            className="w-full rounded border p-2"
          />
        </div>

        <button
          type="submit"
          className="ml-12 rounded bg-blue-200 p-2 hover:bg-blue-300 active:bg-blue-400"
        >
          Create
        </button>
      </div>
    </form>
  );
}
