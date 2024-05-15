
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Header, List } from "semantic-ui-react";

function App() {

const [activities,  setActivities] = useState([]);

useEffect(() => {
  axios.get('http://localhost:5000/api/activities')
  .then(response =>{
    console.log(response)
    setActivities(response.data)
  })
  },[])

  interface Activity {
    id: string;
    title: string;
    description: string;
    category: string;
    date: Date;
    city: string;
    venue: string;
  
  }


return (
  <>
<Header as='h2' icon='users' content='Reactivities' />
<List>  
  {activities.map((activity: Activity) => (
    <List.Item key={activity.id}>
      {activity.title}
      </List.Item>
  ))}
</List>
  </>
)
}

export default App;
