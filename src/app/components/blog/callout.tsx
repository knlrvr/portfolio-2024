import { 
    RxCaretRight,
    RxCheck, 
    RxCross2, 
    RxCube, 
    RxExclamationTriangle, 
    RxPencil1 
} from "react-icons/rx";

type Variant = 'default' | 'success' | 'destructive' | 'disclaimer' | 'neutral' | 'edit';

const variantStyles: Record<Variant, { icon: JSX.Element; color: string }> = {
    'default': { icon: <RxCaretRight />, color: 'text-neutral-500' },
    'success': { icon: <RxCheck />, color: 'text-green-500' },
    'destructive': { icon: <RxCross2 />, color: 'text-red-500' },
    'disclaimer': { icon: <RxExclamationTriangle />, color: 'text-orange-500' },
    'neutral': { icon: <RxCube />, color: 'text-blue-500' },
    'edit': { icon: <RxPencil1 />, color: 'text-yellow-300' }
};

export default function Callout({ variant, children }: { variant: Variant; children: React.ReactNode }) {
    const { icon, color } = variantStyles[variant];

    return (
        <div className={`px-4 flex gap-2 rounded-md bg-[#222] bg-opacity-20 my-6`}>
            <div className={`flex items-center mr-4 w-6 ${color} text-xl`}>
                {icon}
            </div>
            <div className="w-full text-sm text-neutral-500">{children}</div>
        </div>
    );
}

