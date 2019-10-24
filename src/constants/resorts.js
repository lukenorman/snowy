//passes
export const IKON = "Ikon"
export const EPIC = "Epic"

//partners
export const RCR = 'RCR'
export const SUNSNOW='Sun Valley/Snowbasin'
export const BIG3 = 'BIG3'

//regions
export const ROCKIES = 'Rockies'
export const CANADA = 'Canada'
export const IDAGO = 'Idaho'
export const UTAH = 'Utah'
export const TAHOE = 'Tahoe'
export const WA = 'Washington'
export const MAMMOTH = 'Mammoth'
export const WY = "Wyoming"
export const MT = 'Montana'
export const NM = 'New Mexico'

//resorts
export const Resorts = Object.freeze([
    //Epic Partners
    {name: 'Kimberley', pass: EPIC, subpass: RCR, region: CANADA, days: 7, location:[49.6707,-115.978]},
    {name: 'Fernie', pass: EPIC, subpass: RCR, region: CANADA, days: 7, location: [49.5041747, -115.062867]},
    {name: 'Kicking Horse', pass: EPIC, subpass: RCR, region: CANADA, days: 7, locaiton: [51.2982, -117.05]},
    {name: 'Nakiska', pass: EPIC, subpass: RCR, region: CANADA, days: 7},
    {name: 'Sun Valley', pass: EPIC, subpass: SUNSNOW, region: IDAGO, days: 7, location:[43.6962,-114.353]},
    {name: 'Snowbasin', pass: EPIC, subpass: SUNSNOW, region: UTAH, days: 7},
    {name: 'Telluride', pass: EPIC, region: ROCKIES, days: 7},
    //Epic
    {name: 'Vail', pass: EPIC, region: ROCKIES, days: 0, location: [39.6391, -106.3738]},
    {name: 'Whistler Blackcomb', pass: EPIC, region: CANADA, days: 0},
    {name: 'Keystone', pass: EPIC, region: ROCKIES, days: 0},
    {name: 'Crested Butte', pass: EPIC, region: ROCKIES, days: 0},
    {name: 'Beaver Creek', pass: EPIC, region: ROCKIES, days: 0},
    {name: 'Breckenridge', pass: EPIC, region: ROCKIES, days: 0},
    {name: 'Park City', pass: EPIC, region: UTAH, days: 0},
    {name: 'Heavenly', pass: EPIC, region: TAHOE, days: 0},
    {name: 'Kirkwood', pass: EPIC, region: TAHOE, days: 0},
    {name: 'Stevens Pass', pass: EPIC, region: WA, days: 0},
    //Ikon Partners
    {name: 'Aspen', pass: IKON, region: ROCKIES, days: 5},
    {name: 'Steamboat', pass: IKON, region: ROCKIES, days: 5},
    {name: 'A-Basin', pass: IKON, region: ROCKIES, days: 5},   
    {name: 'Jackson Hole', pass: IKON, region: WY, days: 5},
    {name: 'Big Sky', pass: IKON, region: MT, days: 5},
    {name: 'Summit at Snoqualmie', pass: IKON, region: WA, days: 5},
    {name: 'Revelstoke', pass: IKON, region: CANADA, days: 5},
    {name: 'Sunshine', pass: IKON, subpass: BIG3, region: CANADA, days: 5},
    {name: 'Lake Louise', pass: IKON, subpass: BIG3, region: CANADA, days: 5},
    {name: 'Norquay', pass: IKON, subpass: BIG3, region: CANADA, days: 5},
    {name: 'Cypress', pass: IKON, region: CANADA, days: 5},
    {name: 'Taos', pass: IKON, region: NM, days: 5},
    {name: 'Deer Valley', pass: IKON, region: UTAH, days: 5},
    {name: 'Brighton', pass: IKON, region: UTAH, days: 5},
    {name: 'Alta/Snowbird', pass: IKON, region: UTAH, days: 5},
    //Ikon
    {name: 'Winter Park', pass: IKON, region: ROCKIES, days: 0},
    {name: 'Copper Mountain', pass: IKON, region: ROCKIES, days: 0},
    {name: 'Eldora', pass: IKON, region: ROCKIES, days: 0},
    {name: 'Squaw Valley Alpine Meadows', pass: IKON, region: TAHOE, days: 0},
    {name: 'Mammoth Mountain', pass: IKON, region: MAMMOTH, days: 0}, 
    {name: 'June Mountain', pass: IKON, region: MAMMOTH, days: 0},  
    {name: 'Big Bear Mountain', pass: IKON, region: MAMMOTH, days: 0}, 
    {name: 'Crystal Mountain', pass: IKON, region: WA, days: 0}, 
    {name: 'Solitude', pass: IKON, region: UTAH, days: 0},
])