'use client'

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { BorderBeam } from "@/components/magicui/border-beam";
import BlurFade from "@/components/magicui/blur-fade";


interface Member {
    full_name: string;
    jabatan: string;
    photo_link: string;
}

export default function MemberCards() {
    const [members, setMembers] = useState<Member[]>([]);

    useEffect(() => {
        fetch("https://api.mgmptkj.org/members")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                return response.json();
            })
            .then((data) => setMembers(data))
    });

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                {members.map((member, index) => (
                    <BlurFade key={index} delay={0.25 + index * 0.05} inView>
                        <Card key={index} className="p-1 relative overflow-hidden border border-transparent hover:border-gray-300 dark:hover:border-gray-700 rounded-md transition-all">
                            <CardHeader className="aspect-square relative">
                                <Image
                                    src={member.photo_link}
                                    alt={member.full_name}
                                    fill
                                    className="object-cover"
                                />
                            </CardHeader>
                            <CardContent className="p-4">
                                <CardTitle className="text-sm font-medium">{member.full_name}</CardTitle>
                                <CardDescription className="text-[10px] text-muted-foreground">{member.jabatan}</CardDescription>
                            </CardContent>
                            {/* Add the BorderBeam here */}
                            <div className="absolute inset-0 z-10">
                                <BorderBeam size={100} duration={5} delay={4} />
                            </div>
                        </Card>
                    </BlurFade>
                ))}
            </div>
        </div >
    );
}
