import { Header } from './header/Header';
import './App.css';
import { useState , useEffect } from "react";
import { Content } from './content/Content';
import { Footer } from './footer/Footer';
import { AddItems } from './addItem/AddItems';
import SearchItem from './searchItem/SearchItem';
import apiRequest from './apiRequest/apiRequest';


function App() {

  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState(
    []
);
  const [newItems,setNewItems] = useState("");
  const [newSearch,setNewSearch] = useState("");
  const [fetchError,setFetchError] = useState(null);
  const [loading,setLoading] = useState(true);

  

  useEffect(()=>{
    // JSON.parse(localStorage.getItem("to-do-list")) -> Local Storage
    const fetchItems = async() =>{
      try{
        const response = await fetch(API_URL);
        console.log(response);
        if(!response.ok){
          throw Error("Data Not Recevied")
          
        }
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null)
      }catch(err){
        setFetchError(err.message);
      }finally{
        setLoading(false);
      }
    } 
    setTimeout(() => {
      (async() => await fetchItems())();
    },2000);
  },[ ]);

  const addListItems = async(item) => {
    const id = items.length ? items[items.length-1].id + 1 : 1;
    const addItems = {id,checked:false,item};
    const listItems = [...items,addItems];
    setItems(listItems);
    // localStorage.setItem("to-do-list",JSON.stringify(listItems)) -> Local Storage

    const postOption = {
      method : "POST",
      header : {"Content-Type" : "application/json"},
      body : JSON.stringify(addItems) 
    }

    const result = await apiRequest(API_URL,postOption);

    if(result){
      return setFetchError(result);
    }

    
  }

  const handleCheck = async(id) => {
    const listItems = items.map((item)=> item.id === id ? {...item ,checked :!item.checked} : item);
    setItems(listItems);
    // localStorage.setItem("to-do-list",JSON.stringify(listItems)) -> Local Storage

    const myItem = listItems.filter((item)=> item.id === id);

    const updateOption = {
      method : "PATCH",
      header : {"Content-Type" : "application/json"},
      body : JSON.stringify({checked:myItem[0].checked})
    }
    const reqURL = `${API_URL}/${id}`
    const result = await apiRequest(reqURL,updateOption);

    if(result){
      return setFetchError(result);
    }
  };
  const handleDelete = async(id) => {
    const listItems = items.filter((item)=> item.id !== id);
    setItems(listItems);
    // localStorage.setItem("to-do-list",JSON.stringify(listItems)) -> Local Storage

    const deleteOption = {
      method : "DELETE",
    }
    const reqURL = `${API_URL}/${id}`
    const result = await apiRequest(reqURL,deleteOption);
    if(result){
      return setFetchError(result);
    }
    
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!newItems){
      return
    }
    // console.log(newItems);
    // add Items
    addListItems(newItems);

    setNewItems('');
  }


  return (
    <div className="App">
      <div className='wrapper'>
        <Header title = "To Do List" />
        <SearchItem
        newSearch = {newSearch}
        setNewSearch = {setNewSearch}
        />
        <AddItems 
          newItems = {newItems}
          setNewItems = {setNewItems}
          handleSubmit = {handleSubmit}
        />
        <main className='mainBlock'>
          {loading && <div className='dangerAlert'><p>Loading Your Data...</p></div>}
          {fetchError && <div className='dangerAlert'><p >{`Error : ${fetchError}`}</p></div>}
        {!loading && !fetchError && <Content 
          items = {items.filter(item=>((item.item).toLowerCase()).includes(newSearch.toLowerCase()))}
          handleCheck = {handleCheck}
          handleDelete= {handleDelete}
        />}
        </main>
        
        <Footer />
    </div>
    </div>
  );
}

export default App;
