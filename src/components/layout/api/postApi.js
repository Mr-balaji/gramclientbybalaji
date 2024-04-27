export default async function postData(url, data) {
  let resp = null
    let loading = true;
    let errorMessage = null

  try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      });

      if (!response.ok) {
        // Handle non-2xx status codes (e.g., 404, 500)
        throw new Error('Request failed with status ' + response.status);
      }

      const responseData = await response.json();
      // console.log("responseData",responseData);

      resp = responseData
        loading = false
    }
    catch (error) {
      // Handle any network errors or exceptions
      errorMessage = error.message
        loading = false
    }

    let response = { resp, loading, errorMessage }
    return response;
    // return {response }
  }

  // export default postData