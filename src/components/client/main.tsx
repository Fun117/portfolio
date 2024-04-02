'use client';

import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";

export function IsPC(): boolean {
    if (typeof window !== 'undefined') {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileKeywords = ['iphone', 'ipod', 'ipad', 'android', 'windows phone'];
    
        return !mobileKeywords.some(keyword => userAgent.includes(keyword));
    }
    return false;
}

export function ContentTooltip({ children, label }: { children: React.ReactNode, label: string }){
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent>
                    <p className="whitespace-pre-line">{label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
};

export function ContentSkillAboutDialog({ children, language, point, skillComment }: { children: React.ReactNode, language: string, point: number, skillComment: string }){
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>{language} - <span className=" text-blue-500">{point}</span>/100pt</DialogTitle>
                        <DialogDescription>
                            {skillComment}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2">
                    </div>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button type="button" variant="outline">
                                閉じる
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
};

export function ContentMenu({ children, MenuContent }: { children: React.ReactNode, MenuContent: React.ReactNode }) {
    return (
        <ContextMenu>
            <ContextMenuTrigger>
                {children}
            </ContextMenuTrigger>
            <ContextMenuContent>
                {MenuContent}
            </ContextMenuContent>
        </ContextMenu>
    )
}