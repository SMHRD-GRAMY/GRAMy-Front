import React from "react";
import { Link } from "react-router-dom";
import SkeletonRow from "./ui/SkeletonRow";

const PurchaseTableBody = ({ posts, loading, offset, limit }) => {
  return (
    <>
      {loading
        ? new Array(10).fill(1).map((i, key) => {
            return <SkeletonRow key={key} />;
          })
        : posts
        ? posts.slice(offset, offset + limit).map((info, key) => {
            return (
              <tr key={key} className="border border-slate-500">
                <td className="py-3 ">{info.purchase_cnt}</td>
                <td>
                  <Link
                    to={`${info.id}`}
                    state={{
                      info: info,
                    }}
                  >
                    {info.purchase_title}
                  </Link>
                </td>
                <td>{info.user_id}</td>
                <td>2022-04-29</td>
                <td>{info.purchase_cnt}</td>
              </tr>
            );
          })
        : null}
    </>
  );
};

export default PurchaseTableBody;
