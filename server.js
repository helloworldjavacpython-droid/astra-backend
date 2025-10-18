// server.js (SIMPLIFIED FOR DEMO)
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let requests = []; // stores data in memory (resets when server stops)

app.get('/', (req, res) => {
  res.send('✅ Astra Backend is LIVE!');
});

app.post('/api/request', (req, res) => {
  const newReq = {
    id: Date.now().toString(),
    ...req.body,
    timestamp: new Date().toISOString(),
    verified: true
  };
  requests.push(newReq);
  console.log('✅ Saved:', newReq);
  res.status(201).json({ id: newReq.id, success: true });
});

app.get('/api/requests', (req, res) => {
  // Define priority order: lower number = higher priority
  const priority = {
    Medical: 1,
    Rescue: 2,
    Supplies: 3,
    General: 4
  };

  // Create a copy of the requests array and sort it
  const sortedRequests = [...requests].sort((a, b) => {
    const priorityA = priority[a.type] || 99; // 99 = low priority (fallback)
    const priorityB = priority[b.type] || 99;
    return priorityA - priorityB; // smallest number comes first
  });

  // Send the sorted list
  res.json(sortedRequests);
});
// Mock list of rescue teams (you can change names/locations)
const responders = [
  { id: 1, name: "MediTeam Alpha", type: "Medical", lat: 19.0760, lng: 72.8777, available: true },
  { id: 2, name: "Rescue Boat 3", type: "Rescue", lat: 19.2183, lng: 72.9781, available: true },
  { id: 3, name: "Relief Van", type: "Supplies", lat: 18.9388, lng: 72.8353, available: false }
];

// New endpoint: GET /api/responders
app.get('/api/responders', (req, res) => {
  res.json(responders);
});
app.get('/api/stats', (req, res) => {
  const total = requests.length;
  const medical = requests.filter(r => r.type === 'Medical').length;
  const rescue = requests.filter(r => r.type === 'Rescue').length;
  const supplies = requests.filter(r => r.type === 'Supplies').length;
  res.json({ total, medical, rescue, supplies });
});

app.listen(PORT, () => {
  console.log(`🚀 Running on http://localhost:${PORT}`);
});
