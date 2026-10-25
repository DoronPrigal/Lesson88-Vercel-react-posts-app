import { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://typicode.com')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', direction: 'rtl', textAlign: 'right' }}>
      <h1>הפוסטים שלי מ-JSONPlaceholder</h1>
      <div>
        {posts.map(post => (
          <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '15px', borderRadius: '8px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;