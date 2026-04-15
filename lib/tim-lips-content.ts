export interface ChampionshipResult {
  year: string
  event: string
  result: string
  horse?: string
  note?: string
}

export interface TimLipsContent {
  name: string
  birthPlace: string
  birthYear: number
  biography: string[]
  classifications: string[]
  highlights: {
    olympics: number
    worldChampionships: number
    europeanChampionships: number
    nationalTitles: number
  }
  olympicGames: ChampionshipResult[]
  worldChampionships: ChampionshipResult[]
  europeanChampionships: ChampionshipResult[]
  bestFiveStarResults: Array<{
    year: string
    result: string
  }>
  specialEventResults: string[]
}

export const timLipsContent: TimLipsContent = {
  name: 'Tim Lips',
  birthPlace: 'Made, Noord-Brabant',
  birthYear: 1985,
  biography: [
    'Tim Lips, geboren in het Brabantse Made in 1985, komt uit een gezin waar de gemeenschappelijke deler de paardensport is.',
    'Al op jonge leeftijd wist hij dat hij serieus iets wilde bereiken in de paardensport. Hierin werd hij enorm gesteund door zijn ouders, die beiden in de paardensport actief zijn geweest en achter de schermen nog steeds zijn.',
    'Zijn vader, Martin Lips, heeft internationaal tot de wereldtop van de eventing behoord en ook zijn moeder Annette is altijd actief geweest in deze tak van sport.',
  ],
  classifications: [
    'Eventing 5*',
    'Dressuur Prix St. Georges',
    'Springen 1.50m',
  ],
  highlights: {
    olympics: 3,
    worldChampionships: 2,
    europeanChampionships: 5,
    nationalTitles: 4,
  },
  olympicGames: [
    { year: '2008', event: 'Beijing', result: '15e individueel', horse: 'Oncarlos' },
    { year: '2012', event: 'London', result: '38e individueel', horse: 'Oncarlos' },
    { year: '2016', event: 'Rio de Janeiro', result: '23e individueel', horse: 'Bayro' },
  ],
  worldChampionships: [
    { year: '2010', event: 'Kentucky', result: 'Geen score', horse: 'Oncarlos' },
    { year: '2014', event: 'Caen', result: '17e individueel', note: 'Bronzen teammedaille', horse: 'Keyflow' },
  ],
  europeanChampionships: [
    { year: '2009', event: 'Fontainebleau', result: 'Geen score', horse: 'Owaola' },
    { year: '2011', event: 'Luhmuhlen', result: '28e individueel', horse: 'Oncarlos' },
    { year: '2013', event: 'Malmo', result: '7e individueel', horse: 'Keyflow' },
    { year: '2015', event: 'Blair Castle', result: '18e individueel', horse: 'Keyflow' },
    { year: '2019', event: 'Luhmuhlen', result: '6e individueel', horse: 'Bayro' },
  ],
  bestFiveStarResults: [
    { year: '2009', result: '9e Kentucky' },
    { year: '2011', result: '12e Luhmuhlen' },
    { year: '2013', result: '15e Luhmuhlen' },
    { year: '2014', result: '7e Badminton (best newcomer)' },
    { year: '2015', result: '21e Badminton' },
    { year: '2015', result: '11e Pau' },
    { year: '2015', result: '7e Luhmuhlen' },
  ],
  specialEventResults: [
    '2e en 5e plaats CHIO Aachen',
    '2e plaats Nations Cup finale CCI3* Boekelo',
    '2e en 3e plaats individueel Boekelo',
    '4x Nederlands Kampioen Eventing Senioren',
  ],
}
