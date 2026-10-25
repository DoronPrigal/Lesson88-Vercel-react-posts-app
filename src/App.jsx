import { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Error fetching:", err));
  }, []);

  return (
    // הוספת רקע כהה קבוע שמכסה את כל המסך כדי שהטקסט יבלוט
    <div style={{ 
      backgroundColor: '#1a1a1a', 
      minHeight: '100vh', 
      width: '100%',
      margin: 0,
      padding: '20px', 
      fontFamily: 'Arial, sans-serif', 
      direction: 'rtl', 
      textAlign: 'right',
      boxSizing: 'border-box'
    }} translate="no"> {/* מונע מגוגל טרנסלייט לשבור את האתר */}
      
      <h1 style={{ color: '#ffffff', marginBottom: '20px' }}>הפוסטים שלי מ-JSONPlaceholder</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {posts.map(post => (
          <div key={post.id} style={{ 
            background: '#2a2a2a', 
            padding: '20px', 
            borderRadius: '8px', 
            border: '1px solid #333',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#646cff', margin: '0 0 10px 0' }}>{post.title}</h3>
            <p style={{ color: '#e0e0e0', margin: 0, lineHeight: '1.5' }}>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;