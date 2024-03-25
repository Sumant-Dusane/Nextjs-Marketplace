import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Sidebar() {
    return (
        <aside className="min-h-screen w-72 border-r">
            <div className="container flex flex-col">
                <Label>Search by Fields</Label>
                <Label>Search by Title</Label>
                <Input type="text" placeholder="MH 46 Lane Dataset" />
            </div>
        </aside>
    )
}

export default Sidebar;