import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const SingleProject: NextPage = () => {
  const router = useRouter();

  return <div><h1>Hai Portfolio Project</h1>
  <h2>Query: {router.query.projectId}</h2>
  </div>;
};

export default SingleProject;
