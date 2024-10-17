"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return (
      <div>
        Signed In via client component as {JSON.stringify(session.data.user)}
      </div>
    );
  }
  return <div>Signed Out</div>;
}
