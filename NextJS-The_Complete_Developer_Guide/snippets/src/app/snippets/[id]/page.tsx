import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  await new Promise((r) => setTimeout(r, 2000));

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  if (!snippet) {
    return notFound();
  }

  // const snippetDeleteAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className="m-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        {/* <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="rounded border p-2"
          >
            Edit
          </Link>
          <form action={snippetDeleteAction}>
            <button className="rounded border p-2">Delete</button>
          </form>
        </div> */}
      </div>
      <pre className="rounded border border-gray-200 bg-gray-200 p-3">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();

  return snippets.map((snippet) => {
    return {
      id: `${snippet.id}`,
    };
  });
}
