import { Layout, Bio, SEO } from "@components/common";

export default function About() {
  return (
    <Layout>
      <SEO title="All posts" />
      <Bio className="my-14" />
      <div>
        <h1>Bio</h1>
        <p>성균관대학교 컴퓨터공학과 11학번</p>
        <p>성균관대학교 인공지능 대학원 중퇴(2019)</p>
        <p>이후 웹 프로그래머로써 프리랜서를 하다가, 예비창업패키지를 서류통과만 세번, 면접탈락만 세번한 후, 게임 개발자로 취업하려는 사람.</p>
        <h1>기술 스택</h1>
        <h2>웹</h2>
        <p>Node.js, GraphQL, React.js, Apollo</p>
        <h2>게임</h2>
        <p>Unity, Unreal</p>
        <h2>언어</h2>
        <p>Javascript(with TS), Python, C++, C#, Java</p>
        <h2>공부와 관심분야</h2>
        <p>웹, 인공지능(NLP, Applied Brain Research), 게임 개발, 기초 수학과 통계 그리고 물리</p>
      </div>
    </Layout>
  );
}