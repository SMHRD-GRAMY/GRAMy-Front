import React from "react";
import { Link } from "react-router-dom";
import SkeletonRow from "./ui/SkeletonRow";

const ReportTableBody = ({ posts, loading, offset, limit }) => {
  return (
    <>
      {loading
        ? new Array(10).fill(1).map((i) => {
            return <SkeletonRow />;
          })
        : posts
        ? posts.slice(offset, offset + limit).map((info, key) => {
            return (
              <tr key={key} className="border border-slate-500">
                <td className="py-3 ">{info.id}</td>
                <td>
                  <Link
                    to={`${info.id}`}
                    state={{
                      info: info,
                    }}
                  >
                    {info.title}
                  </Link>
                </td>
                <td>{info.userId}</td>
                <td>2022-04-29</td>
                <td>0</td>
              </tr>
            );
          })
        : null}
    </>
  );
};

export default ReportTableBody;
