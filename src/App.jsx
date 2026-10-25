import { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://typicode.com')
      .then(response => response.json())
      .then(data => {
        console.log("הנתונים שהגיעו:", data); // בדיקה ב-Console של הדפדפן
        setPosts(data);
      })
      .catch(err => console.error("שגיאה במשיכת הנתונים:", err));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', direction: 'rtl', textAlign: 'right', color: '#000000' }}>
      <h1 style={{ color: '#ffffff' }}>הפוסטים שלי מ-JSONPlaceholder</h1>
      <div style={{ marginTop: '20px' }}>
        {posts.map(post => (
          <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '15px', borderRadius: '8px', background: '#ffffff', color: '#333333' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>{post.title}</h3>
            <p style={{ margin: 0 }}>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;