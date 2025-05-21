import React, { useState } from "react";
import { CiLink } from "react-icons/ci";
import SimpleLineChart from "../utils/SimpleLineChart";

const chartData = [
  {
    name: "2021",
    성장률: 5,
    description:
      "코딩 독학을 통해 기초 프로그래밍 언어와 개념을 습득하며 첫 걸음을 뗐다. 온라인 강의와 프로젝트를 통해 실력을 쌓았고, 꾸준한 연습으로 자신감을 얻었다. 스스로 문제를 해결하는 능력을 키우며 성장의 기쁨을 느꼈다.",
  },
  {
    name: "2022",
    성장률: 15,
    description:
      "부트캠프에 참여해 집중적인 교육을 받으며 단기간에 많은 것을 배웠다. 팀 프로젝트를 통해 협업의 중요성을 깨달았고, 실제 사례 기반의 학습으로 실무 능력을 향상시켰다. 멘토링과 네트워킹을 통해 업계 인사이트를 얻었다.",
  },
  {
    name: "2023",
    성장률: 30,
    description:
      "아이테크에서 첫 직장 생활을 시작하며 실제 업무 환경에 적응했다. 다양한 프로젝트에 참여하며 실무 경험을 쌓았고, 팀원들과의 협업을 통해 전문성을 높였다. 지속적인 학습과 자기 개발로 기술 스택을 확장했다.",
  },
  {
    name: "2024",
    성장률: 60,
    description:
      "테크랩스에서의 경험은 기술적 깊이와 리더십을 동시에 키울 수 있는 기회였다. 중요한 프로젝트를 주도하며 책임감을 느꼈고, 문제 해결 능력이 크게 향상되었다. 빅데이터와 데이터 시각화에 대한 이해를 넓히며 커리어를 한 단계 도약시켰다.",
  },
  {
    name: "2025",
    성장률: 80,
    description:
      "그린아이티코리아에서 실무 경험을 통해 기술적 깊이와 시스템 통합 역량을 향상시키고 있습니다. Node.js 기반의 장치 연동, GeoServer 기반 지도 서비스 구축, 설치형 통합 보안 솔루션 개발 등 다양한 프로젝트를 주도하며, 폐쇄망 환경에 최적화된 시스템 아키텍처와 자동화 기술을 실무에 적용 중입니다. 기술 스택의 확장뿐 아니라 서비스 설계, 배포 자동화 등 전반적인 개발 프로세스를 경험하며, 개발자로서 한 단계 도약하고 있는 중입니다."
  }
];

const About = () => {
  const [hoverText, setHoverText] = useState("");

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto text-center">
      <div className="flex justify-center items-center gap-2 mb-6">
        <CiLink size={40} className="text-gray-500" />
        <h2 className="text-3xl font-bold">ABOUT ME</h2>
      </div>
      <p className="mb-2 text-lg">가파른 성장곡선을 그리는 개발자 <strong>서지원</strong>입니다.</p>
      <p className="text-sm text-gray-500 mb-8">(차트에 마우스 오버시 상세 내용이 표시됩니다)</p>

      <div className="w-full h-[380px] sm:h-[500px] mb-6">
        <SimpleLineChart
          data={chartData}
          onHover={(desc: string) => setHoverText(desc)}
        />
      </div>

      {hoverText && (
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          <p className="italic">"{hoverText}"</p>
        </div>
      )}
    </section>
  );
};

export default About;
