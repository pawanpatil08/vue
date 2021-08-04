// https://1drv.ms/u/s!Ao-ceLq5rZm3hqoC4fYZl9zsejQ3bw?e=q3nFaU

const url = "https://jsonplaceholder.typicode.com/posts";

const postApiClient = {
    getAllPosts: function () {
        return new Promise((resolve, reject) => {
            fetch(url).then((response) => {
                response.json().then((data) => {
                    setTimeout(() => {
                        resolve(data);
                    }, 2000);
                }).catch((err) => {
                    console.error(err);
                    reject("Parsing Error...");
                });
            }).catch((err) => {
                console.error(err);
                reject("Communication Error...");
            });
        });
    }
};

export default postApiClient;

// Ajax Communication Code
// XMLHttpRequest (XHR)
// Fetch
// jQuery AJAX
// Axios
// vue-resource ($http)