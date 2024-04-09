import { 
    RxPencil1 
} from "react-icons/rx";


export default function Edit({ children }: { children: React.ReactNode }) {

    return (
        <div className={`px-4 flex gap-2 rounded-md bg-[#222] bg-opacity-20 my-6 relative`}>
            <div className={`absolute -left-2 -top-2 p-2 text-lg border rounded-full text-yellow-500 border-yellow-500 bg-[#111]`}>
                <RxPencil1 />
            </div>
            <div className="w-full text-sm text-neutral-500 ml-[2.8rem]">{children}</div>
        </div>
    );
}