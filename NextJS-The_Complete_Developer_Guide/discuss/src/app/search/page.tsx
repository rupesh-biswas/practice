import PostList from "@/components/posts/post-list";
import { fetchPostsBySeachTerm } from "@/db/queries/posts";
import { redirect } from "next/navigation";

interface searchPageParams {
  searchParams: {
    term: string;
  };
}

export default async function SearchPage({ searchParams }: searchPageParams) {
  const { term } = searchParams;

  if (!term) {
    redirect("/");
  }

  return (
    <div>
      <PostList fetchData={fetchPostsBySeachTerm.bind(null, term)} />
    </div>
  );
}
