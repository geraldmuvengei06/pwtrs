
export const useMyFetch: typeof useFetch = (request, opts?) => {
  const config = useRuntimeConfig()

  const headers = {
    "Authorization": `bearer ${config.public?.baseToken}`
  }
console.log("opts", opts);



  return useFetch(request, { 
    baseURL: config.public?.baseURL,
    ...opts,
    headers
  })
}