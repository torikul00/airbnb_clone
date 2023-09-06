
import { FaSkiing, FaCity } from 'react-icons/fa'
import { BiBed } from 'react-icons/bi'
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
import { GiBoatFishing, GiCastle, GiCaveEntrance, GiIsland, } from 'react-icons/gi'

const categoryData = [
    
    {
        label: 'Rooms',
        icon: BiBed,
    },
    {
        label: 'Tropical',
        icon: GiIsland,
    },
    {
        label: 'Countryside',
        icon: TbMountain,
    },
    {
        label: 'Iconic Cities',
        icon: FaCity,
    },
    {
        label: 'Beach',
        icon: TbBeach,
    },
    {
        label: 'Pools',
        icon: TbPool,
    },
    {
        label: 'Castles',
        icon: GiCastle,
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
    },
    {
        label: 'Caves',
        icon: GiCaveEntrance,
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
    },
]

export default categoryData;