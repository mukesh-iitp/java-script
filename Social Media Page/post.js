//Complete this JS file to render the post1 on the screen with all the specified tags.
let post1 ={
    id: 1, 
    author: 'John',
    content: 'My first Post!', 
    likes: 10, 
    comments: ['Great post!', 'Nice photo!'], 
    image: 'https://files.codingninjas.in/image2-28694.jpg' 

};

const likedPosts = new Set();

function renderPosts() {
    
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

      const postElement = document.createElement('div');
      postElement.classList.add('post');
  
      const authorElement = document.createElement('h3');
      authorElement.textContent = post1.author;
  
      const contentElement = document.createElement('p');
      contentElement.textContent = post1.content;
  
      const imageElement = document.createElement('img');
      imageElement.src = post1.image;
      imageElement.alt = 'Post Image';
  
      const likeButton = document.createElement('button');
      likeButton.textContent = `Like`;
      likeButton.classList.add('like-button');
      likeButton.addEventListener('click', () => {
        if (!likedPosts.has(post1.id)) {
            likePost();
            likedPosts.add(post1.id);
            likeButton.disabled = true; // Disable the button after clicking
          }
      });

      const commentInput = document.createElement('input');
      commentInput.type = 'text';
      commentInput.placeholder = 'Write a comment...';
  
      const commentButton = document.createElement('button');
      commentButton.textContent = 'Comment';
      commentButton.textContent = 'Comment';
  commentButton.classList.add('comment-button')
  commentButton.addEventListener('click', () => {
    addComment(commentInput.value);
    commentInput.value = '';
  },{once:true});

  
      const postFooter = document.createElement('div');
      postFooter.classList.add('post-footer');
      postFooter.textContent = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;
  
      const commentsContainer = document.createElement('div');
      commentsContainer.classList.add('comments-container');
      commentsContainer.style.display = 'none';
  
      post1.comments.forEach((comment) => {
        const commentElement = document.createElement('p');
        commentElement.textContent = comment;
        commentsContainer.appendChild(commentElement);
      });
  
      postElement.appendChild(authorElement);

      postElement.appendChild(imageElement);
      postElement.appendChild(contentElement);
      postElement.appendChild(likeButton);
      postElement.appendChild(commentInput);
      postElement.appendChild(commentButton);
      postElement.appendChild(postFooter);
      postElement.appendChild(commentsContainer);
  
      postFooter.addEventListener('click', () => {
        if (commentsContainer.style.display === 'none') {
          commentsContainer.style.display = 'block';
        } else {
          commentsContainer.style.display = 'none';
        }
      });
  
      postsContainer.appendChild(postElement);
    }

    

// Function to handle post liking
function likePost() {
  post1.likes++;
  renderPosts();
  const button = document.querySelector('.like-button');
  button.style.backgroundColor = 'red';
}

// Function to handle adding a comment
function addComment(comment) {
  post1.comments.push(comment);
  renderPosts();
}

renderPosts();