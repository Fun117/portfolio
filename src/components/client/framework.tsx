import { TbBrandCss3, TbBrandGit, TbBrandGithub, TbBrandHtml5, TbBrandJavascript, TbBrandMysql, TbBrandNextjs, TbBrandNodejs, TbBrandNpm, TbBrandPython, TbBrandReact, TbBrandTypescript, TbFaceIdError } from "react-icons/tb";
import { DiJava, DiRuby } from "react-icons/di";

export function FrameworkIcon({ framework, className }: { framework: string, className?: string }) {
    switch (framework.toLowerCase()) {
        case "github":
            return <TbBrandGithub className={className}/>;
        case "npm":
            return <TbBrandNpm className={className}/>;
        case "react":
            return <TbBrandReact className={className}/>;
        case "nextjs":
            return <TbBrandNextjs className={className}/>;
        case "nodejs":
            return <TbBrandNodejs className={className}/>;
        case "git":
            return <TbBrandGit className={className}/>;
        case "typescript":
            return <TbBrandTypescript className={className}/>;
        case "javascript":
            return <TbBrandJavascript className={className}/>;
        case "html":
            return <TbBrandHtml5 className={className}/>;
        case "css":
            return <TbBrandCss3 className={className}/>;
        case "python":
            return <TbBrandPython className={className}/>;
        case "Ruby":
            return <DiRuby className={className}/>;
        case "mysql":
            return <TbBrandMysql className={className}/>;
        case "java":
            return <DiJava className={className}/>;
        default:
            return <TbFaceIdError className={className}/>;
    }
}