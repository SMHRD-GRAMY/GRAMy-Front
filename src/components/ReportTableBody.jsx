import React from "react";
import { Link } from "react-router-dom";
import SkeletonRow from "./ui/SkeletonRow";

const ReportTableBody = ({ posts, loading, offset, limit }) => {
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
                <td className="py-3 ">{info.id}</td>
                {/* 실제 백엔드와 연동할땐 처리중 대신 info.progress < 이런식으로 대체 될 것 */}
                <td>고장접수</td>
                <td>
                  <Link
                    to={`${info.id}`}
                    state={{
                      info: info,
                      progress: "고장접수", // 고장신고 분기 : 고장접수 -> 처리중 -> 처리완료
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
