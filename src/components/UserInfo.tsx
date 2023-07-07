import Image from "next/image"
import { useUserInfo } from "~/hooks/useUserInfo"

export const UserInfo = () => {
    const { data: userInfo } = useUserInfo()

    return (
        <div className="text-white mt-28">
            <h2 className="text-3xl mb-4">{userInfo?.name}</h2>
            <div className="flex gap-4">
                <div className="relative">
                    <Image className="rounded-lg border-white border" width={100} height={100} alt={`Profile Image`} src={`https://ddragon.leagueoflegends.com/cdn/10.18.1/img/profileicon/${userInfo?.profileIconId}.png`}></Image>
                    <div className="w-8 h-8 rounded-full absolute top-[82.5px] bg-[#433A87] flex justify-center items-center border border-white">{userInfo?.summonerLevel}</div>
                </div>
                <div>
                    <h2 className="text-lg">Ladder Rank <span className="opacity-60">123,456</span> (%55 of top)</h2>
                    <button className="w-[144px] h-[47px] bg-[#4D4494] mt-2 rounded-md">Update</button>
                </div>
            </div>
            <div className="bg-[#4D4494] mt-8 flex flex-row">
                <div className="text-xl bg-[#5D54A1] h-16 w-32 flex items-center justify-center">Overview</div>
                <div className="text-xl h-16 w-32 flex items-center justify-center">Champions</div>
                <div className="text-xl h-16 w-32 flex items-center justify-center">Live Game</div>
            </div>
        </div>
    )
}