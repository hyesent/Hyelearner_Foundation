// ============================================================
// UNIVERSITIES INDEX — Full global university list
// Built by Hyesent.dev
// ============================================================

import universitiesData from './universities.js'

// ============================================================
// HELPERS
// ============================================================

// Search universities by name, country, or state
export const searchUniversities = (query, limit = 10) => {
  if (!query || query.length < 2) return []

  const lowerQuery = query.toLowerCase()
  const results = universitiesData.filter(uni =>
    uni.name.toLowerCase().includes(lowerQuery) ||
    uni.country?.toLowerCase().includes(lowerQuery) ||
    uni['state-province']?.toLowerCase().includes(lowerQuery) ||
    (uni.domains && uni.domains.some(d => d.includes(lowerQuery)))
  )

  return results.slice(0, limit)
}

// Get university by name (exact match)
export const getUniversityByName = (name) => {
  return universitiesData.find(uni =>
    uni.name.toLowerCase() === name.toLowerCase()
  ) || null
}

// Get universities by country
export const getUniversitiesByCountry = (country) => {
  return universitiesData.filter(uni =>
    uni.country?.toLowerCase() === country.toLowerCase()
  )
}

// Get all unique countries
export const getAllCountries = () => {
  const countries = new Set(universitiesData.map(uni => uni.country).filter(Boolean))
  return Array.from(countries).sort()
}

// Get all unique states/provinces by country
export const getStatesByCountry = (country) => {
  const states = new Set(
    universitiesData
      .filter(uni => uni.country?.toLowerCase() === country.toLowerCase())
      .map(uni => uni['state-province'])
      .filter(Boolean)
  )
  return Array.from(states).sort()
}

// Get universities by state/province
export const getUniversitiesByState = (state) => {
  return universitiesData.filter(uni =>
    uni['state-province']?.toLowerCase() === state.toLowerCase()
  )
}

// Get universities by domain
export const getUniversityByDomain = (domain) => {
  return universitiesData.find(uni =>
    uni.domains && uni.domains.includes(domain)
  ) || null
}

// Get Nigerian universities only
export const getNigerianUniversities = () => {
  return universitiesData.filter(uni =>
    uni.country === 'Nigeria'
  )
}

// ============================================================
// EXPORT ALL
// ============================================================

export default {
  universities: universitiesData,
  searchUniversities,
  getUniversityByName,
  getUniversitiesByCountry,
  getAllCountries,
  getStatesByCountry,
  getUniversitiesByState,
  getUniversityByDomain,
  getNigerianUniversities,
}