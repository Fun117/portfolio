import { TbBrandCss3, TbBrandGit, TbBrandHtml5, TbBrandJavascript, TbBrandMysql, TbBrandNextjs, TbBrandNodejs, TbBrandPython, TbBrandReact, TbBrandTypescript, TbFaceIdError } from "react-icons/tb";
import { DiJava, DiRuby } from "react-icons/di";

export function FrameworkIcon({ framework }: { framework: string }) {
    switch (framework.toLowerCase()) {
        case "react":
            return <TbBrandReact />;
        case "nextjs":
            return <TbBrandNextjs />;
        case "nodejs":
            return <TbBrandNodejs />;
        case "git":
            return <TbBrandGit />;
        case "typescript":
            return <TbBrandTypescript />;
        case "javascript":
            return <TbBrandJavascript />;
        case "html":
            return <TbBrandHtml5 />;
        case "css":
            return <TbBrandCss3 />;
        case "python":
            return <TbBrandPython />;
        case "Ruby":
            return <DiRuby />;
        case "mysql":
            return <TbBrandMysql />;
        case "java":
            return <DiJava />;
        default:
            return <TbFaceIdError />;
    }
}