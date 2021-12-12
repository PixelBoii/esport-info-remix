import { Link, useLoaderData } from "remix";
import { app } from "~/firebase.js";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
);

export async function loader() {
    let db = getFirestore(app);
    let query = await getDocs(collection(db, 'games'));

    let games = query.docs.reduce((docs, e) => {
        let data = e.data();

        return {
            ...docs,
            [e.id]: {
                ...data,
                id: e.id,
                chartData: require(`../../public/${data.chart_data}.json`)
            },
        }
    }, {});

    return {
        games
    };
}

function CounterStrike({ details }: any) {
    const maps = [
        {
            "image_url": "https://cdn.pandascore.co/images/csgo/map/image/31/EoWEJNuVQAEtMa2-1024x576.jpg",
            "name": "Ancient"
        },
        {
            "image_url": "https://cdn.pandascore.co/images/csgo/map/image/30/anubisCS.jpg",
            "name": "Anubis"
        },
        {
            "image_url": "https://cdn.pandascore.co/images/csgo/map/image/29/Csgo-de-aztec.png",
            "name": "Aztec"
        },
        {
            "image_url": "https://cdn.pandascore.co/images/csgo/map/image/28/tuscan.png",
            "name": "Tuscan"
        },
        {
            "image_url": "https://cdn.pandascore.co/images/csgo/map/image/20/Vertigo.png",
            "name": "Vertigo"
        },
        {
            "image_url": "https://cdn.pandascore.co/images/csgo/map/image/8/Csgo_dust2.0.jpg",
            "name": "Dust2"
        },
        {
            "image_url": "https://cdn.pandascore.co/images/csgo/map/image/7/Csgo_overpass.jpg",
            "name": "Overpass"
        },
        {
            "image_url": "https://cdn.pandascore.co/images/csgo/map/image/6/Nuke_csgo.jpg",
            "name": "Nuke"
        },
        {
            "image_url": "https://cdn.pandascore.co/images/csgo/map/image/5/cobblestone.png",
            "name": "Cobblestone"
        },
        {
            "image_url": "https://cdn.pandascore.co/images/csgo/map/image/4/Csgo_cache.png",
            "name": "Cache"
        },
        {
            "image_url": "https://cdn.pandascore.co/images/csgo/map/image/3/Train_csgo.jpg",
            "name": "Train"
        },
        {
            "image_url": "https://cdn.pandascore.co/images/csgo/map/image/2/De_new_inferno.jpg",
            "name": "Inferno"
        },
        {
            "image_url": "https://cdn.pandascore.co/images/csgo/map/image/1/Csgo_mirage.jpg",
            "name": "Mirage"
        }
    ];

    return (
        <div id="csgo" className="py-12">
            <div className="flex items-center h-64 bg-center bg-cover bg-no-repeat max-w-7xl mx-auto rounded-md" style={{ backgroundImage: `url('${details.banner}')` }}>
                <div className="container max-w-5xl mx-auto text-center">
                    <div className="px-16 py-4 w-max rounded bg-primary mx-auto">
                        <p className="text-white text-3xl font-bold drop-shadow"> {details.name} </p>
                    </div>
                </div>
            </div>

            <div className="py-8 container max-w-5xl mx-auto">
                <div className="text-center">
                    <p className="text-gray-200 font-semibold leading-7"> Counter-Strike: Global Offensive (CS:GO) is a multiplayer first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series. Developed for over two years, Global Offensive was released for Windows, macOS, Xbox 360, and PlayStation 3 in August 2012, and for Linux in 2014. Valve still regularly updates the game, both with smaller balancing patches and larger content additions. </p>
                </div>

                <div className="mt-8">
                    <p className="text-gray-200 text-2xl font-semibold text-center"> Available maps </p>

                    <div className="grid grid-cols-4 mt-4">
                        {maps.map(map => (
                            <div className="w-full h-36 bg-cover bg-center bg-no-repeat flex items-end justify-center" style={{ backgroundImage: `url('${map.image_url}')` }} key={map.name}>
                                <div className="w-full px-3 py-1 bg-gray-800 border-b-4 border-primary text-center">
                                    <p className="text-gray-300 text-lg font-semibold"> {map.name} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center max-w-4xl mx-auto">
                    <p className="text-gray-300 text-2xl font-semibold"> Game modes </p>

                    <p className="text-gray-300 text-xl font-semibold mt-4"> Competetive </p>
                    <p className="text-gray-300 font-semibold mt-4 leading-7"> Competitive mode, the primary gameplay experience, pits two teams of five players against each other in a best-of-30 match. When playing Competitive, players have a skill rank based on an Elo rating system and are paired with and against other players around the same ranking. </p>
                    <img src="csgo_match_ended.png" className="mt-4 mx-auto w-3/5 max-h-56 object-cover rounded-md" />

                    <p className="text-gray-300 text-xl font-semibold mt-8"> Wingman </p>
                    <p className="text-gray-300 font-semibold mt-4 leading-7"> Wingman is a two-on-two bomb defusal game mode taking place over sixteen rounds. Similar to Competitive, players are paired based on a dynamic skill ranking. </p>
                    <img src="csgo_wingman.png" className="mt-4 mx-auto w-3/5 max-h-56 object-cover rounded-md" />

                    <p className="text-gray-300 text-xl font-semibold mt-8"> Casual & Deathmatch </p>
                    <p className="text-gray-300 font-semibold mt-4 leading-7"> The Casual and Deathmatch modes are less serious than Competitive mode and do not register friendly fire. Both are primarily used as a practice tool. </p>
                    <img src="csgo_casual.png" className="mt-4 mx-auto w-3/5 max-h-56 object-cover rounded-md" />
                </div>
            </div>
        </div>
    )
}

function Pubg({ details }: any) {
    const maps = [
        {
            "image_url": "/pubg_erangel_map.png",
            "name": "Erangel"
        },
        {
            "image_url": "/pubg_miramar_map.png",
            "name": "Miramar"
        },
        {
            "image_url": "/pubg_vikendi_map.png",
            "name": "Vikendi"
        },
        {
            "image_url": "/pubg_sanhok_map.png",
            "name": "Sanhok"
        },
    ];

    return (
        <div className="py-12" id="pubg">
            <div className="flex items-center h-64 bg-center bg-cover bg-no-repeat max-w-7xl mx-auto rounded-md" style={{ backgroundImage: `url('${details.banner}')` }}>
                <div className="container max-w-5xl mx-auto text-center">
                    <div className="px-16 py-4 w-max rounded bg-primary mx-auto">
                        <p className="text-white text-3xl font-bold drop-shadow"> { details.name } </p>
                    </div>
                </div>
            </div>

            <div className="py-16 container max-w-5xl mx-auto">
                <div className="text-center">
                    <p className="text-gray-300 font-semibold mt-4 leading-7"> PlayerUnknown's Battlegrounds (also known as PUBG: Battlegrounds) is an online multiplayer battle royale game developed and published by PUBG Corporation, a subsidiary of Bluehole. The game is based on previous mods that were created by Brendan "PlayerUnknown" Greene for other games, inspired by the 2000 Japanese film Battle Royale, and expanded into a standalone game under Greene's creative direction. In the game, up to one hundred players parachute onto an island and scavenge for weapons and equipment to kill others while avoiding getting killed themselves. The available safe area of the game's map decreases in size over time, directing surviving players into tighter areas to force encounters. The last player or team standing wins the round. </p>
                </div>

                <div className="mt-12">
                    <p className="text-gray-300 text-2xl font-semibold text-center"> Available maps </p>

                    <div className="grid grid-cols-4 mt-4">
                        { maps.map(map => (
                            <div className="w-full h-36 bg-cover bg-center bg-no-repeat flex items-end justify-center" style={{ backgroundImage: `url('${map.image_url}')` }} key={map.name}>
                                <div className="w-full px-3 py-1 bg-gray-800 border-b-4 border-primary text-center">
                                    <p className="text-white text-lg font-semibold"> { map.name } </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center max-w-4xl mx-auto">
                    <p className="text-gray-300 text-2xl font-semibold"> Game modes </p>

                    <p className="text-gray-300 text-xl font-semibold mt-4"> Battle Royale Solo </p>
                    <p className="text-gray-300 font-semibold mt-4 leading-7"> The classic game mode. Complete free for all, kill everyone, be the last one alive. Solo, a game mode where you spawn into the world alone and you just rely on your own tactics and skill to push you to the end and be the last player alive. </p>
                    <img src="pubg_solo.png" className="mt-4 mx-auto w-3/5 max-h-56 object-cover rounded-md" />

                    <p className="text-gray-300 text-xl font-semibold mt-8"> Battle Royale Duos </p>
                    <p className="text-gray-300 font-semibold mt-4 leading-7"> For this game mode, you will be paired up with another individual and will compete to be the last ones alive. </p>
                    <img src="pubg_duo.png" className="mt-4 mx-auto w-3/5 max-h-56 object-cover rounded-md" />

                    <p className="text-gray-300 text-xl font-semibold mt-8"> Battle Royale Squads </p>
                    <p className="text-gray-300 font-semibold mt-4 leading-7"> Squad is a gameplay type where players are organized into teams which are then pitted against each other. This is distinct from the classic Free For All (FFA) gameplay mode, where players are free to kill whomever they wish. SQUAD, a game mode where you can team up in groups of 2, 3 or 4 players, or if you prefer, you can still play solo and take on everyone alone in the match. </p>
                    <p className="text-gray-300 font-semibold mt-4 leading-7"> Note: No matter the size of your party when you enter a match, you'll be matched with teams of 4. </p>
                    <img src="pubg_squad.png" className="mt-4 mx-auto w-3/5 max-h-56 object-cover rounded-md" />
                </div>
            </div>
        </div>
    )
}

function Dota2({ details }: any) {
    return (
        <div id="dota-2" className="py-12">
            <div className="flex items-center h-64 bg-center bg-cover bg-no-repeat max-w-7xl mx-auto rounded-md" style={{ backgroundImage: `url('${details.banner}')` }}>
                <div className="container max-w-5xl mx-auto text-center">
                    <div className="px-16 py-4 w-max rounded bg-primary mx-auto">
                        <p className="text-white text-3xl font-bold drop-shadow"> { details.name } </p>
                    </div>
                </div>
            </div>

            <div className="py-16 container max-w-5xl mx-auto">
                <div className="text-center">
                    <p className="text-gray-300 font-semibold mt-4 leading-7"> Dota 2 is a multiplayer online battle arena (MOBA) video game developed and published by Valve. The game is a sequel to Defense of the Ancients (DotA), which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos. Dota 2 is played in matches between two teams of five players, with each team occupying and defending their own separate base on the map. Each of the ten players independently controls a powerful character, known as a "hero", who all have unique abilities and differing styles of play. During a match players collect experience points and items for their heroes to successfully defeat the opposing team's heroes in player versus player combat. A team wins by being the first to destroy the other team's "Ancient", a large structure located within their base. </p>
                </div>

                <div className="mt-12 max-w-3xl mx-auto">
                    <p className="text-gray-300 text-2xl font-semibold text-center"> The map </p>

                    <div className="flex items-center space-x-6 mt-6">
                        <p className="text-gray-300 font-semibold text-right leading-7 w-7/8"> The Map is the playing field for all Dota 2 matches. It is comprised of two sides, one for the Radiant icon.png Radiant faction, and one for the Dire icon.png Dire faction. To win, players must destroy the opposing side's Ancient, an important building at the center of each team's base. The map is represented in the interface by the minimap. </p>

                        <img src="/dota2_map.png" className="w-1/4 rounded-md" />
                    </div>
                </div>

                <div className="mt-12 text-center max-w-4xl mx-auto">
                    <p className="text-gray-300 text-2xl font-semibold"> Game modes </p>

                    <p className="text-gray-300 text-xl font-semibold mt-4"> Ranked All Pick </p>
                    <p className="text-gray-300 font-semibold mt-4 leading-7"> In this mode all heroes are available. Players may pick any hero as long as another player has not already chosen it. The same rule is applied in Unranked Matchmaking. This includes a ban phase before the picking phase. </p>
                    <img src="dota2_ranked_all_pick.png" className="mt-4 mx-auto w-3/5 max-h-56 object-cover rounded-md" />

                    <p className="text-gray-300 text-xl font-semibold mt-8"> Captains Mode </p>
                    <p className="text-gray-300 font-semibold mt-4 leading-7"> The standard mode for competitive play. In Captains Mode, two team captains go through phases of banning heroes from the pool and picking heroes for their team. After all 10 heroes are selected, each team's players pick their hero from the five their captain had chosen. Each captain has 30 seconds to make a pick and 35 seconds to select a ban when it is their turn. Each team's allotted 130 second reserve time depletes any time their captain takes longer than allotted to make a pick or ban. If reserve time runs out before a pick, a random hero will be selected. If it runs out before a ban, no hero will be banned. </p>
                    <img src="dota2_captains_mode.png" className="mt-4 mx-auto w-3/5 max-h-56 object-cover rounded-md" />

                    <p className="text-gray-300 text-xl font-semibold mt-8"> Random Draft </p>
                    <p className="text-gray-300 font-semibold mt-4 leading-7"> In this mode, 50 heroes are randomly chosen to be available. The players on each team take turns picking heroes from the pool, and only have 20 seconds to make their selection when it is their turn. </p>
                    <img src="dota2_random_draft.png" className="mt-4 mx-auto w-3/5 max-h-56 object-cover rounded-md" />
                </div>
            </div>
        </div>
    )
}

function GameCard({ details }: any) {
    let chartOptions = {
        scales: {
            y: {
                display: false
            },
            x: {
                display: false
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        lineTension: 0.8,
    }

    return (
        <Link to={`#${details.id}`}>
            <div className="relative w-full bg-gray-900 rounded-md border-4 border-b-0 border-primary">
                <div className="px-5 py-6">
                    <p className="text-gray-200 font-semibold text-2xl"> {details.name} </p>
                    <p className="text-gray-300 font-semibold"> {details.views} views </p>
                </div>

                <div>
                    <Line
                        height={100}
                        data={{
                            labels: details.chartData.map((e: number[]) => new Date(e[0]).toLocaleDateString()),
                            datasets: [
                                {
                                    label: 'Views',
                                    data: details.chartData.map((e: number[]) => e[1]),
                                    borderColor: 'rgba(167, 38, 3)',
                                    borderWidth: 3,
                                    fill: {
                                        target: 'origin',
                                        above: 'rgba(167, 38, 3, .3)'
                                    },
                                    pointRadius: 0,
                                },
                            ]
                        }}
                        options={chartOptions}
                    />
                </div>
            </div>
        </Link>
    )
}

export default function Index() {
    let { games } = useLoaderData();

    return (
        <div>
            <div className="min-h-screen flex flex-col justify-center">
                <div className="bg-gray-900">
                    <div className="pt-24 pb-32 container mx-auto max-w-7xl px-10 md:px-0">
                        <p className="text-gray-100 font-black text-5xl text-center"> Most popular E-Sports </p>
                    </div>
                </div>

                <div className="grow container mx-auto max-w-7xl px-10 md:px-0 -mt-16 flex flex-col justify-between pb-12">
                    <div className="grid grid-cols-3 gap-6">
                        <GameCard details={games['csgo']} />
                        <GameCard details={games['pubg']} />
                        <GameCard details={games['dota-2']} />
                    </div>

                    <Link to="#csgo">
                        <div className="bg-gray-600 rounded-full h-12 w-12 animate-bounce mt-12 mx-auto flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>

            <CounterStrike details={games['csgo']} />
            <Pubg details={games['pubg']} />
            <Dota2 details={games['dota-2']} />
        </div>
    );
}
