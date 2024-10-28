import { db } from "@/db";
import Link from "next/link";

// export const dynamic = "force-dynamic";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <div key={snippet.id}>
        <Link
          className="flex items-center justify-between rounded border p-2"
          href={`/snippets/${snippet.id}`}
        >
          <div>{snippet.title}</div>
          <div>View</div>
        </Link>
      </div>
    );
  });

  return (
    <div>
      {/* <div className="m-2 flex items-center justify-between">
        <div className="text-xl font-bold">Snippets</div>
        <Link href={"/snippets/new"} className="rounded border p-2">
          New
        </Link>
      </div> */}
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}
