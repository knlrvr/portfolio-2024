import { 
    RxPencil1 
} from "react-icons/rx";


export default function Edit({ children }: { children: React.ReactNode }) {

    return (
        <div className={`px-4 flex gap-2 rounded-md bg-neutral-100 dark:bg-[#222] dark:bg-opacity-40 my-6 relative`}>
            <div className={`absolute -left-2 -top-2 p-2 text-lg border rounded-full text-yellow-500 border-yellow-500 bg-neutral-100 dark:bg-[#000]`}>
                <RxPencil1 />
            </div>
            <div className="w-full text-sm text-neutral-500 ml-[2.8rem]">{children}</div>
        </div>
    );
}