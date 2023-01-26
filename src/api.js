import axios from "axios";

const searchImages = async (term) =>{
 const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID WA4YffUftKnaCmh_oaKq0vl3fI0mRlYy-R2z0z88J3g",
    },
    params: {
      query: term,
    },
  });
  //console.log(response);
  return response.data.results;
}

export default searchImages;