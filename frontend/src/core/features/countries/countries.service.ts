import axios from 'axios'
import { ICountry } from './countries.interface'

const API = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/',
  responseType: 'json',
})

export class CountryService {
  static uri = `https://restcountries.eu/rest/v2/`

  static REGIONS = {
    africa: 'africa',
    americas: 'americas',
    asia: 'asia',
    europe: 'europe',
    oceania: 'oceania',
  }

  static REGIONAL_BLOC = {
    european_union: 'eu',
    european_free_trade_association: 'efta',
    caribbean_community: 'caricom',
    pacific_alliance: 'pa',
    afican_union: 'au',
    union_of_south_american_nations: 'usan',
    eurasian_economic_union: 'eeu',
    arab_league: 'al',
    association_of_southeast_asian_nations: 'asean',
    central_american_integration_system: 'cais',
    central_european_free_trade_agreement: 'cfta',
    north_american_free_trade_agreement: 'nafta',
    south_asian_association_for_regional_cooperation: 'saarc',
  }

  static getAll(): Promise<ICountry[]> {
    return API.get(`${CountryService.uri}`).then((list: any) => list.data.map((country: any) => country as ICountry))
  }

  static searchByName(name: string, fullText = false) {
    const queryStringParam = { fullText: fullText ? 'true' : 'false' }

    return API.get(`${CountryService.uri}name/${name}`, {
      params: queryStringParam,
    })
  }

  static searchByCode(code: string) {
    return API.get(`${CountryService.uri}alpha/${code}`)
  }

  static searchByCodes(codes: string[]) {
    const queryString = { codes: codes.join(';') }
    return API.get(`${CountryService.uri}alpha`, { params: queryString })
  }

  static searchByCurrencyCode(currencyCode: string) {
    return API.get(`${CountryService.uri}currency/${currencyCode}`)
  }

  static searchByLanguage(language: string) {
    return API.get(`${CountryService.uri}lang/${language}`)
  }

  static searchByCapital(capital: string) {
    return API.get(`${CountryService.uri}capital/${capital}`)
  }

  static searchByCallingCode(callingCode: string) {
    return API.get(`${CountryService.uri}callingcode/${callingCode}`)
  }

  static searchByRegionCode(region: string) {
    return API.get(`${CountryService.uri}region/${region}`)
  }

  static searchByRegionalBloc(regionalBloc: string) {
    return API.get(`${CountryService.uri}regionalbloc/${regionalBloc}`)
  }
}
