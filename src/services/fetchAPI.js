const ApiPost = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      const users = await ApiUsers();
      const usersPost = data.map((el) => ({
        ...el, user: users.find((userEl) => el.userId === userEl.id).name
      }))
      return usersPost;
    } catch (error) {
      console.error(error);
    }
  };

const ApiUsers = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    }catch (error) {
        console.error(error);
    }
}

const ApiUsersById = async (id) => {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

const ApitPostscomments = async (id) => {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
export { ApiUsers, ApiPost, ApiUsersById, ApitPostscomments }