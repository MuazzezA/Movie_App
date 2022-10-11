const fetchSeachMovie = async ({ search }) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c8b647e608mshed7438edd4a66fap1224cbjsn00fc99f79b87",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(
      `https://imdb8.p.rapidapi.com/auto-complete?q=${search}`,
      options
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchSeachMovie;
