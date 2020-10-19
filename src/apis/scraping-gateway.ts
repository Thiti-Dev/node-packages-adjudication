import axios from 'axios'

const BASE_URL = "https://scraping-gateways.herokuapp.com" // won't set at axios-default because other folder might have a diffrent url path

export default {
    async getWeeklyDownloadForPackage(packageName?: string){
        const resp = await axios.get(BASE_URL+`/api/npm/${packageName}`)
        console.log(resp.data)
    }
}