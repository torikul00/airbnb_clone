
import { FaSkiing, FaCity } from 'react-icons/fa'
import { BiBed } from 'react-icons/bi'
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
import { GiBoatFishing, GiCastle, GiCaveEntrance, GiIsland, } from 'react-icons/gi'

const categoryData = [
    
   
    
    {
        label: 'Countryside',
        icon: TbMountain,
    },
    {
        label: 'Rooms',
        icon: BiBed,
    },
    {
        label: 'Tropical',
        icon: GiIsland,
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
        label: 'Castles',
        icon: GiCastle,
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
    },
    
    {
        label: 'Skiing',
        icon: FaSkiing,
    },
    {
        label: 'Caves',
        icon: GiCaveEntrance,
    },
    {
        label: 'Pools',
        icon: TbPool,
    },
]

export default categoryData;