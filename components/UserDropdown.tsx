'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import NavItems from "@/components/NavItems";

const UserDropdown = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        router.push("/sign-in");
    };

    const user = { name: 'Hanz', email: 'hanzzz@gmail.com' };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-3 text-gray-400 hover:text-yellow-500 outline-none cursor-pointer">
                <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                        {user.name[0]}
                    </AvatarFallback>
                </Avatar>
                <div className="hidden md:flex flex-col items-start">
                    <span className="text-base font-medium text-gray-400">
                        {user.name}
                    </span>
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="text-gray-400 min-w-[200px]">
                    <DropdownMenuGroup>
                        <DropdownMenuLabel>
                            <div className="flex items-center gap-3 py-2">
                                <Avatar className="h-10 w-10">
                                    <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                                        {user.name[0]}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                    <span className="text-base font-medium text-gray-400">
                        {user.name}
                    </span>
                                    <span className="text-sm text-gray-500">{user.email}</span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                    </DropdownMenuGroup>

                    <DropdownMenuSeparator className="bg-gray-600" />

                    <DropdownMenuGroup>
                        <DropdownMenuItem
                            onClick={handleSignOut}
                            className="text-gray-100 text-md font-medium focus:text-yellow-500 transition-colors cursor-pointer"
                        >
                            <LogOut className="h-4 w-4 mr-2" />
                            Log Out
                        </DropdownMenuItem>
                        <nav className="sm:hidden">
                            <NavItems />
                        </nav>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserDropdown;