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
    {name: 'Kicking Horse', pass: EPIC, subpass: RCR, region: CANADA, days: 7, location: [51.2982, -117.05]},
    {name: 'Nakiska', pass: EPIC, subpass: RCR, region: CANADA, days: 7, location: [50.942758, -115.151088]},
    {name: 'Sun Valley', pass: EPIC, subpass: SUNSNOW, region: IDAGO, days: 7, location: [43.6962,-114.353]},
    {name: 'Snowbasin', pass: EPIC, subpass: SUNSNOW, region: UTAH, days: 7, location: [41.216166, -111.856865]},
    {name: 'Telluride', pass: EPIC, region: ROCKIES, days: 7, location: [37.937672, -107.813533]},
    //Epic
    {name: 'Vail', pass: EPIC, region: ROCKIES, days: 0, location: [39.6391, -106.3738]},
    {name: 'Whistler Blackcomb', pass: EPIC, region: CANADA, days: 0, location: [50.115053, -122.948722]},
    {name: 'Keystone', pass: EPIC, region: ROCKIES, days: 0, location: [39.604729, -105.942661]},
    {name: 'Crested Butte', pass: EPIC, region: ROCKIES, days: 0, location: [38.899428, -106.966811]},
    {name: 'Beaver Creek', pass: EPIC, region: ROCKIES, days: 0, location: [39.604199, -106.516716]},
    {name: 'Breckenridge', pass: EPIC, region: ROCKIES, days: 0, location: [39.480482, -106.066765]},
    {name: 'Park City', pass: EPIC, region: UTAH, days: 0, location: [40.647216, -111.498614]},
    {name: 'Heavenly', pass: EPIC, region: TAHOE, days: 0, location: [38.961266, -119.885523]},
    {name: 'Kirkwood', pass: EPIC, region: TAHOE, days: 0, location: [38.683143, -120.067398]},
    {name: 'Stevens Pass', pass: EPIC, region: WA, days: 0, location: [47.744774, -121.090297]},
    //Ikon Partners
    {name: 'Aspen', pass: IKON, region: ROCKIES, days: 5, location: [39.184842, -106.821359]},
    {name: 'Steamboat', pass: IKON, region: ROCKIES, days: 5, location: [40.457014, -106.804693]},
    {name: 'A-Basin', pass: IKON, region: ROCKIES, days: 5, location: [39.642578, -105.871940]},   
    {name: 'Jackson Hole', pass: IKON, region: WY, days: 5, location: [43.587615, -110.828058]},
    {name: 'Big Sky', pass: IKON, region: MT, days: 5, location: [45.285940, -111.402055]},
    {name: 'Summit at Snoqualmie', pass: IKON, region: WA, days: 5, location: [47.410525, -121.411382]},
    {name: 'Revelstoke', pass: IKON, region: CANADA, days: 5, location: [50.958180, -118.163451]},
    {name: 'Sunshine', pass: IKON, subpass: BIG3, region: CANADA, days: 5, location: [51.115097, -115.763314]},
    {name: 'Lake Louise', pass: IKON, subpass: BIG3, region: CANADA, days: 5, location: [51.441420, -116.161633]},
    {name: 'Norquay', pass: IKON, subpass: BIG3, region: CANADA, days: 5, location: [51.202932, -115.597830]},
    {name: 'Cypress', pass: IKON, region: CANADA, days: 5, location: [49.395955, -123.204534]},
    {name: 'Taos', pass: IKON, region: NM, days: 5, location: [36.594717, -105.449560]},
    {name: 'Deer Valley', pass: IKON, region: UTAH, days: 5, location: [40.637556, -111.479153]},
    {name: 'Brighton', pass: IKON, region: UTAH, days: 5, location: [40.597972, -111.583079]},
    {name: 'Alta/Snowbird', pass: IKON, region: UTAH, days: 5, location: [40.588160, -111.635769]},
    //Ikon
    {name: 'Winter Park', pass: IKON, region: ROCKIES, days: 0, location: [39.886662, -105.762995]},
    {name: 'Copper Mountain', pass: IKON, region: ROCKIES, days: 0, location: [39.499664, -106.155783]},
    {name: 'Eldora', pass: IKON, region: ROCKIES, days: 0, location: [39.937281, -105.582639]},
    {name: 'Squaw Valley', pass: IKON, region: TAHOE, days: 0, location: [39.197049, -120.235607]},
    {name: 'Alpine Meadows', pass: IKON, region: TAHOE, days: 0, location: [39.164592, -120.237775]},
    {name: 'Mammoth Mountain', pass: IKON, region: MAMMOTH, days: 0, location: [37.650803, -119.036925]}, 
    {name: 'June Mountain', pass: IKON, region: MAMMOTH, days: 0, location: [37.768032, -119.090443]},  
    {name: 'Big Bear Mountain', pass: IKON, region: MAMMOTH, days: 0, location: [34.236426, -116.889289]}, 
    {name: 'Crystal Mountain', pass: IKON, region: WA, days: 0, location: [46.935692, -121.474832]}, 
    {name: 'Solitude', pass: IKON, region: UTAH, days: 0, location: [40.620354, -111.593772]},
])