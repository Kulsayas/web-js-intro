async function callApi() {
  try {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const data = await fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
      console.log(data);
      document.getElementById("my-id").innerHTML = `
        <br />
        <div>id: ${data.id}</div>
        <div>title: ${data.title}</div>
      `;
  } catch (error) {
    console.error(error);
  }
}
