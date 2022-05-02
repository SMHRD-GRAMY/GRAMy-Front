import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import styled from "styled-components";
import axios from "axios";

const MyBlock = styled.div`
  .wrapper-class {
    width: 100%;
    margin: 0 auto;
  }
  .editor {
    height: 500px !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
`;

// const IntroduceContent = styled.div`
//   position: relative;
//   border: 0.0625rem solid #d7e2eb;
//   border-radius: 0.75rem;
//   overflow: hidden;
//   padding: 1.5rem;
//   width: 50%;
//   margin: 0 auto;
//   margin-bottom: 4rem;
// `;

const DraftEditor = ({ title }) => {
  // useState로 상태관리하기 초기값은 EditorState.createEmpty()
  // EditorState의 비어있는 ContentState 기본 구성으로 새 개체를 반환 => 이렇게 안하면 상태 값을 나중에 변경할 수 없음.
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    // editorState에 값 설정
    setEditorState(editorState);
  };

  // 입력한 텍스트
  // 백엔드에 얘를 보내야돼 -> 함수를 만들자 (axios)
  const editorToHtml = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );

  const handleSubmit = (e) => {
    const url = "/";

    let data = {
      title: title,
      content: editorToHtml,
    };

    axios
      .post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <MyBlock>
        <Editor
          // 에디터와 툴바 모두에 적용되는 클래스
          wrapperClassName="wrapper-class"
          // 에디터 주변에 적용된 클래스
          editorClassName="editor"
          // 툴바 주위에 적용된 클래스
          toolbarClassName="toolbar-class"
          // 툴바 설정
          toolbar={{
            // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: false },
          }}
          placeholder="내용을 작성해주세요."
          // 한국어 설정
          localization={{
            locale: "ko",
          }}
          // 초기값 설정
          editorState={editorState}
          // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
          onEditorStateChange={onEditorStateChange}
        />
      </MyBlock>
      <div className="bg-[#F4F6F6] flex justify-end">
        <button
          onSubmit={handleSubmit}
          className="h-9 bg-[#90C8B4] rounded-md text-white font-bold w-28"
        >
          글 쓰기
        </button>
        <button className="ml-4">취소</button>
      </div>
    </>
  );
};

export default DraftEditor;
